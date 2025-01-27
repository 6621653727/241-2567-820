/*
// String, Number, Boolean, Object , Array 
// String - ตัวอักษร 
let firstname = 'John'; 
const idcard = '110370'; 
// Number - ตัวเลข 
let age = 30; 
let height = 180.5; 
/l/ Boolean - ค่าที่เป็นจริงหรือเท็จ 
let isSingle = true; 

firstname = 'Jane'; 
idcard = '1234' ; 
console.log('Name: ',firstname,/
'Age:', age, );

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ (MOD)


 == เท่ากับ
 ! = ไม่เท่ากับ 
> มากกว่า 
< น้อยกว่า 
>= น้อยกว่าหรือเท่ากับ 
<= มากกว่าหรือเท่ากับ 
 

let number1 = 5 
let number2 = 5 

let result = number1 >= number2 // Boolean ค่าที่ได้จะเป็น true หรือ false 
console. log('new number" result)

/*
let number1 = 5
let number2 = 5

if (number1 != number2) {
    console.log('this is if')
} else if (number1 == number2){
    console.log('this is else if')
} else {
    console.log('this is else')
}
*/
/*
let score = prompt("Enter your score:");
console.log('you have score',score);

if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70){
    console.log("Grade B")
} else if (score >= 60){
    console.log("Grade C")
} else if (score >= 50){
    console.log("Grade D")
} else {
    console.log("Grade F")
}
    

&& และ 
ll หรือ
! not หรือ ไม่


let number1 = 5
let number2 = 8
//true && false =false 
// true || false = !()
let condition = !(number1 >= 3 || number2 >= 10)
console.log('result of condition',condition)

let age = 30
let gender = 'male'
//true && true = tue
if (age >= 20 && gender == 'male') {
    console.log('You are male adult')
}

//==================================================================
let number = 20
if (!(number % 2 == 0)){
    console.log('your number is even')
}
//==================================================================
while
for
//==================================================================

let counter = 0;
console.log('while');
while (counter < 10) { //true
    console.log(counter);
    counter ++;
}

//==================================================================

for (let counter = 0; counter < 10 ; counter = counter + 1){
    console.log('Hello');
}
//==================================================================
array


let age1 = 18;
let age2 = 19;
let age3 = 20;
console.log(age1, age2, age3);

let ages = [18, 19, 20];
console.log('age is',ages[2]);
console.log('age is ',ages);
//==================================================================
//1 แทนที่
ages = [21, 22];
console.log('new age is',ages);

//2 ต่อ array
ages.push(23);
console.log('age list ',ages);

ages.pop()
console.log('pop age list',ages);

let ages1 = [18, 13, 20];
console.log('age is ',ages1);
ages1.sort();
console.log('age is ',ages1);

let name_list = ['Draf', 'Shi', 'Daiki'];
name_list.push('Taka');
console.log('name_list is ',name_list.length);
console.log('name_list is ',name_list[0]);
console.log('name_list is ',name_list[1]);
console.log('name_list is ',name_list[2]);
console.log('name_list is ',name_list[3]);


for (let index = 0; index < name_list.length; index++){
    console.log('for name_list is',name_list[index]);
}

Object + array
*/
/*
let student = [{
    name: 'Draf',
    age: 30,
    grade: 'A'
},{
    name: 'Shi',
    age: 29,
    grade: 'B'
}];
student.pop()
console.log(student);
for (let index = 0; index < student.length; index++){
    console.log('Student number',index + 1);
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);

}

/*

console.log('age',student.age);
console.log('name',student.name);
console.log('grade',student.grade);
/*
let age = 30;
let name = 'Draf';
let grade = 'A';

*/
/*
let score1 = 50
let score2 = 60
let grade = ''
// ประกาศ function ชื่อ calculateGrade รับ score เป็น parameter
function calculateGrade(score){
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70){
        grade = 'B'
    } else if (score >= 60){
        grade = 'C'
    } else if (score >= 50){
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}
*/
/*
//arrow funtion
let score1 = 50
let score2 = 60
let grade = ''

let calculateGrade = (scores) => {
    if (scores >= 80) {
        grade = 'A'
    } else if (scores >= 70){
        grade = 'B'
    } else if (scores >= 60){
        grade = 'C'
    } else if (scores >= 50){
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}
// เรียกใช้ function โดยส้งค่า score1 และ score2 เข้าไป
let grade1 = calculateGrade(score1);
let grade2 = calculateGrade(score2);
//แสดงผลลัพธ์
console.log('grade1:',grade1)
console.log('grade2:',grade2)
/*
if (score >= 80) {
    grade = 'A'
} else if (score >= 70){
    grade = 'B'
} else if (score >= 60){
    grade = 'C'
} else if (score >= 50){
    grade = 'D'
} else {
    grade = 'F'
}
*/

/*
array
====================================================================
*/
/*
let score = [10,20,30,40,50];

for (let index = 0; index < score.length; index++){
    console.log(score[index]);
}

score[0] = score[0] * 2;
score[1] = score[1] * 2;
score[2] = score[2] * 2;
score[3] = score[3] * 2;
score[4] = score[4] * 2;

score=score.map((s) => {
    return s * 2;
})
score.forEach((s) => {
    console.log('score',s);
});
*/
//====================================================================
/*
let score = [10,20,30,40];
let newScore = []

for (let index = 0; index < score.length; index++){
console.log('score:',score[index]);
if (score[index] >= 30){
    newScore.push(score[index]);
}
}
console.log('newScore:',newScore);
newScore.forEach((ns) => {
    console.log('newScore:',ns);
});
/*
//====================================================================
let students = [
    {
        name: 'Draf',
        score: 50,
        grade: 'A'
    },{
        name: 'Shi',
        score: 60,
        grade: 'B'
    }
]
let student = students.find((s) => {
    if (s.name == 'Draf') {
        return true;
    }
});
let doublescore = students.map((s) => {
    score = s.score * 2;
    return s;
      }  )
console.log('student:',student);
console.log('doublescore:',doublescore);
*/
