let sessoes = (function (){
    var sessao  = document.getElementsByTagName('section');
    var listaSessao = {}
    var ultimoIdEmFoco
    Array.prototype.forEach.call(sessao, function(event){
        listaSessao[event.id] = event.offsetTop
    })
    return {
        listaSessao,
        RemoveUltimoId: function (){
            if(ultimoIdEmFoco!=undefined) document.querySelector('a[href*=' + ultimoIdEmFoco + ']')
            .querySelector('.line-efect').classList.remove('line-efect-on')
        },
        SetUltimoId: function (id){
            ultimoIdEmFoco = id
        }
    }
})()

let contarImagens = (function(){
    let privateContador = 1;
    function MudarPara(Posicao){
        privateContador+= Posicao;
        if(privateContador>meusProjetos.projeto[0].UrlImg.length-1){
            privateContador= 0
        }
        if(privateContador < 0 ){
            privateContador= meusProjetos.projeto[0].UrlImg.length-1
        }
        document.getElementById('group-projeto-imagem').setAttribute('src',meusProjetos.projeto[0].UrlImg[privateContador].caminho)
    }
    return {
        next:function(){
            MudarPara(1);
        },
        previos:function(){
            MudarPara(-1);
        }
    }
})();

// Não esquecer de usar InnerHTML
window.addEventListener("DOMContentLoaded", event => {

    CriarPaletaDeLiguagens();

    document.addEventListener('scroll',function(){
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        scrollPosition+=80

        for ( i in sessoes.listaSessao) {
            if(sessoes.listaSessao[i] <= scrollPosition){ 
                sessoes.RemoveUltimoId()
                document.querySelector('a[href*=' + i + ']')
                .querySelector('.line-efect').classList.add('line-efect-on')
                sessoes.SetUltimoId(i)
            }
        }
      })

    document.getElementById("tecno-103").addEventListener("click",() => {
        var amostraImagem = document.getElementById('box-imagens')
        amostraImagem.style.display= "block"
    })

    document.getElementById("close-amostra-imagens").addEventListener("click",() => {
        var amostraImagem = document.getElementById('box-imagens')
        amostraImagem.style.display= "none"
    })

    document.querySelectorAll('i.bi-chevron-compact-left,i.bi-chevron-compact-right').forEach(item =>{
        item.addEventListener("click",(event)=>{
            switch(event.target.id){
                case 'next':
                    contarImagens.next()
                    break;
                case 'previos':
                    contarImagens.previos()
                    break;
            }
        })
    })
});

function CriarPaletaDeLiguagens(){
    LinguagensFerramentas.conteudo.forEach(item => {
    let paleta = document.getElementById("PaletaLinguagens");
    let  divGroupImg = document.createElement('div');
    divGroupImg.setAttribute("class","group-img")
    let  divImgInfo = document.createElement('div');
    divImgInfo.setAttribute("class","img-info")
    let h4 = document.createElement('h4');
    h4.textContent = item.nome
    let p = document.createElement('p');
    p.textContent = item.descricao
    let img = document.createElement('img');
    img.setAttribute('src',item.imagemURl)
    divImgInfo.appendChild(h4);
    divImgInfo.appendChild(p);
    divGroupImg.appendChild(divImgInfo);
    divGroupImg.appendChild(img);
    paleta.appendChild(divGroupImg);
  })
}


let LinguagensFerramentas = {
    "conteudo":[
        {
            "nome":".NET Framework",
            "imagemURl":"./assets/imagens/linguagens/csharp.png",
            "descricao":"Com o .NET criei meu primerio projeto Tecno 103, esse projeto está localizado no meu Linkedin"
        },
        {
            "nome":".NET Core",
            "imagemURl":"./assets/imagens/linguagens/sharpcore.png",
            "descricao":"Aqui trabalho com o back-end do meu projeto foguete usando fron-end Angular 12"
        },
        {
            "nome":"Crystal Reports",
            "imagemURl":"./assets/imagens/linguagens/crystal.png",
            "descricao":"Uso essa ferramenta para criar relatórios quando necessario na empresa onde trabalho"
        },
        {
            "nome":"CSS",
            "imagemURl":"./assets/imagens/linguagens/css.png",
            "descricao":"Uso para estilizar meu front-end"
        },
        {
            "nome":"HTML",
            "imagemURl":"./assets/imagens/linguagens/html.png",
            "descricao":"Aqui crio minhas paginas web"
        },
        {
            "nome":"JavaScript",
            "imagemURl":"./assets/imagens/linguagens/js.png",
            "descricao":"Uso essa linguagem para meu front-ent ficar mais flexivel"
        },
        {
            "nome":"Angular",
            "imagemURl":"./assets/imagens/linguagens/angular.svg",
            "descricao":"Aqui estou trabalho no meu projeto foguete, essa aplicação tem como objetivo a criação de um roteiro de cursos"
        },
        {
            "nome":"Sql Server",
            "imagemURl":"./assets/imagens/linguagens/sql server.png",
            "descricao":"Usado para persistir os dados dos meus projetos e para meu dia-a-dia no trabalho, o Sql é uma ótima ferramenta de banco de dados"
        }
    ]
  }
  
  let meusProjetos = {
    "projeto":[
        {
            "nome":"Tecno-103",
            "UrlImg":[
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/login.jpeg"
                },
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/caixa.jpeg"
                },
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/menu.jpeg"
                },
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/img 1.jpeg"
                },
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/mensagem form.jpeg"
                },
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/img 2.jpeg"
                },
                {
                    "caminho":"./assets/imagens/Projetos/Tecno 103/img 3.jpeg"
                }
            ]
        },
        {
            "nome":"foguete",
            "UrlImg":[
                {
                "caminho":"./assets/imagens/Projetos/foguete/Criar Historia.jpg"  
                }
            ]
        }
    ]
}
