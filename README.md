# Laboratory work 1 - Node.js
Лабораторна робота №1 студенток групи ІП-04, Легенької Юлії, Васильєвої Марини, Саніної Анастасії.

## Setup
1. Install Node JS

2. Clone the repository with the following command:
```bash
https://github.com/julikss/node.js-lab1.git
```

## Duplicate Encode
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

To try it use the following command:
```bash
node duplicateEncode.js
```

## First Non Repeating Character
The goal of this exercise is to return the first character that is not repeated anywhere in the string (upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter). If a string contains all repeating characters, it should return an empty string ("").

To try it use the following command:
```bash
node firstNonDuplicated.js
```

## Create Phone Number
The goal of this exercise is to write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number - '(xxx) xxx-xxxx'. The numbers can be in random sequence, but in correct format.

To try it use the following command:
```bash
node createPhoneNumber.js
```

## Відповіді на контрольні запитання

***1. Чи є різниця між виконанням JavaScript в браузері та в середовищі Node.js?***
<br/>*Node.js* — це середовище виконання jаvascript, вбудована у версію движка JS V8 від Chrome. 
У браузері більшу частину часу ви взаємодієте з DOM або іншими API веб-платформи, як-от файли cookie. У Node.js їх, звичайно, немає. У вас немає документа, вікна та всіх інших об’єктів, які надає браузер.
На практиці це означає, що ви можете використовувати як require(), так і import у Node.js, тоді як цього немає у браузері. (+ більш розширені можливості роботи з файловою системою)

***2. Назвіть основні типи в JavaScript***
<br/>Всього є 8 типів даних: примітивні (не можна змінити їх частину, доступна тільки повна заміна значення)
1. *Boolean* - логічне значення типу правда/неправда, може бути лише true або false;
2. *String* - текстове значення, пишеться завжди в лапках (наприклад "апельсин");
3. *Number* - числове значення, пишеться без лапок звичайне число (наприклад 43);
4. *BigInt* - числове значення більше 9007199254740992 (2 в 53 степені). Дані числа пишуться з додаванням у кінці латинської літери "n" (наприклад 9007199254740993n)
5. *Null* - по своїй суті пустота, може бути лише null;
6. *Undefined* - невідоме значення (наприклад написали що існує таке значення як name але не написали чому воно дорівнює і коли захотіли вивести його в консолі браузера - то напише нам undefined - використовується як відображення помилки - щоб не забувати використовувати всі значення);
7. *Symbol* - символьний тип, який є унікальним і його неможливо змінити. Використовується в більшості випадків самими розробниками мови як ключ в об'єктах (наприклад необхідно дізнатись чи даний користувач є адміном). Одна з причин чому його використовують - його назва не впливає на сам об'єкт і може бути однаковою як і ключі самого об'єкту (тобто в об'єкті є ключі "Ім'я", "Вік", "Стать" і Ви бажаєте додати новий ключ але не знаєте чи така назва існує - спокійно можна додати значення символьного типу). 
8. *Object* - об'єкт, асоціативний масив, комірка пам'яті або ж набір ключ/значення.

***3. Як працює замикання (closure) в JS?***
<br/>*Замикання* - це комбінація функції та лексичного оточення, в якому ця функція була визначена. Функція, яка була визначена в замиканні, "запам'ятовує" лексичне оточення, в якому вона була створена. Замикання дає внутрішній функції доступ до лексичного оточення зовнішньої функції, тобто для внутрішньої функції видно ідентифікатори із зовнішньої функції, в якій вона була визначена.

***4. Назвіть основні стандартні бібліотеки ноди***
<br/>*http* - включає класи, методи та події для створення http-сервера Node.js.
<br/>*url* - включає методи для дозволу та аналізу URL
<br/>*path* - включає методи роботи з шляхами до файлів
<br/>*fs* - включає класи, методи та події для роботи з файловим введенням-виводом
<br/>*querystring* - включає методи роботи з рядком запиту
<br/>*events* - надає нам клас EventEmitter, який призначений для роботи з подіями

***5. Які є способи імпортувати модулі в ноду?***
<br/>
```
const { myFunc1, myFunc2 } = require('./index')
import myFunc from './index';
```

***6. Як пов'язані Google Chrome / Chrominium та Node.js?***
<br/>Node.js - платформа, яка була розроблена на базі движка V8, який був розроблений Google(both NodeJS and Chrome use the same V8 engine for executing JavaScript.)

***7. Як можна дозволити імпортувати змінні з поточного модуля?***
<br/>
```
module.exports = {sumCounter};
const {sumCounter} = require('./module1')

module.exports = sumCounter;
const sumCounter = require('./module1')

exports.sumCounter = function(a, b) { return a + b; };
const {sumCounter} = require('./module1');
```

