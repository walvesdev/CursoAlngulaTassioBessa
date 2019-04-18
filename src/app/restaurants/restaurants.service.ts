import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ManipladorErros } from '../app.error-handler';


@Injectable()
export class RestauratsService {


    constructor(private http: HttpClient) { }

    GetRestaurants(): Observable<Restaurant[]> {

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
            .pipe(
                catchError(ManipladorErros.CapturaErro)
            );;


    }
}

