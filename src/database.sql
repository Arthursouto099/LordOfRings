CREATE TABLE IF NOT EXISTS personagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL, 
    tipo  ENUM("Sociedade", "Nazgûl", "Balrog") NULL DEFAULT  'Sociedade'  ,
    raca  ENUM("Hobbit", "Humano", "Elfo") NULL DEFAULT 'Humano',
    arma VARCHAR(100) NOT NULL,
    status ENUM("vivo", "ferido", "morto")   NULL DEFAULT 'vivo'
  
);