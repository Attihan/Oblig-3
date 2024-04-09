function regKunde() {
    const kunde = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefon : $("#telefon").val(),
        email : $("#email").val()
    };
    $.post("/lagre", kunde, function(){
        hentAlle();
    });


    $("#film").val(""); //tøm input-feltene
    $("#antall").val("");
    $("#fornavn").val(""); //tøm input-feltene
    $("#etternavn").val("");
    $("#telefon").val(""); //tøm input-feltene
    $("#email").val("");
}

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(kunder){
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Email</th></tr>";
    for (const kunde of kunder){
        ut+="<tr><td>"+kunde.film+"</td>" +
            "<td>"+kunde.antall+"</td>" +
            "<td>"+kunde.fornavn+"</td>" +
            "<td>"+kunde.etternavn+"</td>" +
            "<td>"+kunde.telefon+"</td>" +
            "<td>"+kunde.email+"</td>"+
            "<td> <a class='btn btn-primary' href='endreKunde.html?id="+kunder.id+"'>Endre</a></td>"+
            "<td> <button class='btn btn-danger' onclick='slettEnKunde("+kunder.id+")'>Slett</button></td>"+
            "</tr>";
    }

    ut+="</table>";
    $("#kundene").html(ut);
}

function slettEnKunde(id) {
    const url = "/slettEnKunde?id="+id;
    $.get( url, function() {
        window.location.href = '/';
    });
};

function slettKundene() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}

function filmValgt() {
    alert("Filmen valgt : " + document.getElementById("film").value);
}

function validering(){

    const film = $("#film");
    const antall = $("#antall");
    const fornavn = $("#fornavn");
    const etternavn = $("#etternavn");
    const telefon = $("#telefon");
    const email = $("#email");

    const validerFilm = $("#validerFilm");
    const validerAntall = $("#validerAntall");
    const validerFornavn = $("#validerFornavn")
    const validerEtternavn = $("#validerEtternavn")
    const validerTelefon = $("#validerTelefon")
    const validerEmail = $("#validerEmail")

    let feil = false;


    if ($("#film").val() === null) {
        $("#validerFilm").css("display", "inline");
        feil = true;
    } else {
        $("#validerFilm").css("display", "none");
    }

    if (antall.val() < 0 || antall.val() > 50 || antall.val() === '') {
        console.log("Aktivert");
        validerAntall.css("display", "inline");
        feil = true;
    } else {
        console.log("Deaktivert");
        validerAntall.css("display", "none");
    }

    if ($("#fornavn").val() === "") {
        $("#validerFornavn").css("display", "inline");
        feil = true;
    } else {
        $("#validerFornavn").css("display", "none");
    }

    if ($("#etternavn").val() === "") {
        $("#validerEtternavn").css("display", "inline");
        feil = true;
    } else {
        $("#validerEtternavn").css("display", "none");
    }

    if (isNaN(parseInt($("#telefon").val())) || $("#telefon").val() === "") {
        $("#validerTelefon").css("display", "inline");
        feil = true;
    } else {
        $("#validerTelefon").css("display", "none");
    }

    if ($("#email").val() === "" || !/^.+@.+\..+$/.test($("#email").val())) {
        $("#validerEmail").css("display", "inline");
        feil = true;
    } else {
        $("#validerEmail").css("display", "none");
    }



    return !feil; //Dette returnerer variabelen feil som true
}

function validerOgRegKunde() {
    if (validering()) {
        regKunde();
    } else {
        console.log("Validering mislyktes. Kunderegistreringen ble ikke utført.");
    }
}


