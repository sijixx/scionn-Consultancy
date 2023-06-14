import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './reuseables/header/header.component';
import { FooterComponent } from './reuseables/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutUsComponent,
    ProjectsComponent,
    ContactsComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
