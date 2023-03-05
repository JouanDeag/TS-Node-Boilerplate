import { setTimeout } from 'timers/promises';

console.log('Hello World!');

await setTimeout(1000);

console.log('Hello World, but after 1 second!');
