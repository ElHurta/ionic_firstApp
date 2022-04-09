import { Component, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";


@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage  {

  data: any[] = Array(30);

  @ViewChild(IonInfiniteScroll) infiniteScroll : IonInfiniteScroll;

  constructor() { }

  loadData() {

    if( this.data.length > 50){
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    
    setTimeout(() => {

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();
    }, 1500)
  }

}
