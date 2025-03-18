document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById ('aumentar-fonte')
    
    let tamanhoAtualFonte = 1

    aumentaFonteBotao.addEventListener('click', {
        tamanhoatualfonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte,tamanhoatualfonte}rem`;
    })
})