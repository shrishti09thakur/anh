import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient=new Patient(); 
  patientList: any
  constructor(private patientService:PatientService,
    private router:Router) { }

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe(patientList=>{
      this.patientList=patientList;
    }
     
    
      
    );
   
    }
    
    patientDetails(id:any){
    
      this.router.navigate(['patient-view',id]);
      console.log(id);
      }
     
  
    }
    
     
    
      
  
  
  



