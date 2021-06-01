import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()

export class HttpHeaderInterceptor implements HttpInterceptor{
    constructor() {}
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "x-rapidapi-key": "ee9fbbe309msh996d30c5a307367p18155djsn4122abe8a3b8",
	            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            },
            setParams: {
                // key: 'e40e743af2c94b0c916a8aa618fb4473',
                key: '79fd43aa82c544e39fd3c8db944dd23c'
            }
        });
        return next.handle(req);
    }
}