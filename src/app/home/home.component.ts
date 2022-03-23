import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { PrismService } from '../Prism.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  formJson={
    "components": [
        {
            "label": "Text Field",
            "tableView": true,
            "key": "textField",
            "type": "textfield",
            "input": true
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "input": true,
            "tableView": false
        }
    ]
}
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService
  ) {}

  ngAfterViewInit() {
    this.prism.init();
  }
}
