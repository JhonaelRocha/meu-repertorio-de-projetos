import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { UnityPageComponent } from './pages/unity-page/unity-page.component';
import { UnityProjectCardComponent } from './unity-project-card/unity-project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BigButtonComponent,
    HeaderComponent,
    HomeComponent,
    ContentComponent,
    ProjectCardComponent,
    UnityPageComponent,
    UnityProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
