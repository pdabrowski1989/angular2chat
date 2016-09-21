import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Chat } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(Chat);