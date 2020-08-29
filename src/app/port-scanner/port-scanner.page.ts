import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { AdmobFreeService } from "../admob.service";
@Component({
  selector: "app-port-scanner",
  templateUrl: "./port-scanner.page.html",
  styleUrls: ["./port-scanner.page.scss"],
})
export class PortScannerPage {
  host = "";
  API_KEY = "0000b07715908cf190a4fa11bc3095dea6f925f5351c782158b04941";
  data;
  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private admobFreeService: AdmobFreeService
  ) {}

  scan() {
    if (this.host != "") {
      this.http
        .get("https://api.ipdata.co/" + this.host + "?api-key=" + this.API_KEY)
        .subscribe((data) => {
          this.data = data;
        });
      setTimeout(() => {
        this.admobFreeService.ShowInterstitial();
      }, 2000);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Caution",
      message: "Please enter an IP Address",
      buttons: ["OK"],
    });
    await alert.present();
  }

  ngOnInit() {}
}
