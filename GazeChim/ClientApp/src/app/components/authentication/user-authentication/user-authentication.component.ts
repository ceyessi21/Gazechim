import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss'],
})
export class UserAuthenticationComponent implements OnInit {
  error!: string;
  token =
    localStorage.getItem('token') != null &&
    localStorage.getItem('token') != undefined
      ? localStorage.getItem('token')
      : '';
  url!: string;
  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    if (!this.token) {
      this.route.queryParams.subscribe(async (params: { [x: string]: any }) => {
        if (params['error']) {
          this.error = params['error'];
          console.log('access denied');
        }
        if (params['code']) {
          this.getToken(params['code']);
        }
      });
    }
  }

  async redirection(): Promise<void> {
    this.url = await firstValueFrom(this.authService.getAuthorize());
    window.location.href = this.url;
  }

  async getToken(code: any): Promise<void> {
    var token = await firstValueFrom(this.authService.getToken(code));
    localStorage.setItem('token', token.access_token);
  }
}
