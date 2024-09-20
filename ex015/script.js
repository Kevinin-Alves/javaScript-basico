function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || fano.value > anoAtual){
        window.alert('[Erro] verifique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex'); 
        var idade = anoAtual - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'crianca_homem.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','adolescente_homem.jpg')
            } else if (idade < 50){
                //adulto
            } else {
                //idoso
            }

        } else if(fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10 ){
                //criança
            } else if (idade < 21){
                //jovem
            } else if (idade < 50){
                //adulto
            } else {
                //idoso
            }
        } else {
            res.innerHTML = 'Digite um valor aceito'
        }

    }
    res.style.textAlign = 'Center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.append(img);
}