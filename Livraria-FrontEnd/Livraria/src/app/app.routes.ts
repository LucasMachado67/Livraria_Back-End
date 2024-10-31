import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookViewComponent } from './components/book-view/book-view.component';


export const routes: Routes = [
    {
        path: '',redirectTo: 'home',pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'newBook',
        loadComponent: () => import('./components/new-book/new-book.component').then((c) => c.NewBookComponent)
    },
    {
        path: "books/:code", component: BookViewComponent
    }
];
