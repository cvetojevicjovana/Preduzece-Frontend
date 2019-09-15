import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { SpediterComponent } from 'app/spediter/spediter.component';
import { MemorandumComponent } from 'app/memorandum/memorandum.component';
import { VrsteOvlascenjaComponent } from 'app/vrste-ovlascenja/vrste-ovlascenja.component';
import { UnosSpediteraComponent } from 'app/spediter/unos-speditera/unos-speditera.component';
import { PrikazSpediteraComponent } from 'app/spediter/prikaz-speditera/prikaz-speditera.component';
import { IzmenaSpediteraComponent } from 'app/spediter/izmena-speditera/izmena-speditera.component';
import { UnosMemorandumaComponent } from 'app/memorandum/unos-memoranduma/unos-memoranduma.component';
import { PrikazMemorandumaComponent } from 'app/memorandum/prikaz-memoranduma/prikaz-memoranduma.component';
import { IzmenaMemorandumaComponent } from 'app/memorandum/izmena-memoranduma/izmena-memoranduma.component';
import { PrikazVrsteOvlascenjaComponent } from 'app/vrste-ovlascenja/prikaz-vrste-ovlascenja/prikaz-vrste-ovlascenja.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    SpediterComponent,
    UnosSpediteraComponent,
    PrikazSpediteraComponent,
    IzmenaSpediteraComponent,
    MemorandumComponent,
    UnosMemorandumaComponent,
    PrikazMemorandumaComponent,
    IzmenaMemorandumaComponent,
    VrsteOvlascenjaComponent,
    PrikazVrsteOvlascenjaComponent
  ]
})

export class AdminLayoutModule { }
