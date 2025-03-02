import { Routes } from '@angular/router';
import { AboutMainComponent } from './about/components/about-main/about-main.component';
import { MapBaseComponent } from './map/components/map-base/map-base.component';

export const routes: Routes = [
    
    {path: 'about', component: AboutMainComponent}, 
    {path: 'map', component: MapBaseComponent}


];
