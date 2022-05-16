import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NavigationLinksComponent } from './components/navigation-links/navigation-links.component';
import { DrinkAgainWinesComponent } from './components/drink-again-wines/drink-again-wines.component';
import { SecondaryNavigationComponent } from './components/secondary-navigation/secondary-navigation.component';
import { WineItemComponent } from './components/wine-item/wine-item.component';
import { KeepDrinkingWinesComponent } from './components/keep-drinking-wines/keep-drinking-wines.component';
import { ContinueWineItemComponent } from './components/continue-wine-item/continue-wine-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationLinksComponent,
    DrinkAgainWinesComponent,
    SecondaryNavigationComponent,
    WineItemComponent,
    KeepDrinkingWinesComponent,
    ContinueWineItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
