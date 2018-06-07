import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Leaflet from "leaflet";
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html'
})
export class LeafletView {

  //private _currentLatLng: any;
  private _map: any;

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap(){
  
    this._map = Leaflet.map("image-map", {
      minZoom: 10,
      maxZoom: 15,
      center: [0, 0],
      zoom: 10,
      crs: Leaflet.CRS.Simple
    });

    //dimensions of the image
    let w = 3000,
        h = 2500;
    //  Leaflet.tileLayer('https://nmaahc.si.edu/sites/default/files/styles/image_caption/public/images/captioned/{z}/{x}/{y}/l4-900px_11-2.png?itok=4oFfcK-M', {
    //   attribution : 'Map Sample',
    // }).addTo(this._map)
     let url = 'https://firebasestorage.googleapis.com/v0/b/nmaahc-df439.appspot.com/o/maps%2F3RX6gNFlwVRuuwcnNfw0DTbMhNt2_1473795412224_NMMAHC_FloorC2_v3.png?alt=media&token=f71de1de-abf4-421d-952e-2bd4dcfa709e';
    
    let southWest = this._map.unproject([0, h], this._map.getMaxZoom());
    let northEast = this._map.unproject([w,0], this._map.getMaxZoom());
    //var bounds : any = [[0,0], [w,h]];
    let bounds = Leaflet.latLngBounds(southWest, northEast);

   
    Leaflet.imageOverlay(url, bounds).addTo(this._map);

    this._map.setMaxBounds(bounds);
    //this._map.fitBounds(bounds);


    //     var map = L.map('image-map', {
    //   minZoom: 1,
    //   maxZoom: 4,
    //   center: [0, 0],
    //   zoom: 1,
    //   crs: L.CRS.Simple
    // });
    // // dimensions of the image
    // var w = 2000,
    //     h = 1500,
    //     url = 'http://kempe.net/images/newspaper-big.jpg';
    // // calculate the edges of the image, in coordinate space
    // var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    // var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
    // var bounds = new L.LatLngBounds(southWest, northEast);
    // // add the image overlay, 
    // // so that it covers the entire map
    // L.imageOverlay(url, bounds).addTo(map);
    // // tell leaflet that the map is exactly as big as the image
    // map.setMaxBounds(bounds);
  }

}
