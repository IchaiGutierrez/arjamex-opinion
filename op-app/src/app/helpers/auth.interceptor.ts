//inspects and transforms HTTP requests before sending to back-end
import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { TokenStorageService } from "../services/token-storage.service";
import { Observable } from "rxjs";

const TOKEN_HEADER_KEY = 'Authorization'; //for Spring Boot back-end, might need update
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    // intercept() gets HTTPRequest object, change it and forward to HttpHandler object’s handle() method.
    // It transforms HTTPRequest object into an Observable<HttpEvents>.
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token )});
        }
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];