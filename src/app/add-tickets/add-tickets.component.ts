import { Component, OnInit } from '@angular/core';
import { ThfBreadcrumb, ThfNotificationService } from '@totvs/thf-ui';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/home/dashboard' },
      { label: 'Abrir ticket' }
    ]
  };

  constructor(private authService: AuthService,
              private thfNotification: ThfNotificationService,
              private router: Router) { }

  ngOnInit() {
    this.loadScript();
  }

  public loadScript() {
    const textInput = document.getElementById('textInput');
    const chat = document.getElementById('chat');

    let context = {};

    const templateChatMessage = (message, from) => `
      <div class="from-${from}">
        <div class="message-inner">
          <p class="thf-mb-4">${message}</p>
        </div>
      </div>
    `;

    const InsertTemplateInTheChat = template => {
      const div = document.createElement('div');
      div.innerHTML = template;

      chat.appendChild(div);
    };

    const getWatsonMessageAndInsertTemplate = async (text = '') => {
      const uri = 'http://localhost:3500/watson/conversation/';
      const uriTickets = 'http://localhost:3500/tickets/create';

      const response = await (await fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          context,
        }),
      })).json();

      context = response.context;

      if (response.output.text[0].toLowerCase() === 'ticket salvo com sucesso.') {

        const responseTickets = await (await fetch(uriTickets, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'authorization': `${this.authService.getToken()}`},
          body: JSON.stringify({
            name: response.context.name,
            email: response.context.email,
            problem_description: response.context.problem_description
          }),
        })).json();

        this.thfNotification.success(`Ticket criado, seu código é: ${responseTickets.message}`);

        setTimeout(() => {
          this.router.navigate(['/home/dashboard']);
        }, 6000);
      }

      const template = templateChatMessage(response.output.text, 'watson');

      InsertTemplateInTheChat(template);
    };

    textInput.addEventListener('keydown', event => {
      if (event.keyCode === 13 && textInput['value']) {
        getWatsonMessageAndInsertTemplate(textInput['value']);

        const template = templateChatMessage(textInput['value'], 'user');
        InsertTemplateInTheChat(template);

        textInput['value'] = '';
      }
    });

    getWatsonMessageAndInsertTemplate();
  }

}
