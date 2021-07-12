import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Veiculo } from './veiculo.model'
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class VeiculoService {
    baseUrl = "http://localhost:3000/veiculos";
    baseUrlBuscar = "http://localhost:3000/buscarveiculos";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "bottom",
            panelClass: isError ? ['msg-error'] : ['msg-success']

        })
    }

    post(veiculo: Veiculo): Observable<Veiculo> {
        return this.http.post<Veiculo>(this.baseUrl, veiculo).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }


    get(): Observable<Veiculo[]> {
        return this.http.get<Veiculo[]>(this.baseUrl).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    getById(id: string): Observable<Veiculo> {
        return this.http.get<Veiculo>(`${this.baseUrl}/${id}`).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    find(key: string, value: string): Observable<Veiculo[]> {
        return this.http.get<Veiculo>(`${this.baseUrlBuscar}?key=${key}&value=${value}`).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    put(veiculo: Veiculo, id: string): Observable<Veiculo> {
        return this.http.put<Veiculo>(`${this.baseUrl}/${id}`, veiculo).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    delete(id: number): Observable<Veiculo> {
        return this.http.delete<Veiculo>(`${this.baseUrl}/${id}`).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro!", true)
        return EMPTY;
    }
}