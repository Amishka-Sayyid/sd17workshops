
-- creating table 1st
CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255),
  src TEXT,
  description TEXT,
  crunchiness INT
);

-- inserting data
INSERT INTO biscuits (biscuit_name, src, description, crunchiness)
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of chocolate heaven', 6 ),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

-- select queries
-- SELECTING ALL DATA
SELECT * FROM biscuits;

-- Using where
SELECT * FROM biscuits WHERE biscuit_name='Hobnob';

-- select the biscuit_name and the description 
SELECT biscuit_name, description FROM biscuits;

-- select the biscuit_name and the description WHERE biscuit_name='Hobnob'
SELECT biscuit_name, description FROM biscuits WHERE biscuit_name='Hobnob';

-- select the biscuit_name and the crunchiness in the table only when the crunchiness is 4 or 6.
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 OR crunchiness = 6;

-- ordering them alphabetically (ASC, DESC).
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 OR crunchiness = 6 ORDER BY biscuit_name ASC;


-- using ASC
SELECT * FROM biscuits ORDER BY biscuit_name ASC;

-- using limit
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 LIMIT 2;

-- using both limit and ASC
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 ORDER BY biscuit_name ASC LIMIT 2;

--renaming a column
SELECT biscuit_name AS "biscuit name", description AS "biscuit description" FROM biscuits;

-- update 
-- updating 
UPDATE biscuits SET crunchiness = 3 WHERE id = 1;

UPDATE biscuits SET crunchiness = 6 WHERE id = 5;
-- delete
-- deleting
DELETE FROM biscuits WHERE biscuit_name = 'Hobnob';