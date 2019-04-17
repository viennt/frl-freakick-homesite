import { Package } from './Package';

/**
 * Jira ticket:           FKE-159 (https://freakick.atlassian.net/browse/FKE-159)
 * API Endpoint:          GET_USER_CREATED_EVENTS
 * Success message type:  GET_USER_CREATED_EVENTS_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'GET_USER_CREATED_EVENTS';

export class GetUserCreatedEvents extends Package {
  public page: number;
  public perPage: number;
  public keyWord: string;
  public statusCodes: string[];
  public fromDate: number;
  public toDate: number;

  constructor() {
    super(API_ENDPOINT);
  }

  public setKeyWord(keyWord: string): GetUserCreatedEvents {
    this.keyWord = keyWord;
    return this;
  }

  public setPagination(perPage: number, page: number): GetUserCreatedEvents {
    this.perPage = perPage;
    this.page = page;
    return this;
  }

  public setStatusCodes(...statusCodes: string[]): GetUserCreatedEvents {
    this.statusCodes = statusCodes;
    return this;
  }

  public setFromTo(fromDate: number, toDate: number): GetUserCreatedEvents {
    this.fromDate = fromDate;
    this.toDate = toDate;
    return this;
  }

}
