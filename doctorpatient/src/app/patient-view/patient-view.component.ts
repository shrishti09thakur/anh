import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  patient: Patient=new Patient();
  
  constructor(private patientService:PatientService,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
   let id:any;

  id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(id).subscribe(data =>{
      this.patient=data;
    });
  }

}
