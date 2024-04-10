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
        String sql =
                "INSERT INTO Kunde (film, antall, fornavn, etternavn, telefon, email) " +
                "VALUES (?,?,?,?,?,?) ";
        db.update
                (sql,innkunde.getFilm(),innkunde.getAntall(),innkunde.getFornavn(),innkunde.getEtternavn(),innkunde.getTelefon(), innkunde.getEmail());
    }
    public Kunde hentEnKunde(int id) {
        String sql = "SELECT * FROM Kunde WHERE id=?";
        Kunde enKunde = db.queryForObject(sql,
                BeanPropertyRowMapper.newInstance(Kunde.class),id);
        return enKunde;
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


    public void endreEnKunde(Kunde kunde){
        String sql = "UPDATE Kunde SET FILM=?,ANTALL=?, FORNAVN=?,ETTERNAVN=?,TELEFON=?,EMAIL=? where id=?";
        db.update(sql,kunde.getFilm(),kunde.getAntall(),kunde.getFornavn(),kunde.getEtternavn(), kunde.getTelefon(),kunde.getEmail(),kunde.getId());
    }
    public void slettEnKunde(int id) {
        String sql = "DELETE FROM Kunde WHERE id=?";
        db.update(sql,id);
    }

}
