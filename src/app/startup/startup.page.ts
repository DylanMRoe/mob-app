import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.page.html',
  styleUrls: ['./startup.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StartupPage implements OnInit {

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
    this.ds.set("Unit", "Metric");
    this.pageSetUp();
  }

  ionViewWillEnter(){
    this.animation();
  }

  async animation(){
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));


    for(let i = 0; i < 51; i+=1){
      document.getElementById("startLogo")?.replaceWith(this.draw(i));
      console.log(i);
      await delay(100);
    }

    this.router.navigate(['/home']);
  }

  pageSetUp(){
    document.getElementById("contain")?.appendChild(this.draw(0));
  }

  draw(angle: number){
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.id = "startLogo";
    canvas.width = 70;
    canvas.height = 70;
    const ctx = canvas.getContext('2d')!;
    

      // Define the circle's properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 30;

        // Draw the full circle outline
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, angle, angle + Math.PI * 2, false);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    //ctx.translate( canvas.width/2, canvas.height/2 );
    //ctx.rotate(angle * Math.PI / 180);

        // Draw the half-filled part
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, angle, angle + Math.PI, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();

    return canvas;
  }
}
