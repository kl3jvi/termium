import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { IonSlides} from '@ionic/angular'
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage {
  name;
  constructor(private storage: Storage, private router: Router) { }
  @ViewChild(IonSlides) slides:IonSlides;

  async finish(){
    await this.storage.set('tutorialComplete', true);
    await this.storage.set('name', this.name);
    this.router.navigateByUrl('/home');
  }

  next(){
    this.slides.slideNext();
  }
}
