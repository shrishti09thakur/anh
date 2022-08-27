import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Doctor=new Doctor(); 
  doctorList: any;
  constructor(private doctorService:DoctorService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe(doctorList=>{
      this.doctorList=doctorList;
    }
     
    
      
    );

    
  
  }
  doctorDetails(id:string){
    this.router.navigate(['doctor-view',id]);


  }

}
