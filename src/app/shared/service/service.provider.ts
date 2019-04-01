import { Injector } from '@angular/core';

import { environment } from '../../../environments/environment';
import { RestService } from '../../shared/service/rest.service';
import { LocalService } from '../../shared/service/local.service';
import { AbstractRestService } from '../../shared/service/abstract-rest.service';

export function RestServiceFactory(injector: Injector) {
    return environment.production ? new RestService(injector) : new LocalService(injector);
}

export const RestServiceProvider = {
    provide: AbstractRestService,
    useFactory: RestServiceFactory,
    deps: [Injector]
};

