import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { SplashGuard } from "./guards/splash.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
    canActivate: [SplashGuard],
  },
  {
    path: "tool-setup",
    loadChildren: () =>
      import("./modals/tool-setup/tool-setup.module").then(
        (m) => m.ToolSetupPageModule
      ),
  },
  {
    path: "splashscreen",
    loadChildren: () =>
      import("./splashscreen/splashscreen.module").then(
        (m) => m.SplashscreenPageModule
      ),
  },
  {
    path: 'port-scanner',
    loadChildren: () => import('./port-scanner/port-scanner.module').then( m => m.PortScannerPageModule)
  },
  {
    path: 'dns-lookup',
    loadChildren: () => import('./dns-lookup/dns-lookup.module').then( m => m.DnsLookupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
