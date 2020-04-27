import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonTitle = 'Botão Dois';

  funcaoDeChamada(codigo:number): void {
    console.log('App::Component', codigo);
  }
}
