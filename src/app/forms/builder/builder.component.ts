import { FormioRefreshValue } from "@formio/angular";
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  EventEmitter,
} from "@angular/core";
import { PrismService } from "../../Prism.service";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"],
})
export class BuilderComponent implements AfterViewInit {
  //   @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild("code", { static: true }) codeElement?: ElementRef;
  public form: Object;
  formioJson: any;
  formio: any;
  formCount = 1;
  totalForms: any;
  currentFormNumber:number=1;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService) {
    this.totalForms = JSON.parse(localStorage.getItem(`formioCount`));
    if (
      JSON.parse(localStorage.getItem(`formioJson-${this.formCount}`)) !==
        null &&
      JSON.parse(localStorage.getItem(`formioJson-${this.formCount}`)) !==
        undefined
    ) {
      this.formioJson = JSON.parse(
        localStorage.getItem(`formioJson-${this.formCount}`)
      );
      this.form = this.formioJson;
    } else {
      this.form = {
        components: [],
      };
    }
  }

  onChange(event) {
    // this.jsonElement.nativeElement.innerHTML = '';
    // this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.refreshForm.emit({
      property: "form",
      value: event.form,
    });
    this.formio = event.form;
    // localStorage.setItem('formioJson',JSON.stringify(event.form));
  }

  ngAfterViewInit() {
    this.prism.init();
  }
  saveJson() {
    if (this.formio !== undefined && this.formio !== null) {
      localStorage.setItem(
        `formioJson-${this.currentFormNumber}`,
        JSON.stringify(this.formio)
      );
    }
  }
  newForm() {
    this.formioJson = {
      components: [],
    };
    this.form = this.formioJson;
    console.log(this.formio);
    this.formCount += 1;
    localStorage.setItem(
      `formioJson-${this.formCount}`,
      JSON.stringify(this.formioJson)
    );
    localStorage.setItem(`formioCount`, JSON.stringify(this.formCount));
    this.totalForms = JSON.parse(localStorage.getItem(`formioCount`));
  }
  getForm(val: any) {
    this.formio=[]
    if (
      JSON.parse(localStorage.getItem(`formioJson-${val}`)) !==
        null &&
      JSON.parse(localStorage.getItem(`formioJson-${val}`)) !==
        undefined
    ) {
      this.formioJson = JSON.parse(localStorage.getItem(`formioJson-${val}`));
      this.form = this.formioJson;
    } else {
      this.formioJson = {
        components: [],
      };
      this.form = this.formioJson;
    }
    this.currentFormNumber=val;
    console.log(val)
  }
  counter(i: number) {
    return new Array(i);
  }
  deleteForm(activeForm:number) {
    console.log(activeForm);
    localStorage.removeItem(`formioJson-${activeForm}`);
    this.totalForms-1
    localStorage.setItem('formioCount',this.totalForms)
  }
}
