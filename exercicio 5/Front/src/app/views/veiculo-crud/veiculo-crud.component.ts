import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-veiculo-crud',
  templateUrl: './veiculo-crud.component.html',
  styleUrls: ['./veiculo-crud.component.css']
})
export class VeiculoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Veiculos',
      icon: 'storefront',
      routeUrl: '/veiculo'
    }
  }


  ngOnInit(): void {

  }

  navigateToUserCreate() {
    this.router.navigate(['veiculo/create/'])
  }

}
