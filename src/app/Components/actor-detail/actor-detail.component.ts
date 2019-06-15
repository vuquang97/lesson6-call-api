import { Component, OnInit } from '@angular/core';
import { Actor } from '../../actor';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from '../../service/actor.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor;
  
  getActorById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.actorService.getActorById(id).subscribe(actor => this.actor = actor);
  }

  getUpdate(actor):void {
    this.actorService.updateActor(actor).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

  gotoHome(actor: Actor) {
    let actorId = actor ? this.actor.id : null;
    this.router.navigate(['/home', {id: actorId, foo: 'foo'}]);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actorService: ActorService,
    private location: Location,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.getActorById();
  }

  

}
