import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Actor } from '../../actor';
import { ActorService } from '../../service/actor.service';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.css']
})
export class ActorSearchComponent implements OnInit {
  actors$: Observable<Actor[]>;

  private seacrchName = new Subject<string>();

  search(name: string): void {
    this.seacrchName.next(name);
  }

  constructor(private actorService: ActorService) { }

  ngOnInit():void {
    this.actors$ = this.seacrchName.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name: string) => this.actorService.seacchActor(name))
    );
  }

}
