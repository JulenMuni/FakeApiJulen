import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkewerdbService } from '../core/skewerdbservice.service';
import { ISkewer } from '../core/interfaces';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  [x: string]: any;
  id: string;
  public skewer: ISkewer;
  constructor(
    private activatedrouter: ActivatedRoute,
    private router: Router,
    private skewerdbService: SkewerdbService,
    public toastController: ToastController
  ) { }
  ngOnInit() {
    this.id = this.activatedrouter.snapshot.params.id;
    this.skewerdbService.getItem(this.id).then(
      (data: ISkewer) => this.skewer = data
    );
  }

  editRecord(skewer) {
    this.router.navigate(['edit', skewer.id])
  }
  async removeRecord(id) {
    const toast = await this.toastController.create({
      header: 'Elimiar brocheta',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'delete',
          text: 'ACEPTAR',
          handler: () => {
            this.skewerdbService.remove(id);
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
}
