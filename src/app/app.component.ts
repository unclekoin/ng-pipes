import { Component } from '@angular/core';

export interface IPost {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Pipes';

  public e: number = Math.E;
  public str: string = 'hello world';
  public date = new Date();
  public float: number = 0.35;
  public obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  // search

  public search = '';

  public posts: IPost[] = [
    {
      id: 1,
      title: 'Presenters',
      text: 'Rachel Ziegler, Halle Berry, Shawn Mendes, Kevin Costner, Lupita Nyong\'o, Tyler Perry, Chris Rock, Lily James, Lady Gaga, Jamie Lee Curtis, Samuel L. Jackson, Tiffany Haddish, Bill Murray, DJ Khaled, Tracee Ellis Ross and'
    },
    {
      id: 2,
      title: 'The nominees',
      text: 'The Power of the Dog" leads among nominated films with 12 nods. "Dune" has ten, while "West Side Story" and "Belfast" each have seven. For a refresher on all the nominees'
    },
    {
      id: 3,
      title: 'How to watch',
      text: 'The Academy Awards will broadcast live at 8 p.m. EST on ABC. You can also watch online at ABC.com, streaming options include YouTube TV and Hulu.'
    }
  ];
}
