import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiURL = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient){}

  obtenerProductos(){
    return this.http.get(this.apiURL);
  }

}