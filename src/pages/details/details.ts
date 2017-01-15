import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitHubService } from '../../providers/github-service';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [GitHubService],
})
export class DetailsPage {
	public readme: string = '';
	public repo;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private gitHubService: GitHubService) {

  	this.repo = navParams.get('repo');
  	this.gitHubService.getRepoDetails(this.repo).subscribe(
  		data => this.readme = data.text(),
  		err => {
  			console.error(err);
  			if(err.status == 404) {
  				this.readme = 'This repo does not have a README';
  			}
  		},
  		() => console.log('Repository details get completed'),
  	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
