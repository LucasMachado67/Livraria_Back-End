import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { AdminService } from '../../service/admin.service';
import { Admin } from '../../Model/Admin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-admin',
  standalone: true,
  imports: [NavigationComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './new-admin.component.html',
  styleUrl: './new-admin.component.scss'
})
export class NewEmployeeComponent {

  admin = new Admin();
  // table:Boolean = true;
  admins:Admin[] = [];

  constructor(
    private service:AdminService
  ){}

  register():void{
    this.service.addNewAdmin(this.admin)
    .subscribe(retorno => {

      this.admin = retorno;

      this.admin = new Admin();

      alert("Admin successfully registered!");
    });
  }
}
