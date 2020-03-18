import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'user_panel', component: UserPanelComponent },
  { path: 'not_found', component: NotFoundComponent },

  {
    path: '',
    redirectTo: 'user_panel',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
