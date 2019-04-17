import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectComponent } from 'ng2-select/index';

import { MessageService } from '../../services/message.service';

import { SearchSuggestionCourt } from '../../packages/SearchSuggestionCourt';

import { Court } from '../../models/Court';

const typeData = [
  {id: 'type-event', text: 'Events'},
  {id: 'type-field', text: 'Fields'},
  {id: 'type-class', text: 'Classes'},
  {id: 'type-facility', text: 'Facilities'}
];

@Component({
  moduleId: module.id,
  selector: 'sd-search',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('keyWordInput') keyWordInput: SelectComponent;
  @ViewChild('locationInput') locationInput: SelectComponent;

  public messageSub: any;

  public searchingQuery: {
    keyword: string,
    location: string,
    type: string,
  };

  public isWaitingForCourt: boolean;
  public isWaitingForLocation: boolean;

  constructor(private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.searchingQuery = {keyword: '', location: '', type: ''};
    (<any>this.keyWordInput).items = typeData;
    (<any>this.locationInput).items = [];
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  public handleMessage(message: any) {
    switch (message.messageType) {
      case 'SEARCH_SUGGESTION_COURT_SUCCESS':
        if (this.isWaitingForLocation && typeof message.data.lstCity !== 'undefined') {
          this.isWaitingForLocation = false;
          this.handleReceivedSuggestedLocations(message.data);
        }
        if (this.isWaitingForCourt && typeof message.data.lstCourt !== 'undefined') {
          this.isWaitingForCourt = false;
          this.handleReceivedSuggestedCourts(message.data);
        }
    }
  }

  public handleReceivedSuggestedCourts(data: any): void {
    let courts = data.lstCourt.map((courtData: any) => {
      let court = new Court(courtData.partnerBranch);
      return {id: 'court-' + court.id, text: court.name};
    }).slice(0, 3);
    let filterTypeData = typeData.filter((item: any) => {
      return item.text.match(
        new RegExp(this.searchingQuery.keyword.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'ig')
      );
    });
    (<any>this.keyWordInput).items = courts.concat(filterTypeData);
    (<any>this.keyWordInput).open();
  }

  public handleReceivedSuggestedLocations(data: any): void {
    (<any>this.locationInput).items = data.lstCity.map((locationData: any) => {
      return {
        id: locationData.formattedCityName,
        text: locationData.formattedCityName
      };
    }).slice(0, 3);
    (<any>this.locationInput).open();
  }

  public sendMessageToGetSearchSuggestion(key: any): void {
    let apiPackage = new SearchSuggestionCourt().setKeyWord(key);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  public onTypedKeyword(value: any): void {
    this.searchingQuery.keyword = value;
    this.isWaitingForCourt = true;
    (<any>this.keyWordInput).open();
    this.sendMessageToGetSearchSuggestion(value);
  }

  public onTypedLocation(value: any): void {
    this.isWaitingForLocation = true;
    this.sendMessageToGetSearchSuggestion(value);
    (<any>this.locationInput).open();
  }

  public onKeyWordSelected(value: any): any {
    this.searchingQuery.keyword = value.text;
    if (value.id.startsWith('court-')) this.openBranchPage(value.id.substr(6));
    else if (value.id.startsWith('event-')) this.openEventPage(value.id.substr(6));
    else if (value.id.startsWith('type-')) {
      this.searchingQuery.keyword = '';
      this.searchingQuery.type = value.id.substr(5).toLowerCase();
      this.openSearchingResultPage();
    }
  }

  public onLocationSelected(value: any): void {
    this.searchingQuery.location = value.text;
    this.openSearchingResultPage();
  }

  public openBranchPage(courtId: number): void {
    this.router.navigate(['/reservations/branch', courtId]);
  }

  public openEventPage(eventId: number): void {
    this.router.navigate(['/events/', eventId]);
  }

  public openSearchingResultPage(): void {
    if (this.searchingQuery.location === '') return;
    if (this.searchingQuery.keyword === '' && this.searchingQuery.type === '') return;
    this.router.navigate(['/reservations/search'], {queryParams: this.searchingQuery});
  }

  public onClickSearchButton(): any {
    this.openSearchingResultPage();
  }
}
