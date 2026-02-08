import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-demo-main',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './demo-main.component.html',
  styleUrl: './demo-main.component.scss'
})
export class DemoMainComponent {

}
