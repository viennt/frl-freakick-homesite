import { GuildGame, IGuildGameOptions } from './GuildGame';
import { GuildTeam, IGuildTeamOptions } from './GuildTeam';
import { GameStatus, IGameStatusOptions } from './GameStatus';

export interface IGuildTeamGameOptions {
  id: number;
  game: IGuildGameOptions;
  gameStatus: IGameStatusOptions;
  homeTeam: IGuildTeamOptions;
  awayTeam: IGuildTeamOptions;
  homeScore: number;
  awayScore: number;
  lstGameResultVerifying: any;
}

export class GuildTeamGame {
  public id: number;
  public game: GuildGame;
  public gameStatus: GameStatus;
  public homeTeam: GuildTeam;
  public awayTeam: GuildTeam;
  public homeScore: number;
  public awayScore: number;
  public rated: boolean;
  public prediction: any;

  constructor();
  constructor(options: IGuildTeamGameOptions);
  constructor(options?: IGuildTeamGameOptions) {
    this.id = options && options.id || 0;
    this.game = options && new GuildGame(options.game) || new GuildGame();
    this.gameStatus = options && new GameStatus(options.gameStatus) || new GameStatus();
    this.homeTeam = options && new GuildTeam(options.homeTeam) || new GuildTeam();
    this.awayTeam = options && new GuildTeam(options.awayTeam) || new GuildTeam();
    this.homeScore = (options && options.homeScore)
      || (options && options.lstGameResultVerifying && options.lstGameResultVerifying[0].homeTeamScore)
      || 0;
    this.awayScore = (options && options.awayScore)
      || (options && options.lstGameResultVerifying && options.lstGameResultVerifying[0].awayTeamScore)
      || 0;
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
