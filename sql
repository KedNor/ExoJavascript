CREATION DE TABLE

PK: CLE PRIMAIRE 
NN: NOT NULL PAS NULL 
UQ: UNIQUE 
AI: AUTO INCREMENT 

Requetes a conaitre 
SELECT * FROM table; * signifie toutes les colonnes 
SELECT * FROM user WHERE id_user = 2;
SELECT * FROM user WHERE id_user = 2 AND password = 456;
SELECT * FROM user WHERE id_user BETWEEN 1 AND 3; 

Vous pouvez utiliser l'opérateur IN pour vérifier qu'une valeur est comprise parmi un ensemble de valeurs :
SELECT * FROM user WHERE firstname IN ('jean', 'pierre', 'paul', 'jacques'); 

Vous pouvez utiliser l'opérateur NOT pour inverser une condition
SELECT * FROM user WHERE firstname NOT IN ('jean', 'pierre', 'paul', 'jacques'); 

SELECT 
    col1, col2
FROM 
    table
ORDER BY 
    col1 [ASC|DESC], 
    col2 [ASC|DESC],
    ...;

//jointure 
SELECT colonnes
FROM table_1
INNER JOIN table_2 ON condition;

//exemple
SELECT *
FROM article
JOIN user ON article.author = user.id_user; 


//Insert

** Si vous voulez insérer des données pour toutes les colonnes, vous pouvez utiliser la syntaxe suivante :
INSERT INTO user
VALUES (DEFAULT, 'pierre', 'laroche', 'pierre@laroche.fr', 789);
DEFAULT permet d'utiliser la valeur par défaut de la colonne ou l'auto-incrémentation si elle est définie. Ici, comme la colonne user_id est auto-incrémentée nous laissons DEFAULT.

**Pour insérer des données dans une table seulement dans certaines colonnes, il faut les nommer :
INSERT INTO user(firstname, lastname)
VALUES ('luc', 'dupuis');

**insérer plusieurs rangées en une commande
INSERT INTO user(firstname, lastname)
VALUES 
  ('nicolas', 'cage'),
  ('denzel', 'washington'),
  ('mimie', 'mathy');


  **Pour mettre à jour des données dans une table il faut utiliser les commandes UPDATE et SET.
  UPDATE user 
SET 
    firstname = 'marie'
WHERE
    firstname = 'jean';


Pour supprimer des données, il suffit d'utiliser la commande DELETE.
DELETE FROM user 
WHERE id_user = 2;






