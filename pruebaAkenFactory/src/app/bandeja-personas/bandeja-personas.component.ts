import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-bandeja-personas',
  templateUrl: './bandeja-personas.component.html',
  styleUrls: ['./bandeja-personas.component.scss']
})
export class BandejaPersonasComponent implements OnInit {
  public personas: Persona[] = [];
  displayedColumns: string[] = ['Nombres', 'Apellidos', 'Edad', 'No.Identificación', 'Correo', 'Opciones'];

  constructor(private PersonaService: PersonaService) { }

  ngOnInit(): void {
    this.obtenerListaPersonas();
  }

  private obtenerListaPersonas() {
    this.PersonaService.obtenerListadoPersonas().then(res => {
      this.personas = res;
    }).catch((error) => {
      console.error('Error obteniendo lista de personas ',error);
    });
  }
}

