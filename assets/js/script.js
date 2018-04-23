//**************** WYKREŚLANIE I ZMIENIENIE KOLORU NA SZARY ELEMENTU LI PRZEZ KLIKNIĘCIE NA NIEGO********************
$("ul").on("click" , "li" , function(){
	$(this).toggleClass("compl");
});

//******************************KLIKANIE NA X W CELU USUNIĘCIE ELEMENTU Z LISTY*******************************************
$("ul").on("click", "span" ,function(event){
//PO KLIKNIĘCIU W SPAN FADEOUT RODZICA SPANA - LI
	$(this).parent().fadeOut(500 , function(){
// ORAZ PO ZAKOŃCZENIU FADEOUT USUŃ TO LI
		$(this).remove();
	});
// NIE WYKONUJ POLECEŃ KLIKNIĘCIA DLA RODZICÓW I DALEJ, TYLKO DLA KLIKNIĘTEGO ELEMENTU
	event.stopPropagation();
});

//
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
//POBIERA WARTOŚĆ Z INPUTA, THIS ODNOSI SIĘ DO INPUTA
		var tdText =$(this).val();
//CZYŚCIMY POLE INPUTU
		$(this).val("");
//TWORZY NOWY LI I DODAJE GO NA KONIEC LISTY (DO UL)
$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + tdText +"</li>");
	}
})

//POWINNO CHOWAĆ I POKAZYWAĆ INPUTA, ALE W TEJ WERSJI FONTAWESOME NIE DZIAŁA - DO PORPAWY
$(".fa-calendar-plus").click(function(){
	$("input[type='text']").fadeToggle();
});