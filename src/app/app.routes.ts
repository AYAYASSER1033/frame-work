import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'**',component: NotFoundComponent},
];

