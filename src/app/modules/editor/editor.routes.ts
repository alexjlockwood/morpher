import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/core/services/auth';
import { ProjectResolver } from 'app/core/services/projects';

import { EditorComponent } from './editor.component';

const routes: Routes = [
  {
    path: ':id',
    component: EditorComponent,
    // TODO: remove this? make it possible to enter this screen w/o logging in?
    canActivate: [AuthGuard],
    resolve: { data: ProjectResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}