import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { JennNavComponent } from './navigation/jenn-nav/jenn-nav.component';
import { JennAboutComponent } from './about/jenn-about/jenn-about.component';
import { JennMeCardComponent } from './about/jenn-about/jenn-me-card/jenn-me-card.component';
import { JennWorkCardComponent } from './about/jenn-about/jenn-work-card/jenn-work-card.component';
import { JennSkillsCardComponent } from './about/jenn-about/jenn-skills-card/jenn-skills-card.component';
import { JennAccomplishmentsCardComponent } from './about/jenn-about/jenn-accomplishments-card/jenn-accomplishments-card.component';
import { JennProjectComponent } from './projects/jenn-project/jenn-project.component';
import { JennResearchComponent } from './research/jenn-research/jenn-research.component';
import { JennMiscComponent } from './misc/jenn-misc/jenn-misc.component';

@NgModule({
  declarations: [
    AppComponent,
    JennNavComponent,
    JennAboutComponent,
    JennMeCardComponent,
    JennWorkCardComponent,
    JennSkillsCardComponent,
    JennAccomplishmentsCardComponent,
    JennProjectComponent,
    JennResearchComponent,
    JennMiscComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
