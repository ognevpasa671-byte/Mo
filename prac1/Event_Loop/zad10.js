function checkEvenOdd(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'number' || isNaN(data)) {
      return reject(new Error('Аргумент должен быть числом'));
    }

    if (data === 0 || data % 2 === 0) {
      setTimeout(() => resolve({ result: 'Even' }), data === 0 ? 1000 : 0);
    } else {
      setTimeout(() => resolve({ result: 'Odd' }), 1000);
    }
  });
}
checkEvenOdd(4).then(console.log); 
checkEvenOdd(3).then(console.log); 
checkEvenOdd(0).then(console.log); 
checkEvenOdd('abc').catch(console.error); 
