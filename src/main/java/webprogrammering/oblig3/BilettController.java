package webprogrammering.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BilettController {

    @Autowired
    private KundeRep rep;

    @PostMapping("/lagre")
    public void lagreKunde(Kunde innKunde){
        rep.lagreKunde(innKunde);
    }

    @GetMapping("/hentAlle")
    public List<Kunde> hentAlle(){
        return rep.hentAlleKunder();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleKunder();
    }
}