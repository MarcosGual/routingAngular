import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  param: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // url?param1=valor;param2=valor
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.param = params['param1'];
      } 
    })
  }

  navegarComponente() {
    this.router.navigate(['primero', 1]);
  }

}
