import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { repoitem, searchparams } from '../_model/github.model';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _httpClient: HttpClient) { }
   
  baseUrl = environment.apiurl;    
  _repositoryItemList = signal<repoitem[]>([]);
   
  // Get search results from the server with RxJS optimizations
  GetGitHubRepositoryItems(_searchParams: searchparams) {
    return this._httpClient.post<repoitem[]>(`${this.baseUrl}git-hub/repositories`, _searchParams).pipe(
      map((response) => {
        
        return response;
      }),
      catchError((error) => {
        console.error('Error fetching repository items:', error);
        return of([]); // Return an empty array on error
      })
    );
  }
}
