import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { loginresponse, menu, userlogin } from '../_model/user.model';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly SESSION_KEY = 'userRepositorySelection';

  constructor(private _httpClient: HttpClient) { }
  
  baseUrl = environment.apiurl;    
  _menulist = signal<menu[]>([]);
  
  // Get menu items for user from server
  loadMenu(){   
    return this._httpClient.get<menu[]>(`${this.baseUrl}user/menu`).pipe(
      map((response) => {
        
        return response;
      }),
      catchError((error) => {
        console.error('Error fetching menu items:', error);
        return of([]); // Return an empty array on error
      })
    );
  }
  // Login user with username and password
  proceedlogin(_data:userlogin){
    return this._httpClient.post<loginresponse>(`${this.baseUrl}authentication/login`, _data).pipe(
      map((response) => {
        
        return response;
      }),
      catchError((error) => {
        
        const statusCode = error.status;
        let _messagetext =`Request failed with status ${statusCode}`;
        // Handle specific status codes
        if (statusCode === 401 || statusCode === 400 ) {
          _messagetext = 'Unauthorized: Invalid user credentials';
          console.error(_messagetext);
        } else if (statusCode === 500) {
          _messagetext = 'Internal Server Error';
          console.error(_messagetext);
        }
        else console.error('Error :', error);

        // Return a default/fallback value
        return of({
          token: '',
          success: false,
          error: _messagetext
        } as loginresponse);
      })
    );
  }

  // Save items to session
  saveRepositoryItems(items: any[]): void {
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(items));
  }

  // Retrieve items from session
  getRepositoryItems(): any[] {
    const storedItems = sessionStorage.getItem(this.SESSION_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  // Add a single item to session
  addRepositoryItem(item: any): void {
    const items = this.getRepositoryItems();
    items.push(item);
    this.saveRepositoryItems(items);
  }

  // Clear session
  clearRepositorySession(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
  }
}
