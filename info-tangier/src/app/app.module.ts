import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { CategoryPagePageModule } from './pages/tabs/category-page/category-page.module';

// import { Camera } from '@ionic-native/camera/ngx';
// import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, CategoryPagePageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'TangerInfo'), AngularFirestoreModule,AngularFireAuthModule],
  providers: [
    
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Camera
    // File
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
