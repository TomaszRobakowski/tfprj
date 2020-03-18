import { Component, OnInit, Input, ErrorHandler, } from '@angular/core';
import { GitsearchserviceService } from '../services/gitsearchservice.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})


export class MainComponent implements OnInit, ErrorHandler {

  @Input() user: string;

  repos: any;

  repositories: any;

  columns = [{width: '15%'}, {width: '15%'}, {width: '70%'}];

  constructor(private gitSearch: GitsearchserviceService, private router: Router ) { }

  handleError(error) {
    console.log(error);
    window.open('not_found', '_self');
 }

  ngOnInit(): void {
      this.gitSearch.getRepos(this.user).subscribe( (response) => {

        this.repositories = new Array();
        this.repos = response;

        if (response.items) {
          response.items.forEach(repo => {
            const branches = new Array();
            this.gitSearch.getBranches(repo.url).subscribe ( (branch) => {
              if (branch) {
                branches.push(branch);
              }

            });
            this.repositories.push({repo: repo, branches: branches});
          });
        }

        console.log(this.repositories);

      });

  }

}
