import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(
        (response) => {
          console.log(response);
          this.events = response;
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
