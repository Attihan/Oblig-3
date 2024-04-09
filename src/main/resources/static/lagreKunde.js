function lagreKunde() {
    const kunde = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefon : $("#telefon").val(),
        email : $("#email").val()
    }
    const url = "/lagreKunde";
    $.post( url, kunde, function() {
        window.location.href = 'index.html';
    });
};

