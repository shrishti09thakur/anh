import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'add-doctor',component:AddDoctorComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'doctor-details',component:DoctorDetailsComponent},
  {path: 'doctor-view/:id',component:DoctorViewComponent},
  {path: 'add-patient',component:AddPatientComponent},
  {path: 'patient-details',component:PatientDetailsComponent},
  {path: 'patient-view/:id',component:PatientViewComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
