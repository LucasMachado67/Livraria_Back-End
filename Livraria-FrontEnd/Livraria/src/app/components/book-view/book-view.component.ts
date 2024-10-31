import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Book } from '../../Model/Book';
import { BookService } from '../../service/book.service';
import { NgModel } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet,
    NgIf,
    NgFor
  ],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.scss'
})
export class BookViewComponent implements OnInit {
  @Input() Books!: Book;
  book: any;

  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    const bookCode = Number(this.route.snapshot.paramMap.get('code'));

    this.service.getBookById(bookCode).subscribe(
      (data) => {
        this.book = data;
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }
}
