import { Injectable, ViewChild, Output, EventEmitter } from '@angular/core';
// @ts-ignore
import { WebConfig } from '../../webconfig';
import Echo from 'laravel-echo';

/*  */


declare global {
    interface Window { io: any; }
    interface Window { Echo: any; }
    interface Window { redis: any; }
}


export class SocketEcho extends WebConfig {

    constructor() {
        super();
        window.io = window.io || require('socket.io-client');
        window.Echo = window.Echo || {};

    }


    /*    
     */

    public initiateConnection(Token, CSRF = null) {

        var local = "http://localhost:6001";
        var prod = 'https://socket.ptpro.fit:6001';
        var production_env = true;

        window.Echo = new Echo({
            broadcaster: 'socket.io',
            host: (this.env === this.prod) ? prod : local,
            auth: {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + Token, 
                },
            },
        });

    }

    emitMessage(Channel) {

    }

    public CloseConnection(Channel) {
        window.Echo.leave(Channel);
        
    }



}
