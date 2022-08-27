import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
  doctor: Doctor=new Doctor();
  id!:number 
  constructor(private doctorService:DoctorService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doctorService.getDoctorById(this.id).subscribe(data =>{
      this.doctor=data;
    });
  }

}
