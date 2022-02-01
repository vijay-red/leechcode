import { Component, OnInit, Input } from '@angular/core';
import { Example } from 'src/app/models/example';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input() example: Example;
  
  constructor() { }

  ngOnInit(): void {
  }

}
