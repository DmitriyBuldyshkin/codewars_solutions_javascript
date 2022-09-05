function digitalRoot(n) {
    let res = 0;
  
    String(n).split('').map((num)=>{
      res+=Number(num);
    });
    return res >= 10 ? digitalRoot(res) : res;
}
