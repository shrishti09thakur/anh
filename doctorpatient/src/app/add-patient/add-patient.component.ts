import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient: Patient=new Patient();
  doctor: Doctor=new Doctor(); 
  doctorList: any;
  constructor(private patientService:PatientService,
    private doctorService:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe(doctorList=>{
      this.doctorList=doctorList;
    }
     
    
      
    );
   
  }
  savePatient(){
    this.patientService.addPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    },
    error=>console.log(error));
  }
  goToPatientList(){
    this.router.navigate(['/home']);

  }
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }

}
