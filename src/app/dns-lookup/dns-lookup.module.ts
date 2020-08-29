import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DnsLookupPageRoutingModule } from './dns-lookup-routing.module';

import { DnsLookupPage } from './dns-lookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DnsLookupPageRoutingModule
  ],
  declarations: [DnsLookupPage]
})
export class DnsLookupPageModule {}
