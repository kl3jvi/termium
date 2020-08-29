import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AdmobFreeService } from "../admob.service";
@Component({
  selector: "app-dns-lookup",
  templateUrl: "./dns-lookup.page.html",
  styleUrls: ["./dns-lookup.page.scss"],
})
export class DnsLookupPage implements OnInit {
  domain = "";
  dnsData;
  constructor(
    private http: HttpClient,
    private admobFreeService: AdmobFreeService
  ) {}

  ngOnInit() {}

  lookUpDns() {
    if (this.domain != "" && this.domain.length > 8) {
      if (this.domain.startsWith("http://")) {
        this.domain = this.domain.substr(7);
        console.log(this.domain);
      } else if (this.domain.startsWith("https://")) {
        this.domain = this.domain.substr(8);
      }
      this.http
        .get(
          "https://www.whoisxmlapi.com/whoisserver/DNSService?apiKey=at_YQ9c7NQHtUoSDChxiar3i6tOsfjiX&domainName=" +
            this.domain +
            "&type=_all&outputFormat=json"
        )
        .subscribe((data) => {
          this.dnsData = data["DNSData"]["dnsRecords"];
          console.log(data["DNSData"]["dnsRecords"]);
        });
      this.admobFreeService.ShowInterstitial();
    }
  }
}
