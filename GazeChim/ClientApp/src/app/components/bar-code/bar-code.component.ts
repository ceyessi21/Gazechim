import { Component, ViewChild, OnInit  } from '@angular/core';
import { BarcodeScanner, ScanResult } from '@capacitor-community/barcode-scanner';
import {NativeAudio} from '@capacitor-community/native-audio';
import  { TimeElement, Object } from '../interfaces.model'

@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.scss']
})

export class BarCodeComponent {

  barCodeList: string[] = [];
  listTimeElements: TimeElement[] = [
    { title : "Emetteur", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : true},
    { title : "Transporteur", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : true},
    { title : "Destinataire", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : false},
    { title : "Destinataire", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : false},
   ];

   object : Object[]= [
    { label: 'Raison Sociale', value: 'Etablissement de test' },
    { label: 'Siret', value: '0000000000012980' },
    { label: 'N° TVA', value: '1234567890123' },
    { label: 'Adresse', value: '1 Avenue des roches, 13001 Marseille' },
    { label: 'Téléphone', value: '0412345678' },
    { label: 'E-mail', value: 'exemple@email.fr' },
    { label: 'Contact', value: 'DUPONT Paul' },
    { label: 'Conditionnement', value: 'BOUTEILLE 1234 (2kg)' },
    { label: 'Poids total', value: '2kg' },
  ];

  //initialiser les variables globales
  init(){
    this.barCodeList = [];
    this.scanActive = false;
  }

  scanActive: boolean = false;
  //confirmDoublonValue: boolean = false;

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startscanner() {
    this.init();
    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();
      this.scanner();
    } else {
      alert('NOT ALLOWED!');
    }
  }

  async scanner(){
    const result = await BarcodeScanner.startScan();
      if(result.hasContent && result?.content){
         this.beep();
        // //this.barCodeList.push(JSON.stringify(result));
        // if(this.barCodeList.includes(result.content)){
        //     this.confirmDoublon();
        //     if(this.confirmDoublonValue){
        //       this.barCodeList.push(result.content);
        //     }

        // }else{

          this.barCodeList.push(result.content);
        // }

        this.scanner();
      }
  }

  beep() {
    //chargement du fichier
    NativeAudio.preload({
      assetId: "scan",
      assetPath: "scan.mp3",
      isUrl: false
    });
    //BIP
    NativeAudio.play({assetId:'scan', time:0.0})
  }


  // confirmDoublon = async () => {
  //     const { value } = await Dialog.confirm({
  //       title: 'Confirm',
  //       message: 'Ce Code-barre a déjà été scanné',
  //       okButtonTitle: 'AJOUTER',
  //       cancelButtonTitle: 'ANNULER'
  //     });
  //     this.confirmDoublonValue = value;
  // }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
    //this.init();
  }

}


