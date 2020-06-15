import { Injectable } from "@angular/core";
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';


@Injectable()
export class AdmobFreeService {
  constructor(private admobFree: AdMobFree, public platform: Platform) { }

  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      autoShow: true,
      isTesting: true,
      size: "BANNER",
      id: "ca-app-pub-3940256099942544/6300978111"
    };  
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare();
  }

  hideBanner(){ 
    this.admobFree.banner.hide();
  }
}