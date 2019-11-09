import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-admi',
  templateUrl: './map-admi.component.html',
  styleUrls: ['./map-admi.component.css']
})
export class MapAdmiComponent implements OnInit {

  ngOnInit(): void {

    mapboxgl.accessToken = 'pk.eyJ1Ijoia3A1NSIsImEiOiJjazJhbXh4dnc0YWdjM2hwaWNna3lqdGRxIn0.OBW6C9mPzuHiFrRPi8goRA';
    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [ -66.15212129402629, -17.37154714386476], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([-66.15212129402629, -17.37154714386476])
      .addTo(map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      map.coordinates.style.display = 'block';
      map.coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      }

    marker.on('dragend', onDragEnd);

  }

}
