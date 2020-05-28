import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ToolSetupPage } from '../modals/tool-setup/tool-setup.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tools: any;
  title;
  data=false;
  constructor(public http: HttpClient, private modalController: ModalController) {
    
   }



  async openModal(a) {
    for (var i = 0; i < this.tools.length; i++) {
      if (this.tools[i].id == a) {
        this.title = this.tools[i]['name'];
      }
    }
    const modal = await this.modalController.create({
      component: ToolSetupPage,
      componentProps: {
        title: this.title,
        bar: ''
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    return this.http.get("https://api.npoint.io/4d8bc92a13321618d697").subscribe(data => {
      this.tools = data['tools'];
      this.data=true;
    })
  }

  filterList(evt) {
  var q = evt.target.value;
  console.log(q)
    if(q.trim()==''){
      this.http.get("https://api.npoint.io/4d8bc92a13321618d697").subscribe(data => {
      this.tools = data['tools'];
      this.data=true;
    });
    }
    this.tools = this.tools.filter((a) => {
      if (a.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
         return true;
        }
        return false;
      })
  
   }

}


