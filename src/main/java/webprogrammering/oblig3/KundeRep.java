package webprogrammering.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRep {
    @Autowired
    private JdbcTemplate db;

    public void lagreKunde (Kunde innkunde) {
        String sql = "INSERT INTO Kunde (film, antall, fornavn, etternavn, telefon, email) VALUES (?,?,?,?,?,?) ";
        db.update(sql,innkunde.getFilm(),innkunde.getAntall(),innkunde.getFornavn(),innkunde.getEtternavn(),innkunde.getTelefon(), innkunde.getEmail());
    }

    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT * FROM Kunde";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper<>(Kunde.class));
        return alleKunder;
    }

    public void slettAlleKunder(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }

}