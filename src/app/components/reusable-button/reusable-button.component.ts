import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.css'],
})
export class ReusableButtonComponent implements OnInit {
  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }
  get name(): string {
    return this.buttonText;
  }

  @Input() color: string = '000000';
  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

  public buttonText = 'FOLLOW JANE';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
		this.btnClick.emit();
	}
}
