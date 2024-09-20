function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) return list.valor;
    else return nth(list.restante, n - 1);
  }
  
  let lista = { valor: 1, restante: { valor: 2, restante: { valor: 3, restante: null } } };
  console.log(nth(lista, 1)); // Output: 2
  