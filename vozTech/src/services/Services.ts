import axios from 'axios'; //axios -> qualquer requisição que for feita, sera interceptada por ele.
//criando um objeto chamado api que será exportado depois, e esse obj vai receber o axios e com ele, recebe todas as funcionalidades que o axios possui
export const api = axios.create({
    baseURL: 'https://voztech.onrender.com'                 //endereço da API
})
//concatenação da baseURL + url do login da API | /usuarios/logar |dados: parametro que contém os dados que vamos enviar na API: dados de usuário e senha.
export const login = async(url: any, dados: any, setDado: any) => {   //metodo login é assincrono porque é preciso que ele aguarde o retorno da API para que depois seja acioanda a função setDado
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)

    } 

    export const cadastro = async(url: any, dados: any, setDado: any) => {  
        const resposta = await api.post(url, dados)
        setDado(resposta.data)
} 