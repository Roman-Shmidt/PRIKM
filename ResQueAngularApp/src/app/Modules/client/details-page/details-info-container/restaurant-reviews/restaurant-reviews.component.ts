import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartOptions, ChartData, ChartType, Chart } from 'chart.js';
import { interval, takeWhile } from 'rxjs';
import { review } from 'src/app/Models/Review';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';
import { ClientReviewService } from '../../../client-services/client-review.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.scss']
})
export class RestaurantReviewsComponent {
  @Input() chartData: number[] = [23, 24, 25, 26, 27];
  @Input() reviews: review[];
  @Input() restaurantId: number = 0;
  public chart: any;
  public average: number = 0;
  public dialog: MatDialog;
  private labels = ['1', '2', '3', '4', '5'];

  isActiveComponent: boolean = false;

  openReviews() {
    this.generalLogicService.openReviews(this.restaurantId);
  }

  makeReview() {
    const clientId = Number(this.cookieService.get('clientId'));
    this.generalLogicService.makeReview([clientId, this.restaurantId]);
  }

  constructor(dialog: MatDialog, 
    private generalLogicService: GeneralLogicService,
    private reviewsService: ClientReviewService,
    private cookieService: CookieService) 
  {
    this.dialog = dialog;
    this.reviews = [];
  }

  ngOnInit(): void {

    this.chart = new Chart("MyChart", {
      
      type: 'bar', // змініть на 'bar' для стовпчикового графіка
      data: {
        
        labels: this.labels,
        datasets: [
          {
            label: "Review",
            data: this.chartData
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false // відключити легенду
          }
        },
        indexAxis: 'y', // додайте цей рядок, щоб змінити вісь індексу на 'y', що робить графік горизонтальним
        responsive: true,
        maintainAspectRatio: false, // додайте цей рядок, щоб контролювати адаптивність за допомогою контейнера
        scales: {
          x: {
            ticks: {
              display: false // приховати тіки на осі x
            },
            grid: {
              display: false // приховати лінії сітки на осі x
            }
          },
          y: {
            grid: {
              display: false // приховати лінії сітки на осі y
            }
          }
        }
      }
    });

    this.isActiveComponent = true;
    this.getReviews();
  }

  ngOnDestroy(): void {
    this.isActiveComponent = false;
  }
  
  calculateWeightedAverage(data: number[], labels: string[]): number {
  const totalSum = data.reduce((accumulator, currentValue, index) => accumulator + (currentValue * parseInt(labels[index])), 0);
  const totalCount = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const weightedAverage = totalSum / totalCount;
  return weightedAverage;
  }

  updateChartData(): void {
    // Обнулити всі елементи масиву chartData
    this.chartData = [0, 0, 0, 0, 0];
    console.log(this.reviews);
    // Ітерувати по всіх відгуках
    for (let review of this.reviews) {
      // Збільшити відповідний елемент chartData
      if (review.rating >= 1 && review.rating <= 5) {
        this.chartData[review.rating - 1]++;
      }
    }
  
    // Оновити дані в графіку
    this.chart.data.datasets[0].data = this.chartData;
  
    // Оновити графік
    this.chart.update();

    this.average = parseFloat(this.calculateWeightedAverage(this.chartData, this.labels).toFixed(1));
  }

  getReviews(): void {
    // Виконувати запит на сервер тут
    console.log('Запит на сервер Menu');
    this.reviewsService.getReviews("RestaurantId", this.restaurantId, 1).subscribe({
      next: (response) => {
        this.reviews = response.object;
        console.log(this.reviews);
        this.updateChartData();
      },
      error: (error) => {
        console.error(error);
      }
    });

    // Перевірка, якщо компонент все ще активний, запустити наступний запит через 15 секунд
    interval(10000)
      .pipe(takeWhile(() => this.isActiveComponent))
      .subscribe(() => {
        this.reviewsService.getReviews("RestaurantId", this.restaurantId, 1).subscribe({
          next: (response) => {
            this.reviews = response.object;

            this.updateChartData();
          },
          error: (error) => {
            console.error(error);
          }
        });
        console.info("Success");
        console.log('Запит на сервер через 15 секунд');
      });
  }
}
