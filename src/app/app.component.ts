import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone: true,
  template:'<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'miproyecto';
}
