import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CoreRoutingModule } from './core.routing.module';

import { HeaderPresenterComponent } from './header-presenter/header-presenter.component';
import { FooterPresenterComponent } from './footer-presenter/footer-presenter.component';
import { CoreComponent } from './core.component';
import { LoginComponent } from '../login/login.component';
import { SpecialEventsComponent } from '../special-events/special-events.component';
import { RegisterComponent } from '../register/register.component';
import { EventsComponent } from '../events/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderPresenterComponent,
    FooterPresenterComponent,
    EventsComponent,
    RegisterComponent,
    SpecialEventsComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    CoreComponent,
  ],
  providers: [AuthGuard],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
