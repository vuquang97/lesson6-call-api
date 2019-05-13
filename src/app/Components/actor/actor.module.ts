import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ActorComponent } from './actor.component';
import { ActorDetailComponent } from '../actor-detail/actor-detail.component';
import { MessageComponent } from '../message/message.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActorParentComponent } from '../actor-parent/actor-parent.component';
import { ActorRoutingModule } from './actor-routing.module';
import { ActorSearchComponent } from '../actor-search/actor-search.component';

@NgModule({
  declarations: [
    ActorComponent,
    ActorDetailComponent,
    MessageComponent,
    DashboardComponent,
    ActorParentComponent,
    ActorSearchComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule
  ]
})
export class ActorModule { }
