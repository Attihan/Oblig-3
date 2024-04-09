$(function(){
    // hent kunden med kunde-id fra url og vis denne i skjemaet
    const id = window.location.search.substring(1);
    const url = "/hentEnKunde?"+id;
    $.get(url,function(kunde){
        $("#id").val(kunde.id); // må ha med id inn skjemaet, hidden i html
        $("#film").val(kunde.film);
        $("#antall").val(kunde.antall);
        $("#fornavn").val(kunde.fornavn);
        $("#etternavn").val(kunde.etternavn);
        $("#telefon").val(kunde.telefon);
        $("#email").val(kunde.email);
    });
});

function endreKunden() {
    const kunde = {
        id : $("#id").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefon : $("#telefon").val(),
        email : $("#email").val()

    }
    $.post("/endreEnKunde",kunde,function(){
        window.location.href = 'index.html';
    });
}