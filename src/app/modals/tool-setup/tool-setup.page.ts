import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-tool-setup',
  templateUrl: './tool-setup.page.html',
  styleUrls: ['./tool-setup.page.scss'],
})
export class ToolSetupPage implements OnInit {
  slideOpts = {
    slidesPerView: 2
  }

  constructor(private modalController: ModalController, private storage: Storage) { }
  title: any;
  dependency: any;
  url: any;
  user: any;
  com;


  ngOnInit() {
    this.storage.get('name').then((result) => {
      this.user = result;
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
