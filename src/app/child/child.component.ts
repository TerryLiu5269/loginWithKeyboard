import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  newString: string = "Terry goodgood"

  //for button
  @Output() sendEvent = new EventEmitter();

  //for input
  @ViewChild("inputText", { read: ElementRef }) inputText!: ElementRef;
  @Output() sendInputEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //for button
  do() {
    this.sendEvent.emit(this.newString);
  }

  //for input
  do2() {
    this.sendInputEvent.emit(this.inputText.nativeElement.value)
    console.log(this.inputText)
  }


}
