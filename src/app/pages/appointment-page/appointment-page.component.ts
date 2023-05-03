import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { GenericHooks } from 'src/app/util/generic-hooks';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss'],
})
export class AppointmentPageComponent extends GenericHooks implements OnInit {
  isLoading = false;
  enableChat = false;
  apponitmentTypes = ['First delivery', 'Onsite repair', 'Exchange'];
  stores = ['Bilderdijkstraat', 'Roetersstraat'];
  appointmentForm = new FormGroup({
    customerName: new FormControl({ value: '', disabled: false }, Validators.required),
    chatInput: new FormControl(),
  });

  messages$ = new BehaviorSubject<any>([]);
  messages: any = [{ sender: 'User', text: 'Fisrt message'  }];
  appointments!: string;

  @ViewChild('chatInputEl') chatInputEl!: ElementRef;

  @ViewChild('chatContainerEl') chatContainerEl!: ElementRef;

  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient, private changeDetectorRef: ChangeDetectorRef, private sanitizer: DomSanitizer) {
    super();
  }
  
  getSanitizedHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit(): void {
    this.subscriptions.push();
    this.messages$.subscribe(messages => {
      this.messages = messages;
    })
  }

  letsChat() {
    if (this.appointmentForm.controls.customerName.value) {
      this.appointmentForm.controls.customerName.disable();
      this.enableChat = true;
    } else {
      this.enableChat = false;
    }
  }

  getAppointments() {
    const url = 'https://planning-tech-demo.azurewebsites.net/api/Planning/schedule';
    this.isLoading = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'User-Name': String(this.appointmentForm.controls.customerName.value),
      })
    };

    this.http.get(url, httpOptions).subscribe((appointments: any) => {
      this.appointments = appointments.message;
      this.isLoading = false;
    });
  }

  sendMessage() {
    this.messages$.next([...this.messages, ...[{ sender: 'User', text: this.appointmentForm.controls.chatInput.value }]]);
    this.chatContainerEl.nativeElement.scrollIntoView({ behavior: "instant", block: "end" });
    this.isLoading = true;
    const url = 'https://planning-tech-demo.azurewebsites.net/api/Planning/message';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'User-Name': String(this.appointmentForm.controls.customerName.value),
      })
    };

    const body = {
      message: this.appointmentForm.controls.chatInput.value
    };

    this.appointmentForm.controls.chatInput.setValue('');
    this.appointmentForm.controls.chatInput.disable();

    this.http.post(url, body, httpOptions).subscribe((response: any) => {
      this.messages$.next([...this.messages, ...[{ sender: 'Chat', text: response.message }]]);
      this.chatContainerEl.nativeElement.scrollIntoView({ behavior: "instant", block: "end" });
      this.isLoading = false;
      this.appointmentForm.controls.chatInput.enable();
      this.chatInputEl.nativeElement.focus();
    });
  }
}
