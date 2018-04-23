import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  scannedData:any={};

  constructor(public navCtrl: NavController, public scanner:BarcodeScanner) {

  }

  scan()
  {
    this.options= {
      prompt: 'Scan you barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;      
    }, (err) => {
      console.log("ERROR: ", err);
    });
  }

}
