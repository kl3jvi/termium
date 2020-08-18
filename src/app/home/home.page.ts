import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModalController } from "@ionic/angular";
import { ToolSetupPage } from "../modals/tool-setup/tool-setup.page";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  tools: any;
  title;
  datas = false;
  dependency: any;
  url;
  com;
  commands;

  constructor(
    public router: Router,
    public http: HttpClient,
    private modalController: ModalController
  ) {}
  slideOpts = { slidesPerView: 3 };

  async openModal(a: String) {
    for (var i = 0; i < this.tools.length; i++) {
      if (this.tools[i].id == a) {
        this.title = this.tools[i]["name"];
        this.dependency = this.tools[i]["dependency"];
        this.url = this.tools[i]["url"];
        this.com = this.tools[i]["lastCommand"];
      }
    }
    const modal = await this.modalController.create({
      component: ToolSetupPage,
      componentProps: {
        title: this.title,
        dependency: this.dependency,
        url: this.url,
        com: this.com,
      },
    });
    return await modal.present();
  }

  ngOnInit() {
    this.getTools();
  }

  getTools() {
    return this.http
      .get("https://api.npoint.io/320b8d2eebac3e349924")
      .subscribe((data) => {
        this.tools = data["tools"];
        this.datas = true;
      });
  }

  filterList(evt) {
    var q = evt.target.value;
    console.log(q);
    if (q.trim() == "") {
      this.http
        .get("https://api.npoint.io/320b8d2eebac3e349924")
        .subscribe((data) => {
          this.tools = data["tools"];
        });
    }
    this.tools = this.tools.filter((evt) => {
      if (evt.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return;
    });
  }
}
