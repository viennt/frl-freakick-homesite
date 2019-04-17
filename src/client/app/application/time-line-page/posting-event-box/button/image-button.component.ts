import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { UploadService } from '../../../../services/upload.service';
import { AuthenticationService } from '../../../../services/authentication.service';

// TODO: Add feature remove image
@Component({
  moduleId: module.id,
  selector: 'app-image-button',
  template: `
      <input #eventImage class="hidden" accept="image/*" type="file"
             name="fileUpload" (change)="onChangeEventImage($event)"/>
      <div class="button-event btn btn-block btn-circle margin-bottom-10"
           [class.grey-steel]="!(eventImages && eventImages.length)"
           [class.green-dark]="(eventImages && eventImages.length)"
           (click)="onClickButton($event)">
          <i *ngIf="!isLoading" class="icon-picture"
             [class.font-green-dark]="!(eventImages && eventImages.length)"></i>
          <i *ngIf="isLoading" class="fa fa-spinner fa-spin"
             [class.font-green-dark]="!(eventImages && eventImages.length)"></i>
          <span>Images</span>
      </div>
  `
})
export class ImageButtonComponent implements OnInit {

  public isLoading: boolean;
  public eventImagesValue: string[];

  @Output() eventImagesChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get eventImages() {
    return this.eventImagesValue;
  }

  set eventImages(val) {
    this.eventImagesValue = val;
    this.eventImagesChange.emit(this.eventImagesValue);
  }

  @ViewChild('eventImage') eventImage: any;

  constructor(private authService: AuthenticationService,
              private uploadService: UploadService) { }

  ngOnInit() {
    //
  }

  onClickButton() {
    if (this.isLoading) return;
    this.eventImage.nativeElement.click();
  }

  onChangeEventImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (e: any) => {});
    if (file) {
      reader.readAsDataURL(file);
      this.uploadEventImage(file);
    }
  }

  uploadEventImage(...images: any[]): void {
    this.isLoading = true;
    let postData = { userId: this.authService.getItem('userId') };
    this.uploadService.uploadImage(postData, images)
      .then((res: any) => {
        this.isLoading = false;
        if (res._body) {
          this.eventImages.push(res._body);
        }
      }).catch((error: any) => {
        this.isLoading = false;
        console.error('Error! Upload avatar image: ', error);
      });
  }
}
