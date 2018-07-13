import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from "@agm/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAqToE0zbbjsLm4dCcls4e-oPZ2iqlNS4A"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
