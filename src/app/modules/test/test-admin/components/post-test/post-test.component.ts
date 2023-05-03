import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { TestService } from '../../../test.service';
import { QuestionService } from 'src/app/modules/question/question.service';
import { Observable } from 'rxjs';
import { OptionService } from 'src/app/modules/option/Option.service';
import { Test } from '../../../test';
import { Question } from 'src/app/modules/question/question';

@Component({
  selector: 'winder-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.scss'],
  providers: [DialogService]
})
export class PostTestComponent implements OnInit{
  questions!: Observable<any>;
  text!: Question;
  constructor(private fb: FormBuilder, public dialogService: DialogService, private testService: TestService, private router: Router, private questionService: QuestionService) {}
  ngOnInit(): void {
    this.initPostForm();
    this.questions = this.questionService.getQuestions();
    this.questions.subscribe((res: any) => {
      console.log(res);
    });
  }

  stacks= [
    'angular',
    'react',
    'nest',
    'dino',
    'node',
    'java',
    'python',
    'c++',
    'c#',
    'c',
    'php',
    'ruby',
    'swift',
    'kotlin',
    'go',
    'rust',
    'scala',
    'sql',
    'nosql',
    'mongodb',
    'mysql',
    'postgresql',
    'oracle',
    'sqlite',
    'redis',
    'memcached',
    'cassandra',
    'docker',
    'kubernetes',
    'jenkins',
    'travis',
    'circleci',
    'git',
    'github',
    'bitbucket',
    'gitlab'
  ]; 

  levels =[
    'Beginner',
    'Intermediate',
    'Expert'
  ]

  initPostForm() {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      stack: ['', Validators.required],
      description: ['', Validators.required],
      level: ['', Validators.required],
      questions: ['', Validators.required],
      questions1: this.fb.array([])
    });
  }

  get questions1() {
    return (this.postForm.get('questions1') as FormArray).controls;
  }

   addQuestion() {  
    const question = this.fb.group({
      correct_option: ['', Validators.required],
      text: ['', Validators.required],
      options: this.fb.array([])
    }); 
    (this.postForm.get('questions1') as FormArray).push(question);
    
  }  

    removeQuestion(i:number){
      (this.postForm.get('questions1') as FormArray)
    }

    optionControls(questionIndex: number) {
      return (this.questions1[questionIndex].get('options') as FormArray)
        .controls;
    }

    addOption(question: FormGroup){
      const option = this.fb.group({
        text: ['', Validators.required]
      }); 
      (<FormArray>question.get('options')).push(option);
    
    }
  

    removeOption(questionIndex: number, i:number){
      (this.questions1[questionIndex].get('options') as FormArray).removeAt(i);
    }

    getOption(question: FormGroup, i: number): FormGroup {
      return (<FormArray>question.get('options')).controls[i] as FormGroup;
    }

  postForm!: FormGroup;
  step = 1;
  progress = 20;

  stepLabel = ['Title', 'Description', 'Stack', 'Level', 'Question', 'Review'];
  leftPanelHeader = [
    'Write a title for your new test',
    'Write a description for your test',
    'Next, choose the stack of your test.',
    'Choose the level of difficulty of your test.',
    'Last step, Add questions as well as their options to your test!'
  ];

  rightPanelHeader = ['What is the title of your new test?', 'Describe your test', 'What stack would your Test be about ?', 'Who is this meant for?', 'select your questions and options'];

  leftPanelContent = [
    '',
    '',
    '',
    ''
  ];
  formGroupNames = ['name', 'description', 'stack', 'level', 'questions'];

  setStepForward() {
    this.step++;
    this.progress = this.progress + 20;
  }

  setStepBack() {
    this.step--;
    this.progress = this.progress - 20;
  }
  isMessageTooShort() {
    return this.postForm.controls['description'].value.length < 50;
  }


  onSubmit() {
    const test: Test = this.postForm.value;
    console.log(test);
  }

 
  postTest() {
    const body = {
      test_id: 0,
      name: this.postForm.controls['name'].value,
      description: this.postForm.controls['description'].value,
      stack: this.postForm.controls['stack'].value,
      level: this.postForm.controls['level'].value,
      questions: this.postForm.controls['questions'].value
    };
    console.log(body);
    this.testService.addTest(body).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/tests/add-test']);
    });
  }
}
