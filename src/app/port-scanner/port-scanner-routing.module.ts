import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortScannerPage } from './port-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: PortScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortScannerPageRoutingModule {}
