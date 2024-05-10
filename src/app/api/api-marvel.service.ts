import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeroeResponse } from 'src/types';

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
    return this.http.get<HeroeResponse>(`${this.baseUrl}/characters?limit=${limit}&ts=${this.timestamp}&apikey=${this.publicApiKey}&hash=${this.hash}`)
      .pipe(
        map((response) => response.data.results), // Extract data from response
        catchError((error) => this.handleError(error)) // Handle errors
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error.message || error);
    // Return an empty array for avoid TS errors
    return of([]);
  }
}

