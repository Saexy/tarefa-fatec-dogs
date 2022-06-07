import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  baseUrl = "https://random.dog/woof.json"
  
  constructor(private httpClient: HttpClient) {}

  generateDog(): Observable<Dog> {
    return this.httpClient.get<Dog>(this.baseUrl)
  }
}
