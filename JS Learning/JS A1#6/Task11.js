function prime(num) {
  let count;
  for (let j = 2; j <= num; j++) {
    count = 0;
    for (let i = 1; i <= j; i++) {
      if (j % i == 0) {
        count++;
      }
    }
    if (count == 2) {
      console.log(j);
    }
  }
}
prime(5);
