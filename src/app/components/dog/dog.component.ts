import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/models/dog.model';

import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog?: Dog;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
  }

  generateDog(): void {
    this.dogService.generateDog().subscribe((dog) => {
      this.dog = dog
    })
  }

}
