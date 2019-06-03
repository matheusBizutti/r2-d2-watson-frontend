import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      { path: 'search-tickets',
        loadChildren: './search-tickets/search-tickets.module#SearchTicketsModule'
      },
      { path: 'add-tickets',
        loadChildren: './add-tickets/add-tickets.module#AddTicketsModule'
      }
    ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
