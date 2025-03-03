import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatCardModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  errorMessageEmail = signal('');
  errorMessagePassword = signal('');

  constructor() {
    merge(this.loginForm.statusChanges, this.loginForm.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessages());
  }


  updateErrorMessages() {
    if (this.loginForm.get('email')?.errors?.['required']) {
      this.errorMessageEmail.set('You must enter a value');
    } else if (this.loginForm.get('email')?.errors?.['email']) {
      this.errorMessageEmail.set('Not a valid email'); 
    } else {
      this.errorMessageEmail.set('');
    }
    
    if (this.loginForm.get('password')?.errors?.['required']) {
      this.errorMessagePassword.set('Not a valid email'); 
    } else if (this.loginForm.get('password')?.errors?.['minlength']) {
      this.errorMessagePassword.set('Minimum password length is 6 characters'); 
    } else {
      this.errorMessagePassword.set('');
    }
    
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }




}
