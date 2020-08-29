import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
} from "@ionic-native/admob-free/ngx";
import { Platform } from "@ionic/angular";

@Injectable()
export class AdmobFreeService {
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true,
  };
  constructor(private admobFree: AdMobFree, public platform: Platform) {
    platform.ready().then(() => {
      this.admobFree.interstitial.config(this.interstitialConfig);
      this.admobFree.interstitial
        .prepare()
        .then(() => {
          console.log("INTERSTIAL LOADED");
        })
        .catch((e) => console.log("PROBLEM LOADING INTERSTITIAL: ", e));
    });
  }

  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      autoShow: true,
      isTesting: true,
      size: "BANNER",
      //id: "ca-app-pub-3940256099942544/6300978111"
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare();
  }

  ShowInterstitial() {
    //CHECK AND SHOW INTERSTITIAL
    this.admobFree.interstitial
      .isReady()
      .then(() => {
        //AT .ISREADY SHOW
        this.admobFree.interstitial
          .show()
          .then(() => {
            console.log("INTERSTITIAL LOADED");
          })
          .catch((e) => console.log("PROBLEM LOADING : ", e));
      })
      .catch((e) => console.log("PROBLEM LOADING : ", e));
  }

  hideBanner() {
    this.admobFree.banner.hide();
  }
}
