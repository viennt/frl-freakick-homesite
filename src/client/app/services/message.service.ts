import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Message } from '../models/Message';

import { CookieService } from 'angular2-cookie/core';
import { AuthenticationService } from './authentication.service';

import { SECURITY, CONFIG } from '../constants';

@Injectable()
export class MessageService {
  public messageUrl: string = CONFIG.API;

  private websocket: WebSocket;
  private connecting: boolean;
  private connected: boolean;
  private outboundQueue: Message[] = [];

  private message: Subject<Message> = new Subject<Message>();

  get messages(): Subject<Message> {
    return this.message;
  }

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthenticationService
  ) { }

  /**
   * Send message to server
   * @param {Message} message
   */
  sendMessage(message: Message) {
    if (this.connected && !this.connecting) {
      let accessToken = this.cookieService.get('accessToken');
      if (accessToken !== null && accessToken !== undefined) {
        message.data.accessToken = accessToken;
      }
      if (CONFIG.ENV.toLowerCase() !== 'prod') {
        console.info(
          '%c[LOG] ' + moment().format('HH:mm:ss DD-MM-YYYY') + ' ▶️▶️▶️ ',
          'background: #5E738B; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message
        );
      }
      let apiMessage = message.toJSON();
      this.websocket.send(apiMessage);
    } else {
      this.outboundQueue.push(message);
      this.connect();
    }
  }

  /**
   * Open connection
   */
  private connect() {
    if (this.messageUrl && !this.connected && !this.connecting) {
      this.connecting = true;
      this.websocket = new WebSocket(
        this.messageUrl
        + '?clientId=' + SECURITY.CLIENT_ID
        + '&&clientSecret=' + SECURITY.CLIENT_SECRET
        + '&&appId=' + SECURITY.APP_ID
      );
      this.websocket.onerror = (event) => this.handleMessage(new Message('ERROR', `Communication error: ${event.toString()}`));
      this.websocket.onmessage = (event) => this.handleMessage(Message.fromJSON(event.data));
      this.websocket.onopen = (event) => this.onConnected();
      this.websocket.onclose = (event) => this.onDisconnected();
    }
  }

  /**
   * Handle response message
   * @param {Message} message [description]
   */
  private handleMessage(message: Message) {
    if (!!message.data.errorType && message.data.errorType === 'INVALID_ACCESS_TOKEN') {
      this.authService.logout();
      this.router.navigate(['/login']);
    } else {
      switch (message.messageType) {
        case 'ERROR':
          if (CONFIG.ENV.toLowerCase() !== 'prod') {
            console.info(
              '%c[WEBSOCKET ERROR] 😱😱😱 ',
              'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message.data
            );
          }
          break;
        default:
          if (CONFIG.ENV.toLowerCase() !== 'prod') {
            console.info(
              '%c[LOG] ' + moment().format('HH:mm:ss DD-MM-YYYY') + ' ◀️◀️◀️ ',
              'background: #4DB3A2; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message
            );
          }
          this.message.next(message);
          break;
      }
    }
  }

  /**
   * On connect listener
   */
  private onConnected() {
    this.connected = true;
    this.connecting = false;
    if (CONFIG.ENV.toLowerCase() !== 'prod') {
      console.info(
        '%c[WEBSOCKET OPENED] 📡📡📡 ',
        'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;'
      );
    }

    while (this.outboundQueue.length > 0) {
      this.sendMessage(this.outboundQueue.pop());
    }
  }

  /**
   * On disconnect listener
   */
  private onDisconnected() {
    this.connected = false;
    this.connecting = false;
    this.message.next(new Message('CLOSED', 'Connection closed. Please try again.'));
    if (CONFIG.ENV.toLowerCase() !== 'prod') {
      console.info(
        '%c[WEBSOCKET CLOSED] 🚫🚫🚫 ',
        'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;'
      );
    }
  }
}
