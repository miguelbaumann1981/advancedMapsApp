import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor( private placesService: PlacesService, private mapService: MapService ) { }

  ngAfterViewInit(): void {
    console.log(this.placesService.userLocation);

    if (!this.placesService.userLocation) throw Error('No hay placesLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, 
      style: 'mapbox://styles/mapbox/light-v10',
      center: this.placesService.userLocation, 
      zoom: 14
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);
    
    new Marker({color: 'red'})
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo(map);
    
    this.mapService.setMap(map);

  }

}
