const string1 = "Hello"
const string2 = 'Hello'
const string3 = `Hello ${string1} ?!` 
// 템플릿 리터럴  (어떤 기호를 통해 데이터를 만들어냄)

const number = -123

console.log(number +1)

const num1 = 0.1 
const num2 = 0.2 
// 부동소수점 문제로 그냥 더하면 0.300000000004가 나옴,

console.log(Number((num1+num2).toFixed(1)))
// toFixed함수로 소수점 1번째까지 출력하고 string으로 리턴하기에 숫자로 형변환해줌.

////////////////////////////////////////////////////////////////////////////////

// boolean :  true, false
// let : age라는 변수에 다른 값이 재할당될 수 있다.
let age = null

let age1   // undefined : 데이터가 할당되어있지 않다.
           // 자동으로 할당해줌.

console.log(age)

setTimeout(function(){
    age = 85
    console.log(age)
},1000) // 1초 뒤에 해당 함수 실행해라.

const user = {
    name: 'hyoeun',
    age: 85,
    email: null
}
// 값이 존재하지 않아도 명시적으로 null이라고 할당을 해줘야 좋음.

/////////////////////////////////////////////////////////////////////////////////

// Array(배열)
const fruits = new Array('apple','banana','cherry')
const fruits2 = ['apple','banana','cherry'] // 리터럴 방식 (배열 리터럴) 기호를 통해 배열을 생성

console.log(fruits2[1]) // index가 1인 요소 출력하기
console.log(fruits.length) // 배열 길이 확인하기
console.log(fruits2[fruits2.length - 1]) // 맨 마지막 요소 출력하기

////////////////////////////////////////////////////////////////////////////////

// Object(객체)

const user_O = new Object()
user_O.name = 'hyoeun'
user_O.age = 23
console.log(user_O)  // key, value 형태로 출력됨.

// 어떤 함수에서 만들어졌는지 알 수 있음.
function User_func(){
    this.name = 'hyoeun'
    this.age = 34
}

// 리터럴 방식으로 선언하기 / 대부분은 이렇게 함.  // 순서가 없음.
const user_li = {
    name: 'hyoeun',
    age: 24
}
console.log(user_li.name)     // hyoeun
console.log(user_li['name'])  // hyoeun // 변수로 조회 가능함.

// key는 고유함, 순서가 없음. 

const user_A = {
    name: 'hyoeun',
    age: 24
}
const user_B = {
    name: 'chohe',
    age: 25,
    parent : user_A
}
console.log(user_B.parent.name) // 객체데이터에서 계속 사용 가능함.
console.log(user_B['parent']['name']) // 위와 동일함.

const users = [user_A, user_B]
console.log(users[0].name) // user_A의 name
console.log(users[0]['name']) // 위와 같음.

/////////////////////////////////////////////////////////////////////

function hello(){
    console.log('hello')
}

hello() // call
hello   // 함수데이터

console.log(hello) //함수가 출력됨.

function getNumber(){
    return 123
}

const getNumberA = function(){
    return 456
}
// 위와 결과값이 같음.

const a = function() {
    console.log('A')
}

const b = function(c){
    console.log(c)
    c()
}
b(a) // 함수가 인수로 들어가면서 a 함수가 직접 출력됨.

////////////////////////////////////////////////////////////////////

// 형변환 (Type Conversion)

const a_type = 1
const b_type = '2'

console.log(a==b)

// === 일치 연산자  a===b   false   // 권장함.
// == 동등 연산자   a==b    true    // 다른 데이터 타입이어도 true가 나올 수 있다.

//////////////////////////////////////////////////////////////////////////

// 참과 거짓(Truthy & Falsy)
// 거짓 : 0, false, null, undefined, NaN, '', 0n (BigInt)
// 참: 이외 모든것

const fruits4 = []

if (fruits4){
    console.log('참!')
}

////////////////////////////////////////////////////////////////////////

// 데이터 타입 확인

const abc = 123

console.log(typeof abc)
console.log(typeof 234 === 'number') // true
console.log(typeof undefined === 'undefined') // true
console.log(typeof null) // object
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof function(){} === 'function') // true

console.log([].constructor) // object는 typeof 대신 이렇게 확인한다.
console.log([].constructor === Array) // true
console.log({}.constructor) // object
// console.log(null.constructor) // null은 이렇게도 확인 불기

console.log(Object.prototype.toString.call(null).slice(8,-1)) // Null

function checkType(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType(123))
console.log(checkType('hello'))
console.log(checkType({}))
console.log(checkType(null))
console.log(checkType(undefined))