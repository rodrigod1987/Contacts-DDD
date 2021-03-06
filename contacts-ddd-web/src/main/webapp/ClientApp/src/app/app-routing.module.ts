import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home'
    }
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contact.module').then(m => m.ContactModule),
    data: {
      title: 'Contacts'
    }
  },
  {
    path: 'account',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: {
      title: 'Account'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not Found Page'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

