import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia : string='';


  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  sendOnomatopiaToParent : EventEmitter<string> = new EventEmitter<string>();

  createOnomatopia(){
    console.log ('Méthode createOnomatopia - champ saisi :' + this.newOnomatopia);
    this.sendOnomatopiaToParent .emit(this.newOnomatopia);
    this.newOnomatopia = '';
  }

}
