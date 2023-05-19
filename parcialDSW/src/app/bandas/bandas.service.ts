import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banda } from './bandas';
import {HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

  private urlEndPoint = 'https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/cde4429166d6e1aac42fedbb7f657291b7621583/music-bands.json'

  constructor(private http:HttpClient) {
  }
  getBandas() : Observable<Banda[]>{
    return this.http.get<Banda[]>(this.urlEndPoint);
  }

}
