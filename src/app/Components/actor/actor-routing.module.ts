import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActorParentComponent } from '../actor-parent/actor-parent.component';
import { ActorDetailComponent } from '../actor-detail/actor-detail.component';

const actorRouting: Routes = [
    //child router
    {
        path: '',
        component: ActorParentComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'actor',
                        component: ActorComponent,
                    },
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                        path: 'detail/:id',
                        component: ActorDetailComponent
                    }
                ]
            }
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forChild(actorRouting)
    ]
})
export class ActorRoutingModule { }
