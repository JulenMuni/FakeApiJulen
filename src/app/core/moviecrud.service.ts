import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MoviecrudService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  create_Movie(record) {
    return this.firestore.collection('Skewers').add(record);
  }
  read_Movies() {
    return this.firestore.collection('Skewers').snapshotChanges();
  }
  update_Movie(recordID, record) {
    this.firestore.doc('Skewers/' + recordID).update(record);
  }
  delete_Movie(record_id) {
    this.firestore.doc('Skewers/' + record_id).delete();
  }
}
