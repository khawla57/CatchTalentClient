import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat.model';


const baseUrl = 'http://localhost:8080/api/candidat';

@Injectable({
  providedIn: 'root'
})

export class CandidatService {
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(baseUrl);
  }

  get(id: any): Observable<Candidat> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`${baseUrl}?title=${title}`);
  }
  
}
