import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import * as StackTraceParser from 'error-stack-parser';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) { }

  handleError(error: any) {
    const notificationService = this.injector.get(NotificationService);
    const router = this.injector.get(Router);

    console.error(error);
    router.navigate(['/error'], { queryParams: { error: error.status } });

    // if (error instanceof HttpErrorResponse) {
    //   // Server error happened
    //   if (!navigator.onLine) {
    //     // No Internet connection
    //     return notificationService.notify('No Internet Connection');
    //   }
    //   // Http Error
    //   return notificationService.notify(`${error.status} - ${JSON.stringify(error)}`);
    // } else {
    //   // Client Error Happend
    //   router.navigate(['/error'], { queryParams: { error: error.status } });
    // }



  }
}

