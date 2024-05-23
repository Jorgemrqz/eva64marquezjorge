import { Injectable, Query } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, query } from '@angular/fire/firestore';
import { Tarea } from '../domain/Tarea';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: Firestore) { }

  save(tarea: Tarea){
    addDoc(collection(this.fireStore,'Tareas'),Object.assign({},tarea))
  }
  getTarea(){
    return getDocs(query(collection(this.fireStore, 'Tareas')))
  }

  delete(tarea: Tarea){
   
  }

  
}
