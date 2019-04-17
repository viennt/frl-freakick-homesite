
export interface IGameStatusOptions {
  id: number;
  statusCode: string;
  statusName: string;
}

export class GameStatus {
  public id: number;
  public statusCode: string;
  public statusName: string;

  constructor();
  constructor(options: IGameStatusOptions);
  constructor(options?: IGameStatusOptions) {
    this.id = options && options.id || 0;
    this.statusCode = options && options.statusCode || '';
    this.statusName = options && options.statusName || '';
  }

  public isAccepted() {
    return this.statusCode === 'AC';
  }

  public isOnGoing() {
    return this.statusCode === 'ON';
  }

  public isDone() {
    return this.statusCode === 'DO';
  }
}
