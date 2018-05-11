import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: string="";

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, 
              private inAppBrowser: InAppBrowser) {

  }

  scan()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      // TODO: capturar informação do QRCode lido através de 'barcodeData.txt' para
      // pedir para a api informações necessárisa par exibir o menu ao usuário.

      // Temporário: abrir menu(cardápio) em um site externo.
      this.openWebPageUrl(barcodeData.text);

     }).catch(err => {
         // TODO: tratar erro ao ler QRCode
     });
  }

  openWebPageUrl(url: string)
  {
    const options: InAppBrowserOptions = { zoom: 'no', location: 'no'}

    // abre uma URL e retorna um InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);
  }

}
