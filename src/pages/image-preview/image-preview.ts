import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ImagePreview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image-preview',
  templateUrl: 'image-preview.html'
})
export class ImagePreviewPage {
  public imagePath: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.imagePath = navParams.get('imagePath');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePreviewPage');
  }

}
