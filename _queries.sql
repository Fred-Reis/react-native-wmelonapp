INSERT INTO usuarios (
  id,
  nome,
  email,
  password,
  hora_de_criacao,
  hora_de_atualizacao
)
VALUES (
  1,
  'Jõao',
  'joao@email.com',
  '123456',
  '2021-11-17T22:56:06.917Z',
  null
);

UPDATE usuarios
SET nome='Jose',
    email='jose@email.com',
    password='654321' ,
    hora_de_atualizacao= '2021-12-17T12:51:06.917Z '
WHERE id = 1;

DELETE FROM usuarios
WHERE id = 1;

SELECT * FROM usuarios
WHERE id = 1;