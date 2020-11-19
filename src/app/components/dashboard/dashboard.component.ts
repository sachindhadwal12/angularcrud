import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from '../../service/student.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errMessage:string;
  std: Student;
  StdList:Array<Student>;
  constructor(private stdService: StudentService) {
    this.std = new Student();
   }

  ngOnInit(): void {
   this.stdService.getStudentData().subscribe(resp =>{
     console.log(resp);
     this.StdList = resp;

   },err =>{
    this.errMessage = err.message;
  })

  }
  deleteRecord(id){
   this.stdService.deleteStudent(id).subscribe(resp =>{
     alert('Data Deleted');
      this.ngOnInit()

  });


  }


}
