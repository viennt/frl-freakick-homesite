export class Message {
  messageType: string;
  data: any;

  /**
   * Parse JSON
   * @param {string} messageText
   */
  static fromJSON(messageText: string) {
    let result: Message = null;
    let wrapper: any = JSON.parse(messageText);

    if (wrapper.data && 'EMPTY' !== wrapper.data.toUpperCase()) {
      if (wrapper.data.startsWith('{')) {
        result = new Message(wrapper.messageType, JSON.parse(wrapper.data));
      } else {
        result = new Message(wrapper.messageType, wrapper.data);
      }
    } else {
      result = new Message(wrapper.messageType);
    }
    return result;
  }

  /**
   * Constructor
   * @param {string} messageType [Type of message, example: 'GET_BATTLE_FIELD']
   * @param {any}    data        [data of request/response message]
   */
  constructor(messageType: string, data?: any) {
    this.messageType = messageType;
    this.data = data;
  }

  /**
   * Convert input data to JSON
   * @return {string}
   */
  toJSON(): string {
    return JSON.stringify({
      'messageType': this.messageType,
      'data': this.data ? JSON.stringify(this.data) : 'EMPTY'
    });
  }
}












