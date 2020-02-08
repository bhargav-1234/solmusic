// ----------------------------------modules--------------------------------//
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
// -------------------------------components----------------------------------//
import { AppComponent } from "./app.component";

import { SubscriptionComponent } from "./components/subscription/subscription.component";
import { PremimumComponent } from "./components/premimum/premimum.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { WelcomePageModule } from "./pages/welcome-page/welcome-page.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// -----------------------------page-components---------------------------------/

// ------------------------------services---------------------------------------//

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    PremimumComponent,
    FooterComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
