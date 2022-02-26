window.addEventListener("DOMContentLoaded", event => {
    var section  = document.getElementsByTagName('section') ;
    var sectionList = {}

    Array.prototype.forEach.call(section,function (e){  
        sectionList[e.id] = e.offsetTop  // pegas todas as posições atuais
    });
    document.addEventListener('scroll',function(){
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; 
      for ( i in sectionList) {
       if(sectionList[i] <= scrollPosition+80){ 
           document.querySelector('.item-nav-ativo')
           item = document.querySelector('a[href*=' + i + ']').setAttribute('class', 'item-nav-ativo');
       }else{
        document.querySelector('a[href*=' + i + ']').removeAttribute('class', 'item-nav-ativo');
      }}
    })
    CriarPaletaDeLiguagens();    
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
            "descricao":"Aqui trabalho com o backend do meu projeto foguete usando fron-ent o Angular 12"
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
            "descricao":"Aqui estou trabalho no meu projeto foguete, essa aplicação tem como objetivo uma plataforma de estudos"
        },
        {
            "nome":"Sql Server",
            "imagemURl":"./assets/imagens/linguagens/sql server.png",
            "descricao":"Usado para persistir os dados dos meus projetos e para meu dia-a-dia no trabalho, o Sql é uma ótima ferramenta de banco de dados"
        }
    ]
  }
  