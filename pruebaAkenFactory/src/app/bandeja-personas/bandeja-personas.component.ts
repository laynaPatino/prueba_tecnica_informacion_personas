import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-bandeja-personas',
  templateUrl: './bandeja-personas.component.html',
  styleUrls: ['./bandeja-personas.component.scss']
})
export class BandejaPersonasComponent implements OnInit {
  public personas: Persona[] = [];
  displayedColumns: string[] = ['Nombres', 'Apellidos', 'Edad', 'No.Identificación', 'Correo','Opciones'];

  constructor() { }

  ngOnInit(): void {
  }

}
