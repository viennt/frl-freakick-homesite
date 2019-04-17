import { ILeagueTeam, LeagueTeam } from './LeagueTeam';
import { ILeagueStanding, LeagueStanding } from './LeagueStanding';
import { ILeagueWeek, LeagueWeek } from './LeagueWeek';
import { IMatchupLocation, MatchupLocation } from './MatchupLocation';
import { IMatchState, MatchupState } from './MatchupState';
import { IMatchupVote, MatchupVote } from './MatchupVote';

import { HelpService } from '../../services/help.service';
import { LocationService } from '../../services/location.service';

export interface ILeagueMatchup {
  matchupId: number;
  actualMinute: number;
  actualMinuteAdded: number;
  awayScore: number;
  awayTeam: ILeagueTeam;
  awayTeamCompetition: ILeagueStanding;
  homeScore: number;
  homeTeam: ILeagueTeam;
  homeTeamCompetition: ILeagueStanding;
  location: IMatchupLocation;
  matchState: IMatchState;
  matchupDate: string;
  week: ILeagueWeek;
  code: string;
  matchVoteInfo: IMatchupVote;
  isUserLiked: boolean;
  numberOfComments: number;
  numberOfLikes: number;
}

export class LeagueMatchup {
  public matchupId: number;
  public actualMinute: number;
  public actualMinuteAdded: number;
  public awayScore: number;
  public awayTeam: LeagueTeam;
  public homeScore: number;
  public homeTeam: LeagueTeam;
  public awayTeamCompetition: LeagueStanding;
  public homeTeamCompetition: LeagueStanding;
  public location: MatchupLocation;
  public matchupState: MatchupState;
  public matchupDate: string;
  public week: LeagueWeek;
  public code: string;
  public vote: MatchupVote;
  public isUserLiked: boolean;
  public numberOfComments: number;
  public numberOfLikes: number;

  constructor()
  constructor(options: ILeagueMatchup)
  constructor(options?: ILeagueMatchup) {
    this.matchupId = options && options.matchupId || -1;
    this.actualMinute = options && options.actualMinute || 0;
    this.actualMinuteAdded = options && options.actualMinuteAdded || 0;
    this.awayScore = options && options.awayScore || 0;
    this.homeScore = options && options.homeScore || 0;
    this.matchupDate = options && options.matchupDate || '';
    this.code = options && options.code || 'CODE';
    this.awayTeam = options && options.awayTeam && new LeagueTeam(options.awayTeam) || new LeagueTeam();
    this.homeTeam = options && options.homeTeam && new LeagueTeam(options.homeTeam) || new LeagueTeam();
    this.awayTeamCompetition = options && options.awayTeamCompetition &&
      new LeagueStanding(options.awayTeamCompetition) || new LeagueStanding();
    this.homeTeamCompetition = options && options.homeTeamCompetition &&
      new LeagueStanding(options.homeTeamCompetition) || new LeagueStanding();
    this.location = options && options.location && new MatchupLocation(options.location) || new MatchupLocation();
    this.matchupState = options && options.matchState && new MatchupState(options.matchState) || new MatchupState();
    this.week = options && options.week && new LeagueWeek(options.week) || new LeagueWeek();
    this.vote = options && options.matchVoteInfo && new MatchupVote(options.matchVoteInfo) || new MatchupVote();
    this.isUserLiked = options && options.isUserLiked;
    this.numberOfLikes = options && options.numberOfLikes || 0;
    this.numberOfComments = options && options.numberOfComments || 0;
  }

  convertMatchupDate(locationService: LocationService): LeagueMatchup {
    locationService.getTimeZone(this.location.coordinate).then((data: any) => {
      let timezone = data.timeZoneId || 'America/New_York';
      this.matchupDate = HelpService.convertUTCToLocalTime(this.matchupDate, timezone);
    });
    return this;
  }

  public isHomeWin() {
    return this.homeScore > this.awayScore;
  }

  public isHomeLose() {
    return this.homeScore < this.awayScore;
  }

  public isAwayWin() {
    return this.homeScore < this.awayScore;
  }

  public isAwayLose() {
    return this.homeScore > this.awayScore;
  }

  public isGameDraw() {
    return this.homeScore === this.awayScore;
  }
}
