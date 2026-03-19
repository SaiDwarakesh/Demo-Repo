import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-demo-main',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './demo-main.component.html',
  styleUrl: './demo-main.component.scss'
})
export class DemoMainComponent {

}
