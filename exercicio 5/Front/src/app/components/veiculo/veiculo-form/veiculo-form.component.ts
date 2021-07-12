import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Veiculo } from '../veiculo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  formulario: FormGroup;
  veiculo: Veiculo;
  id!: string;
  isAddMode!: boolean;
  VeiculoId: string;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private veiculoService: VeiculoService, private router: Router) {


  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.formulario = this.formBuilder.group({
      id: [''],
      veiculo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', Validators.required],
      descricao: ['', Validators.required],
      vendido: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.veiculoService.getById(this.id)
        .subscribe(x => this.formulario.patchValue(x));
    }
  }


  createVeiculo(): void {

    if (this.formulario.valid) {

      if (this.isAddMode) {
        this.veiculoService.post(this.formulario.value).subscribe(() => {
          this.veiculoService.showMessage("Veiculo inserido")
          this.router.navigate(['/veiculo'])
        });

      } else {
        this.veiculoService.put(this.formulario.value, this.id).subscribe(() => {
          this.veiculoService.showMessage("Veiculo Alterado")
          this.router.navigate(['/veiculo'])
        });
      }

    } else {

      this.formulario.markAllAsTouched();

    }


  }

  cancel(): void {

    this.router.navigate(['/veiculo'])

  }

}
