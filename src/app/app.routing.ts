import { CardComponent } from './component/card/card.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AppComponent } from './app.component';
const routes: Routes = [
    { path: '/', component: HomeComponent },
    { path: 'card', component: CardComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
