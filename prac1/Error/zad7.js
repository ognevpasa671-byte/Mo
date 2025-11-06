function handleReferenceError() {
  try {
    console.log(nonExistentVar);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.error('ReferenceError caught:', e.message);
    }
  }
}
handleReferenceError();