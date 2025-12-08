import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../components/navbar/navbar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule, FormsModule, NavbarComponent]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      content: '+203 488 9820 / +203 488 9821'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'office@orienteg.com'
    },
    {
      icon: '📍',
      title: 'Address',
      content: 'International Trading Center, Egypt'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM'
    }
  ];

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      alert('✅ Thank you for your message! We will get back to you soon.');
      this.resetForm();
    } else {
      alert('❌ Please fill in all required fields.');
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
