import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MybookmarksComponent } from './component/mybookmarks/mybookmarks.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'mybookmarks', component:MybookmarksComponent},
    {path: '**', redirectTo: '' }  
];
