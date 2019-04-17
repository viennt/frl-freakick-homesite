import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from '../models/Message';

@Injectable()
export class SecretWordService {
  constructor(private messageService: MessageService) {}

  checkSecretWord(secretWord: string, page: string): Promise<any> {
    return new Promise((resolve, reject) => {

      // FixMe: Remove this condition after fixed issue with Websocket on iOS 11
      if (secretWord === '654a887db446ba5954538f893a0eb00e'
         || secretWord === '131007f87e81a8ac373e08a5a31bc5ab'
         || secretWord === '621033a4e376aab019dd02c5810181da') {
        resolve('OK');
      } else {
        this.messageService.messages.subscribe(
          (response: any) => {
            if (response.messageType === 'CHECK_VALID_SECRET_WORD_SUCCESS') {
              resolve(response);
            } else if (response.data.errorType === 'INVALID_SECRET_WORD') {
              reject(response);
            }
          }
        );
        this.messageService.sendMessage(new Message('CHECK_VALID_SECRET_WORD', {
          'secretKey': secretWord,
          'visitedPage': page
        }));
      }
    });
  }
}
