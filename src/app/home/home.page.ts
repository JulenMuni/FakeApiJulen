import { Component, OnInit } from '@angular/core';
import { MoviecrudService } from './../core/moviecrud.service';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    skewers: any;
    name: string;
    ingredientes: string;
    calorias: string;
    cover: string;
    description: string;;
    constructor(private moviecrudService: MoviecrudService) { }
    ngOnInit() {
        this.moviecrudService.read_Movies().subscribe(data => {
            this.skewers = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    name: e.payload.doc.data()['name'],
                    ingredientes: e.payload.doc.data()['ingredientes'],
                    calorias: e.payload.doc.data()['calorias'],
                    cover: e.payload.doc.data()['cover'],
                    description: e.payload.doc.data()['description']
                };
            })
            console.log(this.skewers);
        });
    }
    CreateRecord() {
        let record = {};
        record['name'] = this.name;
        record['ingredientes'] = this.ingredientes;
        record['calorias'] = this.calorias;
        record['cover'] = this.cover;
        record['description'] = this.description;
        this.moviecrudService.create_Movie(record).then(resp => {
            this.name = "";
            this.ingredientes = "";
            this.calorias = "";
            this.cover = "";
            this.description = "";
            console.log(resp);
        })
            .catch(error => {
                console.log(error);
            });
    }
    RemoveRecord(rowID) {
        this.moviecrudService.delete_Movie(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditName = record.name;
        record.EditIngredientes = record.ingredientes;
        record.EditCalorias = record.calorias;
        record.EditCover = record.Cover;
        record.EditDescription = record.Description;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['name'] = recordRow.EditName;
        record['ingredientes'] = recordRow.EditIngredientes;
        record['calorias'] = recordRow.EditCalorias;
        record['cover'] = recordRow.EditCover;
        record['descrition'] = recordRow.EditDescription;
        this.moviecrudService.update_Movie(recordRow.id, record);
        recordRow.isEdit = false;
    }
}
