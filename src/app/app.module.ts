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
import { ShowScrollerComponent } from './components/show-scroller/show-scroller.component';
import { InfoButtonComponent } from './components/info-button/info-button.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DescriptionComponent } from './components/description/description.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { FeaturedShowComponent } from './components/featured-show/featured-show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationLinksComponent,
    DrinkAgainWinesComponent,
    SecondaryNavigationComponent,
    WineItemComponent,
    KeepDrinkingWinesComponent,
    ContinueWineItemComponent,
    ShowScrollerComponent,
    InfoButtonComponent,
    PlayButtonComponent,
    ControlsComponent,
    DescriptionComponent,
    BackgroundImageComponent,
    FeaturedShowComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
