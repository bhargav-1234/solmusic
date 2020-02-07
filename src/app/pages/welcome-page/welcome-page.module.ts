//--------------------module-------------------------//
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
//-----------------page-components---------------------------//
import { WelcomePageComponent } from "./welcome-page.component";
//------------------components------------------------------//
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { UnlimitedComponent } from "../../components/unlimited/unlimited.component";
//----------------------services-----------------------------//

const routes: Routes = [{ path: "", component: WelcomePageComponent }];

@NgModule({
  declarations: [
    WelcomePageComponent,
    NavbarComponent,
    BannerComponent,
    UnlimitedComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes)]
})
export class WelcomePageModule {}
