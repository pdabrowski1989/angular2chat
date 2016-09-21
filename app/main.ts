import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();

this.a =(): void => {
    console.log('angular');
};

this.a();


platform.bootstrapModule(AppModule);