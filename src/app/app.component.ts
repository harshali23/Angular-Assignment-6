import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<div><h2>{{Display()}}</h2> <input type="text"></div>',
  styles: ['h2{color : blue;}']
})
export class AppComponent {
  title = 'assignment6';
  public Display()
  {
    return "Marvellous Infosystems";
  }
}
