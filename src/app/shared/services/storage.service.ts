import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  create(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  read(key) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    } catch (err) {
      return null;
    }
  }

  update(key, value) {
    this.create(key, value)
  }

  delete(key) {
    localStorage.removeItem(key);
  }

}

