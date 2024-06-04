import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { interval } from 'rxjs';


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public clientId: number = 1;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    const clientIdFromCookie = this.cookieService.get('clientId');
    if (clientIdFromCookie) {
      this.clientId = Number(clientIdFromCookie);
    } else {
      interval(5000)
        .subscribe(() => {
          const clientIdFromCookie = this.cookieService.get('clientId');
          if (clientIdFromCookie) {
            this.clientId = Number(clientIdFromCookie);
          }
        });
    }
    console.log(this.clientId);
  }
}
