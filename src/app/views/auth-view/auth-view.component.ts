import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css'],
})
export class AuthViewComponent implements OnInit {

errMsg: string;

  constructor(private authService: AuthService, private router: Router) {

}

  ngOnInit(): void {}

  onSubmitAuthForm(form: NgForm) {
    const values = form.form.value;

    this.authService
      .signIn(values.email, values.password)
      .then((result) => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
    //TODO Récupérer messages erreurs avec le form
  }
}
