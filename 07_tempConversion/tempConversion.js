const ftoc = function(far) {
  let ftoc = (far - 32) * (5/9);
  ftoc = Math.round(ftoc * 10) / 10
  console.log(ftoc);
  return ftoc;
};

const ctof = function(cel) {
  let ctof = cel*(9/5) + 32;
  ctof = Math.round(ctof * 10) / 10
  console.log(ctof);
  return ctof;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
