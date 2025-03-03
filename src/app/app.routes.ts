import { Routes } from '@angular/router';
import { AboutMainComponent } from './about/components/about-main/about-main.component';
import { MapBaseComponent } from './map/components/map-base/map-base.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { DataMainComponent } from './data/components/data-main/data-main.component';

export const routes: Routes = [
    
    {path: 'about', component: AboutMainComponent}, 
    {path: 'map', component: MapBaseComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'data', component:DataMainComponent},
    {path: '', component: MapBaseComponent}

];
