import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../storage.service';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
  standalone: false,
})
export class FormComponentComponent implements OnInit {
  loginForm!: FormGroup;
  data = {
    psw: 123456,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: StorageService
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    if (
      !this.loginForm.value.password.trim() &&
      !this.loginForm.value.username.trim()
    ) {
      return;
    }

    const password = this.loginForm.value.password;

    if (!this.validPassword(password)) {
      console.log('Invalid password');
      return;
    }

    const navigationExtras: NavigationExtras = {
      state: {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      },
    };

    // create a local storage item with the username and password

    this.storage.setItem(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    // Navigate to the home page with the provided username and password
    this.router.navigate(['/home'], navigationExtras);
  }

  validPassword(psw: string): boolean {
    const password = this.data.psw;
    console.log(password.toString(), psw);

    if (password.toString() !== psw) {
      return false;
    }
    return true;
  }
}
