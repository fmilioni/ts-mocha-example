function round(n: number): number {
  return Math.round(n * 100) / 100;
}

function sac(value: number, installments: number, tax: number) {
  const amort = round(value / installments);

  const ret = [];
  let devedor = value;

  let totalJuros = 0;

  for (let i = 0; i < installments; i++) {
    const juros = round(devedor * tax);
    devedor -= amort;

    totalJuros += juros;

    ret.push({
      devedor,
      amortizacao: amort,
      juros,
      prestacao: amort + juros,
    });
  }

  return {
    totalJuros,
    parcelas: ret
  };
}

function price(value: number, installments: number, tax: number) {
  const P = round(value * ( (Math.pow(1 + tax, installments) * tax) / (Math.pow(1 + tax, installments) - 1) ) );

  const ret = [];
  let devedor = value;

  let totalJuros = 0;

  for (let i = 0; i < installments; i++) {
    const juros = round(devedor * tax);
    const amort = round(P - juros);
    devedor -= amort;

    totalJuros += juros;

    ret.push({
      devedor,
      amortizacao: amort,
      juros: juros,
      prestacao: P,
    });
  }

  return {
    totalJuros,
    parcelas: ret
  };
}

function sacInstallments(value: number, maxInstallmentValue: number, tax: number) {
  const juros = value * tax;
  return Math.ceil(value / (maxInstallmentValue - juros));
}

console.log(price(10000, 5, 0.02));
