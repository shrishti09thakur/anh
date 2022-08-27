import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    HomeComponent,
    DoctorDetailsComponent,
    DoctorViewComponent,
    AddPatientComponent,
    PatientDetailsComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
