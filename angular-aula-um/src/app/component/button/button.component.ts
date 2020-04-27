import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() nome: string;
  @Input() codigo: number;
  @Output() clickButton: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onClickButton(nome: string): void {
    console.log('CLICK::' , nome);
    this.clickButton.emit(this.codigo);
  }

}
