import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  admin: Admin = {
    username: 'admin',
    password: 'admin',
  };

  loginCheck(username: string, password: string): boolean {
    if (this.admin.username === username && this.admin.password === password) {
      return true;
    } else {
      return false;
    }
  }
}
