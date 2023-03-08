import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['Asude.jpg', 'Grieß.jpg', 'Lchstatar.jpg', 'Schoki.jpg'];
  headline = [
    'Bring Engineering to the next level',
    'Born to Code',
    'Codex',
    'Coding Masterclass'
  ];

  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImg();
  }

  updateImg() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
