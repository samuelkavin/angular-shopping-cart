import { Observable, throwError } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { AbstractRestService, OptionHttpClients } from './abstract-rest.service';

@Injectable({
    providedIn: 'root'
})
export class RestService implements AbstractRestService {

    private env = environment;
    protected httpClient: HttpClient;
    protected router: Router;

    constructor(protected injector: Injector) {
        this.httpClient = injector.get(HttpClient);
        this.router = injector.get(Router);
    }

    public get<T>(url: string, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // loading bar have to implement after intergrate with api
        }
        const caller = !!option ? this.httpClient.get<T>(url, option)
            : this.httpClient.get<T>(url);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));
    }

    public post<T>(url: string, data: any, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // [show loading bar] have to implement after intergrate with api
        }
        const caller = !!option ? this.httpClient.post<T>(url, data, option)
            : this.httpClient.post<T>(url, data);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));
    }

    public put<T>(url: string, data: any, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // loading bar have to implement after intergrate with api
        }
        const caller = !!option ? this.httpClient.put<T>(url, data, option)
            : this.httpClient.put<T>(url, data);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));
    }

    public delete<T>(url: string, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // loading bar have to implement after intergrate with api
        }
        const caller = !!option ? this.httpClient.delete<T>(url, option)
            : this.httpClient.delete<T>(url);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));

    }

    private success<T>(data: T, option?: OptionHttpClients) {
        if (!option || !option.isHandlingLoading) {
            // [hide loading bar] have to implement after intergrate with api
        }
        return data;
    }

    private error(errorResponse: HttpErrorResponse, option?: OptionHttpClients) {
        if (!option || !option.isHandlingLoading) {
            // [hide loading bar] have to implement after intergrate with api
        }
        return throwError(errorResponse);
    }

    protected getFullUrl(url: string) {
        return this.env.baseUrl + url;
    }
}
