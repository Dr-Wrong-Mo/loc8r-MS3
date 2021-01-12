import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public pageContent = {
    header: {
      title: 'About Loc8r',
      strapline: '',
    },
    content:
      'Loc8r was created to help people find 	places 	to sit down and get a bit of work done.\n\nLorem ipsum 	dolor sit amet, consectetur 	adipiscing elit. Mollit eiusmod eu qui amet cillum consequat esse in sunt irure. Ad irure nostrud nostrud ullamco tempor ut voluptate cupidatat consequat dolore Lorem elit cupidatat laborum. Ipsum laboris do aliquip magna elit amet voluptate aute eu dolore dolore. \n\nEt pariatur reprehenderit elit non consequat minim. Nostrud non elit qui laboris. Cupidatat esse consequat et nisi deserunt reprehenderit qui velit laborum culpa voluptate pariatur nulla voluptate. Officia aliqua id et id. Mollit excepteur labore eu deserunt sint consequat veniam proident qui. Aliquip irure eu enim ex excepteur dolore esse anim ea veniam veniam. \n\nTempor anim veniam ex quis eu deserunt elit magna commodo fugiat. Velit non cillum reprehenderit ex reprehenderit quis non reprehenderit duis dolor. Laborum et nisi quis id irure dolore culpa exercitation occaecat deserunt. Deserunt ut ad nulla fugiat quis quis aute magna id pariatur. Sunt duis nostrud labore consectetur proident tempor ullamco Lorem nostrud ut enim officia exercitation duis. Cillum ex irure aliqua sunt incididunt pariatur ipsum occaecat. \n\nEsse elit culpa enim duis duis deserunt cillum eu.',
  };
}
