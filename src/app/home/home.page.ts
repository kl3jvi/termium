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

  phishingTools: any;
  title;
  datas = false;
  dependency: any;
  url;
  com;
  informationGathering: any;
  vuln;
  constructor(public router: Router, public http: HttpClient, private modalController: ModalController) { }

  async openModal(a) {
    for (var i = 0; i < this.phishingTools.length; i++) {
      if (this.phishingTools[i].id == a) {
        this.title = this.phishingTools[i]['name'];
        this.dependency = this.phishingTools[i]['dependency']
        this.url = this.phishingTools[i]['url'];
      }
      for (var i = 0; i < this.informationGathering.length; i++) {
        if (this.informationGathering[i].id == a) {
          this.title = this.informationGathering[i]['name'];
          this.dependency = this.informationGathering[i]['dependency']
          this.url = this.informationGathering[i]['url'];
        }
        for (var i = 0; i < this.vuln.length; i++) {
          if (this.vuln[i].id == a) {
            this.title = this.vuln[i]['name'];
            this.dependency = this.vuln[i]['dependency']
            this.url = this.vuln[i]['url'];
          }
        }
      }
    }
    const modal = await this.modalController.create({
      component: ToolSetupPage,
      componentProps: {
        title: this.title,
        dependency: this.dependency,
        url: this.url,
      }
    });
    return await modal.present();
  }

  settings() {
    this.router.navigateByUrl('/settings');
  }

  ngOnInit() {
    
    return this.http.get("https://api.npoint.io/320b8d2eebac3e349924").subscribe(data => {
      this.phishingTools = data['phishingTools'];
      this.informationGathering = data['informationGathering'];
      this.vuln = data['vulnerability']
      this.datas = true;
    })
  }

  filterList(evt) {
    var q = evt.target.value;
    console.log(q)
    if (q.trim() == '') {
      this.http.get("https://api.npoint.io/320b8d2eebac3e349924").subscribe(data => {
        this.phishingTools = data['phishingTools'];
        this.informationGathering = data['informationGathering'];
        this.vuln = data['vulnerability'];
        this.datas = true;
      });
    }
    this.phishingTools = this.phishingTools.filter((evt) => {
      if (evt.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return;
    })
    this.informationGathering = this.informationGathering.filter((evt) => {
      if (evt.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return;
    })
    this.vuln = this.vuln.filter((evt) => {
      if (evt.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return;
    })
  }
}


