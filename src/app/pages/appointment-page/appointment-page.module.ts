import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SpinnerModule } from "src/app/shared/components/spinner/spinner.module";
import { AppointmentPageComponent } from "./appointment-page.component";
import { AppointmentPageRoutingModule } from "./appointment-page.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [AppointmentPageComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    AppointmentPageRoutingModule,
  ],
  exports: [AppointmentPageComponent],
})
export class AppointmentPageModule {}
