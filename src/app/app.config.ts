import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"eva64marquezjorge-f584f","appId":"1:667342480832:web:0183da1e08cb372cf99425","storageBucket":"eva64marquezjorge-f584f.appspot.com","apiKey":"AIzaSyAcBqaJ4_QDtaTx5arpE400OpfKBnkelyc","authDomain":"eva64marquezjorge-f584f.firebaseapp.com","messagingSenderId":"667342480832"})), provideFirestore(() => getFirestore())]
};
