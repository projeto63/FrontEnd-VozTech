import Postagem from "./Postagem";

interface User {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem[] | null
}

export default User;

<<<<<<< HEAD
=======
import { Postagem } from "./Postagem";
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8

