import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { AbstractRestService, OptionHttpClients } from './abstract-rest.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LocalService implements AbstractRestService {
    protected env = environment;
    protected httpClient: HttpClient;

    constructor(
        protected injector: Injector) {
        this.httpClient = injector.get(HttpClient);
    }

    public get<T>(url: string, option?: OptionHttpClients, param?: any) {
        return this.httpClient.get(this.getFullUrl(url));
    }

    public post<T>(url: string, data: any, option?: OptionHttpClients) {
        return this.httpClient.get(this.getFullUrl(url));
    }

    public put<T>(url: string, data: any, option?: OptionHttpClients) {
        return this.httpClient.get(this.getFullUrl(url));
    }

    private getFullUrl(url) {
        return './src/mock-test/' + url + '.json';
    }

    private success(data: any) {
        return data.json;
    }
}
