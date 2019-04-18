import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestauratsService } from './restaurants.service';


@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

    restaurants: Restaurant[];

    constructor(private restaurantService: RestauratsService) { }

    ngOnInit() {
        this.restaurantService.GetRestaurants()
            .subscribe(
                (restaurants: Restaurant[]) => { this.restaurants = restaurants },
            )

    }

}

