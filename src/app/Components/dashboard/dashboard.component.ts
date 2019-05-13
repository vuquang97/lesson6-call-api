import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../service/actor.service';
import { Actor } from '../../actor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  actors: Actor[] = [];
  getActor() {
    this.actorService.getActor().subscribe(actor => this.actors = actor.slice(1, 5));
  }
  constructor(public actorService: ActorService) { }

  ngOnInit() {
    this.getActor();
  }

}
