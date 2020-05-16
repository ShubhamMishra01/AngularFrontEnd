
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from '../models/center';
import { CenterService } from '../center.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  centers : Center[];
  constructor(private router: Router, private centerService: CenterService) { }

  ngOnInit(): void {
    this.centerService.getCenterId().subscribe(data =>this.centers=data);

  }

  handleSuccessfulResponse(response) {
    this.centers = response;
  }
  delete(center:Center): any {
    this.centerService.delete(center.centerId).subscribe(
      data => {
       
      alert("Deleted Successfully")
      }
    );
    this.router.navigate(['/delete'])

}
}