import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitHubService } from '../../providers/github-service';
import { LoadingController } from 'ionic-angular';
import { DetailsPage } from '../details/details'

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

     constructor(
        public navCtrl: NavController, 
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        private githubService: GitHubService) {

     }

     ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
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

  }
