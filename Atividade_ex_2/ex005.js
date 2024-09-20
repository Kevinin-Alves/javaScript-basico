function prepend(element, list) {
    return { valor: element, restante: list };
  }
  
  let lista = { valor: 1, restante: { valor: 2, restante: { valor: 3, restante: null } } };
  console.log(prepend(0, lista));
  