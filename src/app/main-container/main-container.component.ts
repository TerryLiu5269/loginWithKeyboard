import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  name: string = 'Terry'

  constructor() { }

  ngOnInit(): void {
  }

  getChild(childName: string): void {
    this.name = childName;
    console.log("this.name=====>", this.name)
  }

}
