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
        "display": "form",
        "components": [
          {
            "label": "Tabs",
            "components": [
              {
                "label": "Consult",
                "key": "consult",
                "components": [
                  {
                    "label": "Tabs",
                    "components": [
                      {
                        "label": "Intake",
                        "key": "intake",
                        "components": [
                          {
                            "title": "Vital Signs",
                            "collapsible": false,
                            "key": "vitalSigns",
                            "type": "panel",
                            "label": "Panel",
                            "input": false,
                            "tableView": false,
                            "components": [
                              {
                                "label": "Pictures Taken",
                                "tableView": false,
                                "key": "picturesTaken",
                                "type": "checkbox",
                                "input": true,
                                "defaultValue": false
                              },
                              {
                                "label": "HTML",
                                "attrs": [
                                  {
                                    "attr": "",
                                    "value": ""
                                  }
                                ],
                                "content": "Height :",
                                "refreshOnChange": false,
                                "key": "html",
                                "type": "htmlelement",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "Columns",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "label": "ft",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "decimalLimit": 2,
                                        "requireDecimal": true,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "ft",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "size": "xs",
                                    "currentWidth": ""
                                  },
                                  {
                                    "components": [
                                      {
                                        "label": "in",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "decimalLimit": 2,
                                        "requireDecimal": true,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "in",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "size": "xs",
                                    "currentWidth": ""
                                  },
                                  {
                                    "components": [
                                      {
                                        "label": "cm",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "decimalLimit": 2,
                                        "requireDecimal": true,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "cm",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "size": "xs",
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "currentWidth": ""
                                  }
                                ],
                                "autoAdjust": true,
                                "key": "columns",
                                "type": "columns",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "lblWeight",
                                "attrs": [
                                  {
                                    "attr": "",
                                    "value": ""
                                  }
                                ],
                                "content": "Weight :",
                                "refreshOnChange": false,
                                "key": "html1",
                                "type": "htmlelement",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "Columns",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "label": "lb",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "decimalLimit": 2,
                                        "requireDecimal": true,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "ft1",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "size": "xs",
                                    "currentWidth": ""
                                  },
                                  {
                                    "components": [
                                      {
                                        "label": "kg",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "decimalLimit": 2,
                                        "requireDecimal": true,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "in1",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "size": "xs",
                                    "currentWidth": ""
                                  }
                                ],
                                "autoAdjust": true,
                                "key": "columns1",
                                "type": "columns",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "lblBp",
                                "attrs": [
                                  {
                                    "attr": "",
                                    "value": ""
                                  }
                                ],
                                "content": "Blood Pressure :",
                                "refreshOnChange": false,
                                "key": "html2",
                                "type": "htmlelement",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "Columns",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "label": "SBP",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "requireDecimal": false,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "ft2",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "size": "xs",
                                    "currentWidth": ""
                                  },
                                  {
                                    "components": [
                                      {
                                        "label": "DBP",
                                        "mask": false,
                                        "tableView": false,
                                        "delimiter": false,
                                        "decimalLimit": 2,
                                        "requireDecimal": true,
                                        "inputFormat": "plain",
                                        "truncateMultipleSpaces": false,
                                        "key": "in2",
                                        "type": "number",
                                        "input": true
                                      }
                                    ],
                                    "width": "",
                                    "offset": "",
                                    "push": 0,
                                    "pull": 0,
                                    "size": "xs",
                                    "currentWidth": ""
                                  }
                                ],
                                "autoAdjust": true,
                                "key": "columns2",
                                "type": "columns",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "HTML",
                                "attrs": [
                                  {
                                    "attr": "",
                                    "value": ""
                                  }
                                ],
                                "content": "* Blood Pressure is out of range. If the patient does not have history of hypertension, complete HTN Plan in History Section.",
                                "refreshOnChange": false,
                                "key": "html3",
                                "conditional": {
                                  "show": true,
                                  "when": "ft2",
                                  "eq": "180"
                                },
                                "customConditional": "show = data.ft2 > 120;",
                                "type": "htmlelement",
                                "input": false,
                                "tableView": false
                              },
                              {
                                "label": "* I have completed BMI education in accordance with the mandatory BMI plan",
                                "tableView": false,
                                "key": "iHaveCompletedBmiEducationInAccordanceWithTheMandatoryBmiPlan",
                                "type": "checkbox",
                                "input": true,
                                "defaultValue": false
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "label": "Chief Complaint",
                        "key": "chiefComplaint",
                        "components": []
                      },
                      {
                        "label": "Associate Complaints",
                        "key": "associateComplaints",
                        "components": []
                      },
                      {
                        "label": "History",
                        "key": "history",
                        "components": []
                      },
                      {
                        "label": "Vascualar Studies",
                        "key": "vascualarStudies",
                        "components": []
                      },
                      {
                        "label": "Severity Scores",
                        "key": "severityScores",
                        "components": []
                      },
                      {
                        "label": "Assessment",
                        "key": "assessment",
                        "components": []
                      },
                      {
                        "label": "Patient Care Plan",
                        "key": "patientCarePlan",
                        "components": []
                      },
                      {
                        "label": "E/M Coding",
                        "key": "eMCoding",
                        "components": []
                      },
                      {
                        "label": "DME and Medication Order",
                        "key": "dmeAndMedicationOrder",
                        "components": []
                      },
                      {
                        "label": "Multi-speciality Input",
                        "key": "multiSpecialityInput",
                        "components": [
                          {
                            "label": "lblWell",
                            "key": "lblWell",
                            "type": "well",
                            "input": false,
                            "tableView": false,
                            "components": [
                              {
                                "title": "Please choose the PRIMARY CARE PHYSICIAN you would like to refer to from the following list :",
                                "collapsible": false,
                                "key": "pleaseChooseThePrimaryCarePhysicianYouWouldLikeToReferToFromTheFollowingList",
                                "type": "panel",
                                "label": "Panel",
                                "input": false,
                                "tableView": false,
                                "components": [
                                  {
                                    "label": "Select",
                                    "widget": "choicesjs",
                                    "hideLabel": true,
                                    "tableView": true,
                                    "data": {
                                      "values": [
                                        {
                                          "label": "Jane Simono",
                                          "value": "janeSimono"
                                        },
                                        {
                                          "label": "Tara Wood",
                                          "value": "taraWood"
                                        }
                                      ]
                                    },
                                    "key": "select1",
                                    "type": "select",
                                    "input": true
                                  }
                                ]
                              },
                              {
                                "title": "Please choose the PODIATRIST you would like to refer DORSUM OF FOOT AND/OR TOES to from the following list :",
                                "collapsible": false,
                                "key": "pleaseChooseThePrimaryCarePhysicianYouWouldLikeToReferToFromTheFollowingList1",
                                "type": "panel",
                                "label": "Panel",
                                "input": false,
                                "tableView": false,
                                "components": [
                                  {
                                    "label": "Select",
                                    "widget": "choicesjs",
                                    "hideLabel": true,
                                    "tableView": true,
                                    "data": {
                                      "values": [
                                        {
                                          "label": "No Data Found",
                                          "value": "0"
                                        }
                                      ]
                                    },
                                    "key": "select2",
                                    "type": "select",
                                    "input": true
                                  }
                                ]
                              },
                              {
                                "title": "Select the Multi-speciality and Physician :",
                                "collapsible": false,
                                "key": "pleaseChooseThePrimaryCarePhysicianYouWouldLikeToReferToFromTheFollowingList2",
                                "type": "panel",
                                "label": "Panel",
                                "input": false,
                                "tableView": false,
                                "components": [
                                  {
                                    "label": "Select",
                                    "widget": "choicesjs",
                                    "hideLabel": true,
                                    "tableView": true,
                                    "data": {
                                      "values": [
                                        {
                                          "label": "Select Multi-Speciality",
                                          "value": "0"
                                        },
                                        {
                                          "label": "Arterial",
                                          "value": "arterial"
                                        },
                                        {
                                          "label": "Cardiology",
                                          "value": "cardiology"
                                        },
                                        {
                                          "label": "Dermatology",
                                          "value": "dermatology"
                                        },
                                        {
                                          "label": "Endocrinologist",
                                          "value": "endocrinologist"
                                        }
                                      ]
                                    },
                                    "key": "select4",
                                    "type": "select",
                                    "input": true,
                                    "defaultValue": 0
                                  },
                                  {
                                    "label": "Select",
                                    "widget": "choicesjs",
                                    "hideLabel": true,
                                    "tableView": true,
                                    "data": {
                                      "values": [
                                        {
                                          "label": "Gina Brown",
                                          "value": "1"
                                        },
                                        {
                                          "label": "Kimberley Scott",
                                          "value": "2"
                                        }
                                      ]
                                    },
                                    "dataType": "auto",
                                    "key": "select3",
                                    "type": "select",
                                    "input": true
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "label": "Edit Grid",
                            "tableView": false,
                            "templates": {
                              "header": "<div class=\"row\">\r\n              {% util.eachComponent(components, function(component) { %}\r\n                <div class=\"col-sm-3\">\r\n                  <strong>{{ component.label }}</strong>\r\n                </div>\r\n              {% }) %}\r\n            </div>",
                              "row": "<div class=\"row\">\r\n             {%util.eachComponent(components, function(component) { %}\r\n               <div class=\"col-sm-2\">\r\n                 {{ row[component.key] }}\r\n               </div>\r\n             {% }) %}\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"btn-group pull-right\">\r\n                 <div class=\"btn btn-default btn-sm editRow\"><i class=\"fa fa-edit\"></i></div>\r\n                 <div class=\"btn btn-danger btn-sm removeRow\"><i class=\"fa fa-trash\"></i></div>\r\n               </div>\r\n             </div>\r\n            </div>"
                            },
                            "redrawOn": "data",
                            "rowDrafts": false,
                            "key": "editGrid",
                            "type": "editgrid",
                            "displayAsTable": false,
                            "input": false,
                            "components": [
                              {
                                "label": "Physician",
                                "tableView": true,
                                "key": "textField",
                                "type": "textfield",
                                "input": true
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "label": "LOMN Letters",
                        "key": "lomnLetters",
                        "components": []
                      },
                      {
                        "label": "Patient Visit Summary",
                        "key": "patientVisitSummary",
                        "components": []
                      }
                    ],
                    "verticalLayout": true,
                    "key": "tabs2",
                    "type": "tabs",
                    "input": false,
                    "tableView": false
                  }
                ]
              },
              {
                "label": "Documents",
                "key": "documents",
                "components": [
                  {
                    "label": "Tabs",
                    "components": [
                      {
                        "label": "Tab 1",
                        "key": "tab2",
                        "components": []
                      },
                      {
                        "label": "Tab 2",
                        "key": "tab3",
                        "components": []
                      }
                    ],
                    "verticalLayout": true,
                    "key": "tabs3",
                    "type": "tabs",
                    "input": false,
                    "tableView": false
                  }
                ]
              }
            ],
            "key": "tabs",
            "type": "tabs",
            "input": false,
            "tableView": false
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
