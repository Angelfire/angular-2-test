import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageHeight'
})

export class ImageHeight implements PipeTransform {
  transform(value:string, newSize:number) {
    const img = new Image();
    img.src = value;

    const imgWidth = img.width;

    const newH = imgWidth + newSize;

    return img.style.height = newH.toString();
  }
}
