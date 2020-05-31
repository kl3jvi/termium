import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ToolSetupPage } from '../modals/tool-setup/tool-setup.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tools: any;
  title;
  datas = false;
  dependency: any;
  foto;
  url;
  command1;
  constructor(public router:Router,public http: HttpClient, private modalController: ModalController) { }

  async openModal(a) {
    for (var i = 0; i < this.tools.length; i++) {
      if (this.tools[i].id == a) {
        this.title = this.tools[i]['name'];
        this.dependency = this.tools[i]['dependency']
        this.url = this.tools[i]['url'];
      }
    }
    const modal = await this.modalController.create({
      component: ToolSetupPage,
      componentProps: {
        json: this.tools,
        title: this.title,
        data: this.dependency,
        url: this.url,
        comman1: this.command1,
      }
    });
    return await modal.present();
  }

  settings(){
    this.router.navigateByUrl('/settings');
  }

  ngOnInit() {
    return this.http.get("https://api.npoint.io/320b8d2eebac3e349924").subscribe(data => {
      this.tools = data['item'];
      this.datas = true;
    })
  }

  filterList(evt) {
    var q = evt.target.value;
    console.log(q)
    if (q.trim() == '') {
      this.http.get("https://api.npoint.io/320b8d2eebac3e349924").subscribe(data => {
        this.tools = data['item'];
        this.datas = true;
      });
    }
    this.tools = this.tools.filter((evt) => {
      if (evt.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return;
    })
  }
}


