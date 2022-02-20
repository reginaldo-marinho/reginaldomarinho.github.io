window.addEventListener("DOMContentLoaded", event => {
    var section  = document.getElementsByTagName('section') ;
    var sectionList = {}

    Array.prototype.forEach.call(section,function (e){  
        sectionList[e.id] = e.offsetTop  // pegas todas as posições atuais
    });

    document.addEventListener('scroll',function(){
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; 
      for ( i in sectionList) {
       if(sectionList[i] <= scrollPosition){ 
           document.querySelector('.item-nav-ativo')
           item = document.querySelector('a[href*=' + i + ']').setAttribute('class', 'item-nav-ativo');
       }else{
        document.querySelector('a[href*=' + i + ']').removeAttribute('class', 'item-nav-ativo');
      }}
    })
});

