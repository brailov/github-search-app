import { Component, OnInit } from '@angular/core';
import { repoitem } from '../../_model/github.model';
import { UserService } from '../../_service/user.service';
import { RepogaleryComponent } from '../repogalery/repogalery.component';

@Component({
  selector: 'app-mybookmarks',
  imports: [ RepogaleryComponent ],
  templateUrl: './mybookmarks.component.html',
  styleUrl: './mybookmarks.component.css'
})
export class MybookmarksComponent implements OnInit{
  
  _response: repoitem[] =[];
  showMessage: boolean = false;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this._response = this.userService.getRepositoryItems();
    if(this._response == null || this._response.length == 0) this.showMessage = true;
  }

}
