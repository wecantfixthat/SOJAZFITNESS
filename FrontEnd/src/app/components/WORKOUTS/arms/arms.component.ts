import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arms',
  templateUrl: './arms.component.html',
  styleUrls: ['./arms.component.scss']
})
export class ArmsComponent {
  public isCollapsed:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
