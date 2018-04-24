import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:string="";

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  scan()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
