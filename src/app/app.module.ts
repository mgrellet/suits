import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"suits-rent","appId":"1:843395829749:web:a6b89eaeac6eb17f6edabc","storageBucket":"suits-rent.appspot.com","apiKey":"AIzaSyA4SPRpr9MF1ucyPGedxO7HnIP0HXl7aPE","authDomain":"suits-rent.firebaseapp.com","messagingSenderId":"843395829749"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"suits-rents","appId":"1:545099710270:web:836cc892638c1c9cbd366f","storageBucket":"suits-rents.appspot.com","apiKey":"AIzaSyDr_S4vBqJhztzQdwe-gUwaZ40zjoTmACc","authDomain":"suits-rents.firebaseapp.com","messagingSenderId":"545099710270"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
