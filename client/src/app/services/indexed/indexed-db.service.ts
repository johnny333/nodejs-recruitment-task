import { Injectable } from '@angular/core';
import { IMovie } from '../../../../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  db;
  store: IDBObjectStore;
  index: IDBIndex;

  constructor() {
    this.db = indexedDB.open('movieLibrary').result;
    this.store = this.db.createObjectStore('movies', {keyPath: '_id'});
    this.index = this.store.createIndex('by_id', '_id', {unique: true});
  }

  public save = (movie: IMovie): IDBRequest => {
    return this.store.put(movie);
  }

  public get = (_id: string): IDBRequest => {
    return this.store.get(_id);
  }
}
