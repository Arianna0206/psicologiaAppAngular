import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // <-- Importa HttpClient
import { routes } from './app/app.routes';
import { firebaseProviders } from './app/firebase.config';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { provideStorage, getStorage } from '@angular/fire/storage'; // <-- Importa el interceptor

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])), // <-- Agrega HttpClient con el interceptor
    ...firebaseProviders,
    provideStorage(() => getStorage())
  ],
}).catch((err) => console.error(err));
