import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JennAboutComponent } from '../about/jenn-about/jenn-about.component';
import { JennProjectComponent } from '../projects/jenn-project/jenn-project.component';
import { JennResearchComponent } from '../research/jenn-research/jenn-research.component';
import { JennMiscComponent } from '../misc/jenn-misc/jenn-misc.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: JennAboutComponent },
  { path: 'projects', component: JennProjectComponent },
  { path: 'research', component: JennResearchComponent },
  { path: 'misc', component: JennMiscComponent }
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
