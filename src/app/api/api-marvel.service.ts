import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {
  private md5 = new Md5();
  private http: HttpClient = inject(HttpClient);

  private baseUrl: string = 'https://gateway.marvel.com/v1/public';
  private publicApiKey: string | undefined = environment.MARVEL_PUBLIC_KEY;
  private privateApiKey: string | undefined = environment.MARVEL_PRIVATE_KEY;
  private timestamp: string = new Date().toISOString();
  private hash: string = this.generateHash();

  private generateHash(): string {
    const combinedString = `${this.timestamp}${this.privateApiKey}${this.publicApiKey}`;
    return Md5.hashStr(combinedString).toString();
  }

  getAllSuperheroes() {
    // Possible improve: accept as argument the limit number of heroes per request
    const limit = 20;
    // TODO: type response
    return this.http.get(`${this.baseUrl}/characters?limit=${limit}&ts=${this.timestamp}&apikey=${this.publicApiKey}&hash=${this.hash}`)
      .pipe(
        map((response: any) => response.data.results), // Extract data from response
        catchError((error) => this.handleError(error)) // Handle errors
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error.message || error);
    // Return an observable with a user-friendly error message
    return of('Something went wrong. Please try again later.');
  }
}

