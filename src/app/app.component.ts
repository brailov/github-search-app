import { Component } from '@angular/core';
import { AppmenuComponent } from "./component/appmenu/appmenu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AppmenuComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
