import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { LoginComponent } from './components/loginAndRegistration/login/login.component';
import { SignUpComponent } from './components/loginAndRegistration/signup/signup.component';


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
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "signup", component: SignUpComponent
    }
];
