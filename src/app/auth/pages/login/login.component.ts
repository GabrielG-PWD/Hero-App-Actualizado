import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    this.authService.login()
      .subscribe(r => {
        console.log(r);
        if (r.id) {
          this.router.navigate(['./heroes']);
        }
      })
  }

}
