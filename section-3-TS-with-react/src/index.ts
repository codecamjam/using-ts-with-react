export function log(str: string) {
  console.log(str);
}

log('hello world!!!!!!!!!');

class A {
  greeting = 'Hello World';
}

log(new A().greeting);
