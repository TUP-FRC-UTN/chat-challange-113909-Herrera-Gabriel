import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
  @Input() usuario: string = '';
  @Output() nuevoMensaje = new EventEmitter<string>(); 
  mensaje: string = '';

  enviarMensaje() {
    this.nuevoMensaje.emit(`${this.usuario}: ${this.mensaje}`); 
    this.mensaje = ''; 
  }
}
