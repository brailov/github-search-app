import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../_service/github.service';
import { repoitem, searchparams } from '../../_model/github.model';
import { RepogaleryComponent } from '../repogalery/repogalery.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, FormsModule, RepogaleryComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  loginuser='';
  usertoken='';
  searchQuery='';
  _repoItems: repoitem[] =[];
  isLoading = false; // Loading state

  constructor(private gitservice : GithubService, private snackBar: MatSnackBar) {}

  onSearch(): void {
    this.loginuser =localStorage.getItem('username') as string;
    this.usertoken =localStorage.getItem('token') as string;

    if(!this.loginuser || !this.usertoken)
    {        
      this.snackBar.open('Search operation aborted, login and then try again.', 'Information', {
        duration: 5000, // Duration in milliseconds
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
    else{
      if (this.searchQuery.trim()) {
        this.isLoading = true; // Start spinner
        let _obj : searchparams = {
          keyWord: this.searchQuery.trim()       
        }
        this.gitservice.GetGitHubRepositoryItems(_obj).subscribe({
          next: (items) => {
            this._repoItems = items;
            this.isLoading = false; // Stop spinner
          },
          error: (err) => {           
            this.snackBar.open('Error loading repository items', 'Error', {
              duration: 5000, // Duration in milliseconds
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            console.error('Error loading repository items:', err);
            this.isLoading = false; // Stop spinner
          }
        });       
      };
    }
  }
}
