const p1 = Promise.resolve(2);
const p2 = p1.then(n => new Promise(res => setTimeout(() => res(n ** 2), 3000)));
const p3 = p2.then(n => new Promise(res => setTimeout(() => res(n ** 2), 3000)));

p3.then(console.log); 
