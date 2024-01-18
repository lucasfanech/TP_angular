import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-button.component.html',
  styleUrl: './hello-button.component.css'
})
export class HelloButtonComponent {
  sayHello() {
    alert('Hello UniLaFraude!');
  }

}
