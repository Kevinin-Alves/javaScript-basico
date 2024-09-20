function dataPorExtenso(data) {
    const [dia, mes, ano] = data.split('/');
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
  }
  
  console.log(dataPorExtenso("22/04/1983")); // Output: 22 de abril de 1983
  