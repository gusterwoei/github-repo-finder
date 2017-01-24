import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitHubService } from '../../providers/github-service';
import { LoadingController } from 'ionic-angular';
import { DetailsPage } from '../details/details'
import { ImagePreviewPage } from '../image-preview/image-preview'
import { Camera } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
     selector: 'page-home',
     templateUrl: 'home.html',
     providers: [GitHubService],
  })
  export class HomePage {
     public foundRepos;
     public username: string;
     public success: boolean = true;
     private form: FormGroup;

     constructor(
        public navCtrl: NavController, 
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public platform: Platform,
        private formBuilder: FormBuilder,
        private githubService: GitHubService) {

     }

     ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
     }

     ngOnInit() {
       this.form = this.formBuilder.group({
         username: ['', Validators.required]
       });
     }

     getRepos() {
        // show loading bar
        let loader = this.loadingCtrl.create({
           content: 'Please wait...'
        });
        loader.present();

        this.githubService.getRepos(this.username).subscribe(
           data => {
              this.foundRepos = data.json();
           },
           err => {
              console.error(err);
              this.success = false;
              loader.dismiss();
           },
           () => {
              console.log('getRepos completed');
              this.success = true;
              loader.dismiss();
           },
        );
     }

     goToDetails(repo) {
        this.navCtrl.push(DetailsPage, {
           repo: repo
        });
     }

     openCamera() {
       this.previewPicture('file:///Users/kellylu/Documents/Projects/aia/sales-builder/aia-ios-architecture.png');
       this.platform.ready().then(() => {
         Camera.getPicture().then(
           res => {
             console.log('Picture taken!');
             console.log(res);

            //  this.previewPicture(res);
           },
           err => {
             console.error('Unable to take picture, found error:', err);
           }
         );
       });
     }

     previewPicture(imagePath: string) {
       this.navCtrl.push(ImagePreviewPage, {
         imagePath: imagePath
       });
     }

  }
