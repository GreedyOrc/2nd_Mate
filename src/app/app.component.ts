import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  imports: [ 
    NavComponent, 
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2nd_Mate';
}
