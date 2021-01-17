import { Component, AfterViewInit, OnInit, } from '@angular/core';

import {
    Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';
import { MatDialog } from "@angular/material/dialog";

import { NotificationService } from './providers/services/notification.service';
import { AuthService } from './providers/auth-gaurds/auth-user.service';
import { SessionService } from './providers/services/session.service';
import { I18nService } from './providers/services/i18n.service';
import { StartupComponent } from './theme/dialog/startup/startup.component';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    notification: string;
    showNotification: boolean;
    private Lat;
    private Long;
    private p = true;

    constructor(
        private router: Router,
        private notificationService: NotificationService,
        private i18n: I18nService,
        public auth: AuthService,
        private session: SessionService,
        private modalService: MatDialog
    ) {
        
    }

    ngOnInit() {


        /* Initiate session with centralized server */
        this.session.initiateApp();

        /* Check if client device and region is supported */
        if(this.session.GeoDeviceSupport == false)
        {
            this.i18n.useLanguage('en');
            this.modalService.open(StartupComponent);
        }
    }

    ngAfterViewInit() {

    }

    reloadPage() {
        if (this.session.loaded) {
            window.location.reload();
        }
    }
}


