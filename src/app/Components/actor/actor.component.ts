import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../service/actor.service';
import { Actor } from '../../actor';
import { ActivatedRoute } from '@angular/router';
//import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actors: Actor[];
  isStatus = false;
  constructor(
    public actorService: ActorService,
    private activatedRoute: ActivatedRoute
    ) { }

  getActor() {
    this.actorService.getActor().subscribe(actor => this.actors = actor);
  }

  // DelateActor(e: number) {
  //   const index = this.actors.findIndex(actor => actor.id === e);
  //   this.actors.splice(index, 1);
  // }


  addActor(name: string, role: string, movie: string) {
    name = name.trim();
    role = role.trim();
    movie = movie.trim();
    if(!name || !role || !movie) {
      alert('Not empty');
      return;
    }
    const newActor: Actor = new Actor();
    newActor.name = name;
    newActor.role = role;
    newActor.movie = movie;
    this.actorService.addActor(newActor).subscribe(insertActor => this.actors.push(newActor));
  }

  deleteActor(id: number) {
    const index = this.actors.findIndex(actor => actor.id === id);
    this.actorService.deleteActor(id).subscribe(deleteAt => this.actors.splice(index, 1));
  }

  ngOnInit() {
    this.getActor();
    this.activatedRoute.queryParamMap.subscribe(
      query => {
        const oderby = query.get('orderby');
        console.log(oderby);
      }
    )
  }

}
