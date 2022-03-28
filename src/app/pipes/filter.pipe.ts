import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../app.component';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: IPost[], search: string = ''): IPost[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter((post) => {
      const title = post.title.toLowerCase();
      const text = post.text.toLowerCase();

      return title.includes(search.toLowerCase()) || text.includes(search.toLowerCase());
    });
  }

}
