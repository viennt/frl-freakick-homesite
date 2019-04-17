import { Package } from './Package';

/**
 * Jira ticket:           GLD-293 (https://freakick.atlassian.net/browse/GLD-293)
 * API Endpoint:          ANSWER_DEMOGRAPHIC_QUESTIONS
 * Success message type:  ANSWER_DEMOGRAPHIC_QUESTIONS_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'ANSWER_DEMOGRAPHIC_QUESTIONS';

export class AnswerDemoGraphicQuestion extends Package {
  private genderId: number;
  private birthDate: number;
  private gameLevel: number;
  private lstInterestSportId: number[];

  constructor() {
    super(API_ENDPOINT);
  }

  public setGenderId(gender: number): AnswerDemoGraphicQuestion {
    this.genderId = Number(gender);
    return this;
  }

  public setBirthDate(birthDate: number): AnswerDemoGraphicQuestion {
    this.birthDate = Number(birthDate);
    return this;
  }

  public setGameLevel(gameLevel: number): AnswerDemoGraphicQuestion {
    this.gameLevel = Number(gameLevel);
    return this;
  }

  public setInterestSportIds(interestSportIds: number[]): AnswerDemoGraphicQuestion {
    this.lstInterestSportId = interestSportIds;
    return this;
  }

}
