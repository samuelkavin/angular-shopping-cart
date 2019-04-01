import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AbstractRestService {
    public abstract get<T>(url: string, option?: OptionHttpClients, param?: any): Observable<any>;
    public abstract post<T>(url: string, data: any, option?: OptionHttpClients): Observable<any>;
    public abstract put<T>(url: string, data: any, option?: OptionHttpClients): Observable<any>;
}

export interface OptionHttpClients {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    responseType?;
    successMessage?: string;
    errorMessage?: string;
    isHandlingLoading?: boolean;
}
