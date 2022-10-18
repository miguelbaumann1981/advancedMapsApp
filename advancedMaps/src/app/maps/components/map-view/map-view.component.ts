import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor( private placesService: PlacesService ) { }

  ngAfterViewInit(): void {
    console.log(this.placesService.userLocation);

    if (!this.placesService.userLocation) throw Error('No hay placesLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, 
      style: 'mapbox://styles/mapbox/light-v10',
      center: this.placesService.userLocation, 
      zoom: 12
      });
  }

}
