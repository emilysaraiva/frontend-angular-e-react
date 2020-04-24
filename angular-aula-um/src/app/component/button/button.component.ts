import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() nome: string;

  constructor() { }

  onClickButton(nome: string): void {
    console.log('CLICK::' , nome)
  }

}
