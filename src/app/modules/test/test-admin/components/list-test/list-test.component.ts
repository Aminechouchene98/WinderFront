import { Component, OnInit } from '@angular/core';
import { Test } from '../../../test';
import { TestService } from '../../../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/modules/question/question';
import { Option } from 'src/app/modules/option/option';

@Component({
  selector: 'winder-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.scss']
})
export class ListTestComponent implements OnInit {
  tests: Test[] = [];
  test1!: Test;
  layout: string = 'list';
  questions: Question[] = [];
  test_id!: number;
  question_id!: number;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private testService: TestService){
    }
    
  ngOnInit(): void {
    
    this.retrieveTests();
  }
  visible!: boolean;

  showDialog() {
    this.test_id = +Number(this.route.snapshot.paramMap.get('test_id'));
      this.visible = true;
      this.testService.retrieveTest(this.test_id).subscribe((response: Test) => {
        this.test1 = response;
        });
  }

  public retrieveTests(): void {
    this.testService.getTests().subscribe((response: Test[]) => {
      this.tests = response;
      console.log(this.tests);
      });
}

testDetails(test_id: number){
  this.router.navigate(['test-details', test_id]);
}

updateTest(test_id: number){
  this.router.navigate(['/tests/update-test', test_id]);
}

deleteTest(test_id: number){
  this.testService.deleteTest(test_id).subscribe( data => {
    console.log(data);
    this.retrieveTests();
  })
}



}
