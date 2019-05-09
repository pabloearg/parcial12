import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductoService } from '../producto.service';
import { MostrarProductoComponent } from '../mostrar-producto/mostrar-producto.component';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {
  // @Input() producto: string;
  // @Output() onClick = new EventEmitter<any>();

  @Output() buscar = new EventEmitter<any>();

  miProductoServicio: ProductoService;
  mostrarProducto: MostrarProductoComponent;
  producto : string = '';
  constructor(serviceProducto: ProductoService) { 
    this.miProductoServicio = serviceProducto;
  }

  ngOnInit() {
  }

  public onClickButton() {
    console.log("producto: " + this.producto);
    this.miProductoServicio.buscar('productos/', this.producto).then(data => {
      if(data.status == 500){
        console.log('nada');
      }
      else{
        //emite la data para el app-component para que se pueda mostrar en el app-mostrar-prodcuto
        this.buscar.emit(data); 
      }
    });
  }
}
