import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { IonSlides} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage {
  name='';
  constructor(private storage: Storage, private router: Router,public toastController: ToastController) { }
  @ViewChild(IonSlides) slides:IonSlides;

  async finish(){
    await this.storage.set('tutorialComplete', true);
    if(this.name.trim() == ''){
      this.presentToast();
    }else{
    await this.storage.set('name', this.name.trim());
    this.router.navigateByUrl('/home');
  }
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Please enter a username.',
    duration: 2000
  });
  toast.present();
}

  next(){
    this.slides.slideNext();
  }
}
