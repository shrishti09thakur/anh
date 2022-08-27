import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseurl="http://localhost:8087/api/doctor"

  constructor(private httpClient: HttpClient) { }
  addDoctor(doctor:Doctor):Observable<object>{
    return this.httpClient.post(`${this.baseurl}`,doctor);
  }
  getDoctorList():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseurl}`);
  }
  getDoctorById(id: number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseurl}/${id}`);
  }
}
