import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SpediterComponent } from 'app/spediter/spediter.component';
import { MemorandumComponent } from 'app/memorandum/memorandum.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'pocetna',      component: DashboardComponent },
    { path: 'spediter',        component: SpediterComponent },
    { path: 'memorandum',        component: MemorandumComponent }
];
