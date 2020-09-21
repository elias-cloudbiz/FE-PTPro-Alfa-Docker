// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { AuthService } from '../../../providers/guards/auth.service';
// @ts-ignore
import { Router } from '@angular/router';
// @ts-ignore
import { SharingService } from '../../../providers/guards/sharing.service';
// @ts-ignore
import { SocketEcho } from '../../../providers/services/SocketEcho.service';
// @ts-ignore
import { ModalService } from '../../../providers/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// @ts-ignore
export class LoginComponent implements OnInit {
  error = '';
  model: any = {};
  constructor(private service: AuthService, private router: Router, private dservice: SharingService, private messaging: SocketEcho, private modal: ModalService) { }

  ngOnInit() {

    // Check if token exists
    if(this.service.isAuthenticated()){
      ///this.router.navigate(['/my']);
      this.dservice.isUserLoggedIn.next(true);
      // this.messaging.initiateConnection(this.service.Token());

    }

  }

  signin() {
    this.error = '';
    this.service.login(this.model.email, this.model.password).subscribe(
      data => {
        if (data) {

          this.router.navigate(['/my']);
          this.dservice.isUserLoggedIn.next(true);
          this.modal.close('Login');
        }
      },
      error => {
        this.error = 'Invalid Credentials';
      });
  }

}
