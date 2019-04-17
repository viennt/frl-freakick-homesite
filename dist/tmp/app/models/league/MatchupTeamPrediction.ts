export interface IMatchupTeamPrediction {
  matchUpId: number;
  teamId: number;
  winPercentage: number;
  lossPercentage: number;
  tiePercentage: number;
  countWin: number;
  countLoss: number;
  countTie: number;
  totalVote: number;
}

export class MatchupTeamPrediction {
  public winPercentage: number;
  public lossPercentage: number;
  public tiePercentage: number;
  public countWin: number;
  public countLoss: number;
  public countTie: number;
  public totalVote: number;

  constructor()
  constructor(options: IMatchupTeamPrediction)
  constructor(options?: IMatchupTeamPrediction) {
    this.winPercentage = options && options.winPercentage || 0;
    this.lossPercentage = options && options.lossPercentage || 0;
    this.tiePercentage = options && options.tiePercentage || 0;
    this.countWin = options && options.countWin || 0;
    this.countLoss = options && options.countLoss || 0;
    this.countTie = options && options.countTie || 0;
    this.totalVote = options && options.totalVote || 0;
  }
}
