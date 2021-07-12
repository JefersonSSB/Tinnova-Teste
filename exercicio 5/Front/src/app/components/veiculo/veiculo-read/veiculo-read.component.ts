import { Component, OnInit, ViewChild } from '@angular/core';
import { VeiculoService } from '../veiculo.service'
import { Veiculo } from '../veiculo.model'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculos: Veiculo[];
  displayedColumns = ['veiculo', 'marca', 'ano', 'descricao', 'vendido', 'action']
  dataSource = null;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private veiculoService: VeiculoService, private router: Router) { }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.veiculos);
    this.dataSource.sort = this.sort;
    this.veiculoService.get().subscribe(veiculos => {
      this.veiculos = veiculos;
      this.dataSource.data = veiculos;
      console.log(this.veiculos);
    })
  }

  deleteVeiculo(id) {
    this.veiculoService.delete(id).subscribe(() => {
      this.veiculoService.showMessage("Veiculo Deletado")
      this.ngOnInit();
    });
  }

  trasformaBooleano(bool) {
    if (bool == true) {
      return 'Sim'
    } else {
      return 'Não'
    }
  }
}
