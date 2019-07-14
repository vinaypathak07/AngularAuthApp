import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getSpecialEvents()
        .subscribe(
          (response) => {
            console.log(response);
            this.specialEvents = response;
          },
          (error) => {
            console.log(error);
          }
        );
  }

  onClick(index) {
    console.log('You clicked on ticket:', index + 1);
  }

}
