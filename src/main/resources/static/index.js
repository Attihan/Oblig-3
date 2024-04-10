
$(function () {
    hentAlle();
});
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
    var ut = "<table class='table'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Email</th></tr>";
    for (let i in kunder) {
        ut += "<tr>" +
            "<td>" + kunder[i].film + "</td>" +
            "<td>" + kunder[i].antall + "</td>" +
            "<td>" + kunder[i].fornavn + "</td>" +
            "<td>" + kunder[i].etternavn + "</td>" +
            "<td>" + kunder[i].telefon + "</td>" +
            "<td>" + kunder[i].email + "</td>" +
            "<td> <a class='btn btn-primary' href='endreKunde.html?id=" + kunder[i].id + "'>Endre</a></td>" +
            "<td> <button class='btn btn-danger' onclick='slettEnKunde("+kunder[i].id+")'>Slett</button></td>"+
            "</tr>";
    }

    ut+="</table>";
    $("#kundene").html(ut);
}



function slettEnKunde(id) {
    console.log("gjort")
    const url = "/slettEnKunde?id="+id;
    $.get( url, function() {
        window.location.href = 'index.html';
    });
}

function slettKundene() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}

function filmValgt() {
    alert("Filmen valgt : " + document.getElementById("film").value);
}


function validerFilm(film){
    if (film === null || film === "" || film === "Velg film her"){
        $("#feilFilm").html("Vennligst velg en film").show();
        return false;
    } else {
        // Hvis antallet er gyldig, skjul eventuelle feilmeldinger
        $("#feilFilm").html("").hide();
        return true;
    }
}
function validerAntall(antall) {


    if (antall < 1 || antall > 50) {
        $("#feilAntall").html("Vennligst fyll ut antall fra 1 til 50").show();
        return false;
    } else {
        $("#feilAntall").html("").hide();
        return true;
    }

}
function validerFornavn(fornavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").html("Fornavnet må bestå av 2 til 20 bokstaver");
        return false;
    } else {
        $("#feilFornavn").html("");
        return true;
    }
}

function validerEtternavn(etternavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if (!ok) {
        $("#feilEtternavn").html("Etternavnet må bestå av 2 til 20 bokstaver");
        return false;
    } else {
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerTelefon() {
    const telefon = $("#telefon").val();
    const regexp = /^\d+$/;
    const ok = regexp.test(telefon);
    if (!ok) {
        $("#feilTelefon").html("Telefonnummer må bestå av tall");
        return false;
    } else {
        $("#feilTelefon").html("");
        return true;
    }
}

function validerEmail() {
    const email = $("#email").val();
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok = regexp.test(email);
    if (!ok) {
        $("#feilEmail").html("Vennligst oppgi en gyldig e-postadresse");
        return false;
    } else {
        $("#feilEmail").html("");
        return true;
    }
}

function validerOgRegKunde() {
    const filmOK = validerFilm($("#film").val());
    const antallOK = validerAntall($("#antall").val());
    const fornavnOK = validerFornavn($("#fornavn").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const telefonOK = validerTelefon($("#telefon").val());
    const emailOK = validerEmail($("#email").val());
    if (filmOK && antallOK && fornavnOK && etternavnOK && telefonOK && emailOK) {
        regKunde();
    }
}

function validerOgEndrekunde() {
    const filmOK = validerFilm($("#film").val());
    const antallOK = validerAntall($("#antall").val());
    const fornavnOK = validerFornavn($("#fornavn").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const telefonOK = validerTelefon($("#telefon").val());
    const emailOK = validerEmail($("#email").val());
    if (filmOK && antallOK && fornavnOK && etternavnOK && telefonOK && emailOK) {
        endreKunden();
    }
}



