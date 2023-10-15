const superRound = (num, prec) => {
  const roundedFloor = Math.floor(num * 10 ** prec) / 10 ** prec;
  const roundedTrunc = Math.trunc(num * 10 ** prec) / 10 ** prec;
  const roundedCeil = Math.ceil(num * 10 ** prec) / 10 ** prec;
  const roundedRound = Math.round(num * 10 ** prec) / 10 ** prec;
  const roundedToFixed = Number(num.toFixed(prec));

  return [
    roundedFloor,
    roundedTrunc,
    roundedCeil,
    roundedRound,
    roundedToFixed,
  ];
};
console.log(superRound(11.12556, 2));
