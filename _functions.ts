/* eslint-disable @typescript-eslint/no-unused-vars */
export {};

interface UserProps {
  id: number;
  nome: string;
  email: string;
  password: string;
  hora_de_criacao: string | Date;
  hora_de_atualizacao: string | Date | null;
}

let users: UserProps[] = [];

let counter_id: number = 1;

function insertUser(nome: any, email: any, password: any) {
  const user: UserProps = {
    id: counter_id,
    nome,
    email,
    password,
    hora_de_criacao: new Date(),
    hora_de_atualizacao: null,
  };
  users.push(user);
  counter_id = counter_id + 1;

  return users;
}

function selectUser(id: number) {
  return users.filter(user => user.id === id);
}

function updateUser(id: number, field: any, value: any) {
  return (users = users.map((user: any) =>
    user.id === id
      ? { ...user, field: value, hora_de_atualizacao: new Date() }
      : user,
  ));
}

function deleteUser(id: number) {
  return (users = users.filter(user => user.id !== id));
}
