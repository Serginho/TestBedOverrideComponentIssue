import { Component, OnInit } from '@angular/core';
import {FooService} from './foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  providers: [FooService]
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
