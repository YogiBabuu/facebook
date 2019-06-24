import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CoreModule } from './app/core/core.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// nasluchujemy na bledy
platformBrowserDynamic().bootstrapModule(CoreModule)
  .catch(err => console.error(err));
