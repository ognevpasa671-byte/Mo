function repeatOperation(operation, intervalMs, times) {
  let count = 0;
  const timerId = setInterval(() => {
    operation();
    count++;
    if (count >= times) {
      clearInterval(timerId);
    }
  }, intervalMs);
}

repeatOperation(() => console.log(' Операция выполнена'), 1000, 5);
