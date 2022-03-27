import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})

export class MultiplyByPipe implements PipeTransform {
  transform(value: number, pow: number = 2): number {
    return value * pow;
  }

}
