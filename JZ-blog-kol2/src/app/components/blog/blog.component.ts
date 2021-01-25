import { Component, Input, OnInit } from '@angular/core';
import {JZDataService} from "../../jz-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public items$: any;
  @Input() image: string;
  @Input() text!: string;
  @Input() id!: number;

  constructor(private service: JZDataService, private route: ActivatedRoute) { }

  ngOnInit()
  {
      this.getAll();
  }
  getAll() {
      this.service.getAll().subscribe(response =>
      {
        this.items$ = response;
      });
      }

}
