import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  get isUserLocationready() {
    return this.placesService.isUserLocationReady;
  }

  constructor( private placesService: PlacesService ) { }


 

}
