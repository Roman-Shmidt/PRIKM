import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StarRatingColor } from '../star-rating/star-rating.component';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';
import { ClientReviewService } from 'src/app/Modules/client/client-services/client-review.service';
import { review } from 'src/app/Models/Review';

@Component({
  selector: 'app-make-review-dialog',
  templateUrl: './make-review-dialog.component.html',
  styleUrls: ['./make-review-dialog.component.scss']
})
export class MakeReviewDialogComponent {
  public starCount: number = 5;
  public starColor: StarRatingColor = StarRatingColor.accent;
  public starColorP: StarRatingColor = StarRatingColor.primary;
  public starColorW:StarRatingColor = StarRatingColor.warn;

  rating: number = 0;
  description: string = "";
  @Input() clientId: number = 0;
  @Input() restaurantId: number = 0;

  ngOnInit() {
  }
    onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: [number, number],
  private reviewService: ClientReviewService,
  private generalLogicService: GeneralLogicService) 
  {
    this.clientId = data[0];
    this.restaurantId = data[1];
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();

    this.reviewService.createReview(
      new review(0,
        this.clientId,
        this.restaurantId,
        this.rating,
        this.description
      )
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    console.info("Success");
  }

  onCancelClick() {
    this.generalLogicService.closeDialog();
    console.info("Cancel Clicked");
    return;
  }
}
