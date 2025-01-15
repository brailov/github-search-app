import { Component, DoCheck, effect, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { UserService } from '../../_service/user.service';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { menu } from '../../_model/user.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-appmenu',
  imports: [MaterialModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements OnInit, DoCheck {
  constructor(private userservice:UserService, private router: Router){   
    // will be called after log OUT will be trigered.
    effect(()=>{
      this.menulist = this.userservice._menulist();
    
      this.loginuser =localStorage.getItem('username') as string;
      this.usertoken =localStorage.getItem('token') as string;    
      if(this.loginuser && this.usertoken){ // if user logged in then we will display user profile drop down selection
        this.loggedIn = true;
      }
    })
  }

  menulist!: menu[]; 
  loginuser='';
  usertoken='';
  showMenu = false;
  loggedIn:boolean = false;

  ngOnInit(): void {  
    
    this.loginuser =localStorage.getItem('username') as string;
    this.usertoken =localStorage.getItem('token') as string;    
   
    if(this.loginuser && this.usertoken){
      this.loggedIn = true;
      this.userservice.loadMenu().subscribe({  
          next: (items) => {   
            this.menulist = items;
          }
      });    
    }
  }

  ngDoCheck(): void {  
    
    this.Setaccess();
  }

  // hide user menu items when we are in general screens
  Setaccess(){
    let currentUrl = this.router.url;
    if(currentUrl==='/login'){
      this.showMenu =false;
    }else {
      this.showMenu =true;
    }
  }
}
