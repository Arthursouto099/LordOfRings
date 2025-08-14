CREATE TABLE IF NOT EXISTS personagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL, 
    tipo ENUM(
        "Sociedade", 
        "Nazgûl", 
        "Balrog",
        "Orc", 
        "Istari", 
        "Dragão",
        "Goblin",
        "Troll",
        "Ent",
        "Uruk-hai"
    ) NULL DEFAULT 'Sociedade',

    raca ENUM(
        "Hobbit", 
        "Humano", 
        "Elfo",
        "Orc",
        "Maia",
        "Dragão",
        "Goblin",
        "Troll",
        "Ent",
        "Uruk-hai"
    ) NULL DEFAULT 'Humano',

    arma VARCHAR(100) NOT NULL,

    status ENUM(
        "vivo", 
        "ferido", 
        "morto",
        "desaparecido",
        "desconhecido"
    ) NULL DEFAULT 'vivo'
);
