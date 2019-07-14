import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = [];
  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.getSpecialEvents()
        .subscribe(
          (response) => {
            console.log(response);
            this.specialEvents = response;
          },
          (error) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                this.router.navigate(['/login'], {relativeTo: this.route});
              }
            }
          }
        );
  }

  onClick(index) {
    console.log('You clicked on ticket:', index + 1);
  }

}
