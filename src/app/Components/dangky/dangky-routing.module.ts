import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DangkyComponent } from './dangky.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AccountComponent } from '../account/account.component';
import { AuthGuard } from 'src/app/auth.guard';

const dangkyRouting: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'dangky', canActivate: [ AuthGuard ], component: DangkyComponent },
                    { path: 'forgot', canActivate: [ AuthGuard ], component: ForgotPasswordComponent }
                ]
            },
            
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forChild(dangkyRouting)
    ]
})
export class DangkyRoutingModule { }
export const RoutingComponent = [DangkyComponent, ForgotPasswordComponent];
