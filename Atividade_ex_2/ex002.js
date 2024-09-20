function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
  
    if (a == null || typeof a !== "object" || b == null || typeof b !== "object") {
      return false;
    }
  
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  // Exemplos de uso:
  let obj1 = { param1: "valor1", param2: "valor2" };
  let obj2 = { param1: "valor1", param2: "valor2" };
  let obj3 = { param1: "valor1", param2: "diferente" };
  
  console.log(deepEqual(obj1, obj2)); // true
  console.log(deepEqual(obj1, obj3)); // false
  console.log(deepEqual(obj1, null)); // false
  console.log(deepEqual(null, null)); // true
  