import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit
  // ,OnDestroy
{

  param: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnDestroy(): void {
  //   alert('destruyendo primero component')
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.param = params['id'];
      } 
    })
  }

  navegarASegundo() {
    this.router.navigate(['segundo'], {
      queryParams: {
        param1: 'te llame desde el componente primero'
      }
    })
  }

}
