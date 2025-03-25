import { Routes } from '@angular/router';
import { register } from 'node:module';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BgsComponent } from './bgs/bgs.component';
import { NotificationComponent } from './notification/notification.component';
import { ReactiveformexComponent } from './reactiveformex/reactiveformex.component';


export const routes: Routes = [
    {path:'register',component:RegisterComponent},
    {path:'product',component:ProductComponent},
    {path:'dashboard',component: DashboardComponent},
    {path:'bgs',component: BgsComponent},
    {path:'notification',component: NotificationComponent },
    {path:'reactiveformex',component: ReactiveformexComponent },

    
];


