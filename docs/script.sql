DROP DATABASE IF EXISTS lojinha;
CREATE DATABASE lojinha;
USE lojinha;

CREATE TABLE vendedores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula INT NOT NULL
);

CREATE TABLE produtos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL (7,2)
);

CREATE TABLE vendas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    quantidade INT NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    FOREIGN KEY (produtoId) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (vendedorId) REFERENCES vendedores(id) ON DELETE CASCADE
);

INSERT INTO vendedores VALUES
("","Stefany Antonella", 14644),
("","Stella Viana", 01516),
("","Tomás Isaac", 50913),
("","Osvaldo Galvão", 72193);

INSERT INTO produtos VALUES
("", "Samsung Galaxy M53", "2211.11"),
("", "Motorola Moto G42", "1499"),
("", "Rainha das Chamas", "36.90"),
("", "Cronicas Saxonicas - O cavaleiro da morte", "57.90"),
("", "O milagre da manhã", "56.59"),
("", "Lavadoura de Roupas Brastemp BWK12AB", "2199"),
("", "Fogão Atlas 4 Bocas", "899");

INSERT INTO vendas VALUES
("",CURDATE(),2,1,3),
("",CURDATE(),1,2,3),
("",CURDATE(),3,1,2),
("",CURDATE(),1,3,2),
("",CURDATE(),2,2,1),
("",CURDATE(),1,3,1);