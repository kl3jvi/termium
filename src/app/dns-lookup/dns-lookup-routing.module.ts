import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DnsLookupPage } from './dns-lookup.page';

const routes: Routes = [
  {
    path: '',
    component: DnsLookupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DnsLookupPageRoutingModule {}
