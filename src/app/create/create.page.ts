import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SkewerdbService } from '../core/skewerdbService.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ISkewer } from '../core/interfaces';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  skewer: ISkewer;
  skewerForm: FormGroup;
  constructor(
    private router: Router,
    // private skewerdbService: SkewerdbService,
    public toastController: ToastController
  ) { }
  ngOnInit() {
    this.skewerForm = new FormGroup({
      name: new FormControl(''),
      ingredientes: new FormControl(''),
      calorias: new FormControl(''),
      cover: new FormControl(''),
      description: new FormControl(''),
    });
  }
  async onSubmit() {
    const toast = await this.toastController.create({
      header: 'Guardar brocheta',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'save',
          text: 'ACEPTAR',
          handler: () => {
            this.saveSkewer();
            this.router.navigate(['home']);
          }
        }, {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  saveSkewer() {
    this.skewer = this.skewerForm.value;
    let nextKey = this.skewer.name.trim();
    this.skewer.id = nextKey;
    // this.skewerdbService.setItem(nextKey, this.skewer);
    console.warn(this.skewerForm.value);
  }
}
