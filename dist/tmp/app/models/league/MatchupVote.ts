import {
  IMatchupTeamPrediction,
  MatchupTeamPrediction
} from './MatchupTeamPrediction';

export interface IMatchupVote {
  homeTeamPrediction: IMatchupTeamPrediction;
  awayTeamPrediction: IMatchupTeamPrediction;
}

export class MatchupVote {
  public homeTeamPrediction: MatchupTeamPrediction;
  public awayTeamPrediction: MatchupTeamPrediction;

  constructor()
  constructor(options: IMatchupVote)
  constructor(options?: IMatchupVote) {
    this.homeTeamPrediction = options && new MatchupTeamPrediction(options.homeTeamPrediction) || new MatchupTeamPrediction();
    this.awayTeamPrediction = options && new MatchupTeamPrediction(options.awayTeamPrediction) || new MatchupTeamPrediction();;
  }
}
