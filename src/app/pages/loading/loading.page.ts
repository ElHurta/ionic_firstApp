import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loadingCom: HTMLIonLoadingElement;

  constructor(public loadingCtrl: LoadingController) {  }

  ngOnInit() {
  }

  showLoading() {
    this.presentLoading();
    setTimeout(() => {
      this.loadingCom.dismiss();

    }, 2000);
  }
  
  async presentLoading() {
    this.loadingCom = await this.loadingCtrl.create({
      message: 'Espere un momento...',
    });
    return await this.loadingCom.present();
  }
    
}
