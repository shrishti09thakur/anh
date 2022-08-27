import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doctor: Doctor=new Doctor();


  constructor(private doctorService:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveDoctor(){
    this.doctorService.addDoctor(this.doctor).subscribe(data=>{
      console.log(data);
      this.goToDoctorList();
    },
    error=>console.log(error));
  }
  goToDoctorList(){
    this.router.navigate(['/home']);

  }
  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }

}
