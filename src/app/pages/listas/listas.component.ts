import { Component } from '@angular/core';
import { Tarea } from '../../domain/Tarea';
import { FormsModule } from '@angular/forms';
import { FireStoreService } from '../../services/fire-store.service';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent {
  tarea: Tarea = new Tarea()
  listas: any;

  constructor(private fireStoreService: FireStoreService){}

  ngOnInit() {
    this.fireStoreService.getTarea().then(data=> {
      this.listas = data.docs.map((doc:any)=>{
        console.log(doc.descripcion);
        return{
          id: doc.id,
          ... doc.data()        
        }
      });
     
    }
    );
    }

  guardar(){
    this.fireStoreService.save(this.tarea)
  }


}
