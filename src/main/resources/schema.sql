    CREATE TABLE Kunde
    (
        id INTEGER AUTO_INCREMENT NOT NULL,
        film VARCHAR(255) NOT NULL,
        antall INT NOT NULL,
        fornavn VARCHAR(255) NOT NULL,
        etternavn VARCHAR(255) NOT NULL,
        telefon INT NOT NULL,
        email VARCHAR(255) NOT NULL,
        PRIMARY KEY(id)
    );