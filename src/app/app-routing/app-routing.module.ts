import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JennAboutComponent } from '../about/jenn-about/jenn-about.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: JennAboutComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
