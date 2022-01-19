import { Component, OnInit } from '@angular/core';
import { Student} from 'src/app/interfaces/student'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mytitle :string = 'In Memory CRUD'
  choice :boolean = true
  mylist :Student[] = []
  name : string = ''
  age: number = 0
  id?: number


  getStudentId(): number{
    return (this.mylist).length + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }


  handleChange(e: any , field: number) {
    field == 0 ? this.name = e.target.value : this.age = e.target.value;
  }

  addStudent(choice : boolean) {
    if(choice)
    {
      let id = this.getStudentId();
      let s = new Student(id , this.name ,this.age);
      this.mylist.push(s);
    }else{
      let indexTargetStudent = this.mylist.findIndex(
        (items => items.id == this.id)
      )
      let targetStudent = this.mylist[indexTargetStudent]
      targetStudent.name = this.name;
      targetStudent.age = this.age;
      this.choice = true
    }

  }

  handleDelete(id: any) {
    let tmp = this.mylist.filter(item => item.id !== id);
    this.mylist = tmp;
  }

  handleUpdate(student: any) {
    this.choice = false;
    this.id = student.id;
    this.name = student.name;
    this.age = student.age;
  }
}
