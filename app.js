import fetch from 'node-fetch';

console.log('hey');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log('hello');

/* 
  * currently goes *
  => hey
  => hello
  => rsp

  * I want *
  => hey
  => rsp
  =<> hello
*/