import { Component, Input, Output, EventEmitter } from '@angular/core';
import { repoitem } from '../../_model/github.model';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-repogalery',
  imports: [MaterialModule, FormsModule ],
  templateUrl: './repogalery.component.html',
  styleUrl: './repogalery.component.css'
})
export class RepogaleryComponent {

  constructor(private userService: UserService){}
  @Input() items: repoitem[] = [];
  @Input() HideSavedBookmarks: boolean = false;
  
  addToUserSavedBookmarks(item: repoitem): void {
    this.userService.addRepositoryItem(item); // Store item in session
  }
}
