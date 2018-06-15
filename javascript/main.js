
var only1 = true;
var only2 = true;
var only3 = true;
var only4 = true;

/*
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}*/


$(window).on("scroll", function() {
    //alert($(window).scrollTop());
    //alert(onlyOneTime[1]);

    //botão para voltar para a tela principal
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn_scroll").style.display = "block";
        //document.getElementById("btn_scroll").style.opacity = document.body.scrollTop.toString;


        var scrollBar = $(window).scrollTop();
        scrollBar = scrollBar/1000;
        var tempSec = $("#btn_scroll");
        tempSec.css("opacity",scrollBar.toString());

    } else {
        document.getElementById("btn_scroll").style.display = "none";
    }


    var pos = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) { //chegou no final?
        //alert('chegou ao final da pagina');
    }

    var tela = $("body").width();
    if(tela > 767){
        var nav = $(".navbar");
        var scrollBar = $(window).scrollTop();
        var opacidade = 1/(0.05*scrollBar);
        var resp = opacidade.toString();
        nav.css("opacity",resp);

    }

    if($(this).scrollTop() > 1800 && only4 == true) {
        
        var tempSec = $(".sectionTheEtc");
        only4 = false;

        tempSec.css("opacity","0.0");
    

        tempSec.animate({opacity: 1.0},1500);

        
    }


    if($(this).scrollTop() > 1600 && only3 == true) {
        var tempSec = $(".sectionOurHistory");
        only3 = false;

        tempSec.css("opacity","0.0");
    

        tempSec.animate({opacity: 1.0},1500);

        
        
    }
    
    if($(this).scrollTop() > 1200  && only2 == true){
        var tempSec = $(".sectionTheGoal");
        onlyOneTime = false;
        only2 = false;

        tempSec.css("opacity","0.0");
    

        tempSec.animate({opacity: 1.0},1500);

        
    }
    
    if($(this).scrollTop() > 205 && only1 == true) {
        var tempSec = $(".sectionTheTeam");
        only1 = false;

        tempSec.css("opacity","0.0");
    

        tempSec.animate({opacity: 1.0},1500);

        
        
    }

    

    





}); 


$(window).scroll(function() {
    alert('teste123');
    var tela = $("body").width();
    if (tela < 768) break;
    else if ($(this).scrollTop() > 60) {
        $('#someLogo').fadeOut();
    } else {
        $('#someLogo').fadeIn();
    }
});


$(document).ready( function(){
    //alert('oi 1');

    //ocultando os elementos
    

    if($(window))
    $(".sectionTheTeam").css("opacity","0.0");
    $(".sectionTheGoal").css("opacity","0.0");
    $(".sectionOurHistory").css("opacity","0.0");
    $(".sectionTheEtc").css("opacity","0.0");

    $(".btn").click(function(e){
        e.preventDefault();
     
        var id     = $(this).attr("href");
        var offset = $(id).offset();
     
        $("html, body").animate({
          scrollTop: offset.top
        }, 500);
      });

      $("#btn_scroll").click(function(e){
        e.preventDefault();
     
        var id     = $(this).attr("href");
        var offset = $(id).offset();
     
        $("html, body").animate({
          scrollTop: 0
        }, 500);
      });



      var capa = $(".capa");

      var tela = $("body").width();
    if(tela < 500){
        //ajustar as fotos não precisa mais
        //alert('a tela é maio que 1000');
        capa.css("opacity","1.0");
    }
    else{
    }
    
    capa.animate({opacity: 1.0},1500);
    





    
    

    var infoEquipe = document.getElementById('info-equipe');
    infoEquipe.innerHTML = "Henrique Mauler Borges";


    //função não tá pegando não sei o motivo
    


    $(window).on("scroll", function() {
        alert('oi');
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            //alert('chegou ao final');
        }
    });    
        

    addIconClasses();

    $(window).resize(function() {
        // Adicionar sempre que a tela for redimensionada
        addIconClasses();
    });


    //não tá pegando não sei o motivo, scroll suave
    var $doc = $('html, body');
    $('#info-mecanica').click(function() {
        alert('eu cliquei em um trimbolho');
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    
    $('#info-mecanica').click(function(){
        alert('oi');
    });


})

$('#info-mecanica').click(function(){
    alert('evento Jquery clique');
});

function addIconClasses() {
    var tela = $("body").width();
    if(tela > 768 && tela < 992){
        //ajustar as fotos não precisa mais
        //alert('a tela é maio que 1000');
    }
}





/* testando funções para o site TUC
alert('oi');



//executado ao ligar a pagina
function capituracadastro() {

}

function onLoadPage() {
    alert('a página foi totalmeente carregada');
}



//código lixo apenas para testes
var autor = "Henrique Mauler Borges";
alunos = Array('Adailson','henrique','Isabely'); // ou apenas Array()
alunos[5] = 'Robert';
alunos[4] = Array('Elayne','Willian');
professores = Array();
professores['logistica'] = Array(); //ou apenas []
professores['hidrodinamica'] = Array();

professores['logistica'][1] = 'Emannuel';
professores['logistica'][2] = 'Nelio';

alert(alunos);
professores['desenho'][0] = 'Emannuel';

*/