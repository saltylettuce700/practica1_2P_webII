import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-producto', 
  imports: [CommonModule, HttpClientModule],
  standalone : true,
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

  productos : any[]=[];

  constructor(private productoService : ProductoService){}

  ngOnInit(): void {
      this.productoService.obtenerProductos().subscribe(data => {
        this.productos = data as any[];
      });
  }


}