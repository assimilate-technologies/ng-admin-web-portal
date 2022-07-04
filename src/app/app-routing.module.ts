import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { NonAuthGuard } from './shared/guard/non-auth.guard';

const routes: Routes = [
  {
    path: '',loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [NonAuthGuard]  },
  { path: 'not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
