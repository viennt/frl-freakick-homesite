export interface IMatchState {
  matchStateId: number;
  matchStateCode: string;
  matchStateName: string;
}

export class MatchupState {
  public matchStateId: number;
  public matchStateCode: string;
  public matchStateName: string;

  constructor()
  constructor(options: IMatchState)
  constructor(options?: IMatchState) {
    this.matchStateId = options && options.matchStateId || -1;
    this.matchStateCode = options && options.matchStateCode || 'CODE';
    this.matchStateName = options && options.matchStateName || 'Unknown match state';
  }

  public isComingUp() {
    return this.matchStateCode === 'CU';
  }

  public isLive() {
    return this.matchStateCode === 'LI';
  }

  public isFinished() {
    return this.matchStateCode === 'FT';
  }

  public isIncompleteLineup() {
    return this.matchStateCode === 'IC';
  }
}
