import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortScannerPageRoutingModule } from './port-scanner-routing.module';

import { PortScannerPage } from './port-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortScannerPageRoutingModule
  ],
  declarations: [PortScannerPage]
})
export class PortScannerPageModule {}
