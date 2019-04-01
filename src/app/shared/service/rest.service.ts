// import { CommonUtil } from './../util/common-util';
import { MatSnackBar } from '@angular/material';
import { Observable, of, empty, throwError } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { map, catchError, onErrorResumeNext } from 'rxjs/operators';
import { AbstractRestService, OptionHttpClients } from './abstract-rest.service';
// import { open } from 'fs';

@Injectable({
    providedIn: 'root'
})
export class RestService implements AbstractRestService {
    private env = environment;
    protected httpClient: HttpClient;
    protected snackBar: MatSnackBar;
    protected router: Router;
    constructor(
        protected injector: Injector
    ) {
        this.httpClient = injector.get(HttpClient);
        this.snackBar = injector.get(MatSnackBar);
        this.router = injector.get(Router);
    }

    public get<T>(url: string, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // CommonUtil.showSpinnerLoader();
        }
        const caller = !!option ? this.httpClient.get<T>(url, option)
            : this.httpClient.get<T>(url);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));
    }

    public post<T>(url: string, data: any, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // CommonUtil.showSpinnerLoader();
        }
        const caller = !!option ? this.httpClient.post<T>(url, data, option)
            : this.httpClient.post<T>(url, data);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));
    }

    public put<T>(url: string, data: any, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // CommonUtil.showSpinnerLoader();
        }
        const caller = !!option ? this.httpClient.put<T>(url, data, option)
            : this.httpClient.put<T>(url, data);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));
    }

    public delete<T>(url: string, option?: OptionHttpClients): Observable<T> {
        if (!option || !option.isHandlingLoading) {
            // CommonUtil.showSpinnerLoader();
        }
        const caller = !!option ? this.httpClient.delete<T>(url, option)
            : this.httpClient.delete<T>(url);
        return caller.pipe<T, any>(map(response => this.success(response, option)), catchError((error) => {
            return this.error(error, option);
        }));

    }

    private success<T>(data: T, option?: OptionHttpClients) {
        if (!option || !option.isHandlingLoading) {
            // CommonUtil.hideSpinnerLoader();
        }
        return data;
    }

    private error(errorResponse: HttpErrorResponse, option?: OptionHttpClients) {
        if (!option || !option.isHandlingLoading) {
            // CommonUtil.hideSpinnerLoader();
        }
        const isTokenExpired = !!errorResponse.status && (errorResponse.status === 611 || errorResponse.status === 613);
        if (!!isTokenExpired) {
            this.logout();
        }
        return throwError(errorResponse);
    }

    protected getFullUrl(url: string) {
        return this.env.baseUrl + url;
    }

    /**
     * This method will be place at the finally in the http call.
     * .map(response => this.success(response))To clean up the loading/popup/ if got any problem in success, error process
     */
    private logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/users']);
    }

}
