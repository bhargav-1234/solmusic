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
import { WorksComponent } from "../../components/works/works.component";
import { ArtistsComponent } from "../../components/artists/artists.component";
import { SubscriptionComponent } from "../../components/subscription/subscription.component";
import { PremimumComponent } from "../../components/premimum/premimum.component";
import { FooterComponent } from "../../components/footer/footer.component";

//----------------------services-----------------------------//
import { WorksService } from "../../components/works/works.service";
import { ArtistsService } from "src/app/components/artists/artists.service";
import { SubscriptionService } from "src/app/components/subscription/subscription.service";
import { PremimumService } from "src/app/components/premimum/premimum.service";
const routes: Routes = [{ path: "", component: WelcomePageComponent }];

@NgModule({
  declarations: [
    WelcomePageComponent,
    NavbarComponent,
    BannerComponent,
    UnlimitedComponent,
    WorksComponent,
    ArtistsComponent,
    SubscriptionComponent,
    PremimumComponent,
    FooterComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes)],
  providers: [
    WorksService,
    ArtistsService,
    SubscriptionService,
    PremimumService
  ]
})
export class WelcomePageModule {}
