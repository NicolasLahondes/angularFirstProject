import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isConnected: boolean;
  tokenSub: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe((token: string) => {
      this.isConnected = false;
      if (token) {
        this.isConnected = true;
      }
    });
  }

  onClickSignOut() {
    this.authService
      .signOut()
      .then((result) => {
        this.router.navigateByUrl('auth');
      })
      .catch((err) => {});
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
  }
}
