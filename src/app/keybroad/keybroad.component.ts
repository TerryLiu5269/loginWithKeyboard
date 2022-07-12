import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-keybroad',
  templateUrl: './keybroad.component.html',
  styleUrls: ['./keybroad.component.scss']
})
export class KeybroadComponent implements OnInit {

  numArr: string[] = ['1', '2', '3', '取消', '4', '5', '6', '清除', '7', '8', '9', '0'];
  @ViewChild("cardReaderInput", { read: ElementRef }) cardReaderInput!: ElementRef;
  @ViewChild("cardPasswordInput", { read: ElementRef }) cardPasswordInput!: ElementRef;

  CRIValue = "";
  CPIValue = "";

  constructor() { }

  ngOnInit(): void {
  }

  do(el: any) {
    //取得鍵盤的值
    // console.log(el);
    console.log(this.cardReaderInput)
    if (el === "清除") {
      this.CRIValue = "";
      // this.CPIValue = "";
      return;
    } if (el === "取消") {
      alert("是否要離開當前頁面");
      this.CRIValue = "";
      // this.CPIValue = "";
      return;
    } else {
      this.CRIValue += el;
      // this.CPIValue += el;
    }

    //取得input值
    // console.log(this.cardReaderInput.nativeElement.value)

  }


}
