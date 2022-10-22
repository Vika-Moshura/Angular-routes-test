import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { UserlistComponent } from './works/userlist/userlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'tasklist', component: TasklistComponent },
      { path: 'userlist', component: UserlistComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
