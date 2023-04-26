export enum Gender{
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}



export interface User {

  userName:string;
  nom:string;
  prenom:string;
  password:string;
  email:string;
  fileName:string;
  gender:Gender;
  phoneNumber:number;
  token: string;
}
