function drawStairs(n) {
    let str = '';
  
    if (n > 1) {
      for (let i = 0; i < n; i++) {
        str += ' '.repeat(i) + 'I\n';
      }
      return str.trim();
    } else {
      return 'I';
    }
  }