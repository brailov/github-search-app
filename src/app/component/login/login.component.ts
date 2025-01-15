import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { UserService } from '../../_service/user.service';
import { userlogin } from '../../_model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  constructor(private builder:FormBuilder, private router:Router, private userservice : UserService, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.userservice._menulist.set([]);
  }

  _response!:any;

  _loginForm: FormGroup = new FormGroup({  
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)   
  })

  proceedlogin()
  {
    if(this._loginForm.valid){
      let _obj : userlogin = {
        username: this._loginForm.value.username as string,
        password: this._loginForm.value.password as string
      }
      this.userservice.proceedlogin(_obj).subscribe({
        next: (response) => {
          this._response = response;
          if(this._response.success){
            localStorage.setItem('token', this._response.token);
            localStorage.setItem('username', _obj.username);
                 
            this.userservice.loadMenu().subscribe({
              next: (items) => {   
                this.userservice._menulist.set(items);
              }
            });  
            
            this.router.navigateByUrl('/');
          }
          else{         
            this.snackBar.open(this._response.error, 'Error', {
              duration: 5000, // Duration in milliseconds
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });   
          }
        },
        error: (err) => {          
          this.snackBar.open(err.error, 'Error', {
            duration: 5000, // Duration in milliseconds
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });               
        }
       
      });
    }
  }

  goHome() {
    this.router.navigateByUrl('/');  // Navigate to home page
  }
}





