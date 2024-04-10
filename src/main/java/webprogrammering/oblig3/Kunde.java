package webprogrammering.oblig3;


        public class Kunde {
        private int id;
        private String film;
        private String antall;
        private String fornavn;
        private String etternavn;
        private String telefon;
        private String email;
                public Kunde() {
                }

        public Kunde(int id, String film, String antall, String fornavn, String etternavn, String telefon, String email) {
        this.id = id;
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.email = email;
        }



        public int getId() {
                return id;
        }
                public void setId(int id) {
                        this.id = id;
                }

        public String getFilm() {
        return film;
        }

        public void setFilm(String film) {
        this.film = film;
        }

        public String getAntall() {
        return antall;
        }

        public void setAntall(String antall) {
        this.antall = antall;
        }

        public String getFornavn() {
        return fornavn;
        }

        public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
        }

        public String getEtternavn() {
        return etternavn;
        }

        public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
        }

        public String getTelefon() {
        return telefon;
        }

        public void setTelefon(String telefon) {
        this.telefon = telefon;
        }

        public String getEmail() {
        return email;
        }
        public void setEmail(String email) {
        this.email = email;
        }
        }


