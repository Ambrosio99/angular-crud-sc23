import { Component } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css'],
})
export class HomeLoginComponent {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  login(admin: Admin) {
    if (this.loginForm.valid) {
      if (this.loginService.loginCheck(admin.username, admin.password)) {
        this.router.navigate(['customer-list']);
      } else {
        this.toastr.error('Usuário ou senha inválido.', 'Erro!');
      }
    } else {
      this.toastr.warning('Coloque valores válidos.', 'Atenção!');
    }
  }
}
