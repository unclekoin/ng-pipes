import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: string, search: string = ''): string {
    if (!search) {return value;}
    const re = new RegExp(search, 'gi');
    return value.replace(re, '<span class="bg-warning bg-opacity-50">$&</span>');
  }

}
