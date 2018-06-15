
var cont = 0;
var tempo = 10000;
var only1 = false;
$(document).ready( function(){setTimeout("apresenta()",1000);});






function apresenta() {

    var offset = $("#id_footer").offset();
     
$("html, body").animate({
  scrollTop: offset.top
}, 10000);

}

/*
function apresenta () {
    //alert('teste apresenta');




    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        //alert('chegou ao final');
        clearTimeout(cont);
        only1 = true;
    }
    else if(only1 == false){
        cont = setTimeout("apresenta()",tempo);



        var offset = $("#id_footer").offset();
     
        $("html, body").animate({
          scrollTop: offset.top
        }, 20000);

        
    }


        


}




	//var tempo = setTimeout("contagem_tempo("+segundos+")", 1000); //quando se deseja passar algum parâmetro em algo que já está entre aspas
apresenta();
*/


