import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseurl="http://localhost:8089/api/patient"

  constructor(private httpClient: HttpClient) { }
  addPatient(patient:Patient):Observable<object>{
    return this.httpClient.post(`${this.baseurl}`,patient);
  }
  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseurl}`);
  }
    getPatientById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseurl}/${id}`)
    }
}
