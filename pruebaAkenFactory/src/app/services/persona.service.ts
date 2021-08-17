import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Persona } from '../models/persona';
import { URLListadoPersonas } from '../resources/urls.resources';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http: HttpClient) { }

  obtenerListadoPersonas(): Promise<Array<Persona>> {  
     return this.http.get(URLListadoPersonas).toPromise()
     .then(res => {
      const personas: Persona[] = JSON.parse(JSON.stringify(res)).personList;
      return personas;
     });
      
  }

}
