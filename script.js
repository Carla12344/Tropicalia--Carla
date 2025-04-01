document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById ('aumentar-fonte')
    const diminuiFonteBotao = document.getElementById ('diminuir-fonte')

    let tamanhoAtualFonte = 1

    aumentaFonteBotao.addEventListener('click', {
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte,tamanhoatualfonte}rem`;
    })

    diminuiFonteBotao.addEventListener('click', {function(){
        tamanhoatualfonte -=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte,tamanhoatualfonte}rem`;
    })
})