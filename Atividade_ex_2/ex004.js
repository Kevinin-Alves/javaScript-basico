function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.restante) {
      array.push(node.valor);
    }
    return array;
  }
  
  let lista = { valor: 1, restante: { valor: 2, restante: { valor: 3, restante: null } } };
  console.log(listToArray(lista));
  