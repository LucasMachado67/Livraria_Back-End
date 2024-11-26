import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { NewEmployeeComponent } from './pages/new-admin/new-admin.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "newBook",
        loadComponent: () => import('./pages/new-book/new-book.component').then((c) => c.NewBookComponent)
    },
    {
        path: "allBooks", component: AllBooksComponent
    },
    {
        path: "allBooks/:code", component: EditBookComponent
    },
    {
        path: "newAdmin", component: NewEmployeeComponent
    }
];
