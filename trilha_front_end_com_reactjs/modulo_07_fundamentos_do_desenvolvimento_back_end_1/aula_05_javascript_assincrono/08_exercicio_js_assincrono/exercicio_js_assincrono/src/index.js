import axios from 'axios';

// viacep.com.br/ws/01001000/json/
const api = axios.create({
    baseURL : "https://viacep.com.br/ws"
});

// GET /CEP/formato(json,xml)/
async function buscarEnderecoPeloCep (cep) {
    try {
        const resultado = await api.get(`/${cep}/json/`);
        console.log(resultado.data);
    
    } catch (error) {
        console.log(error.response?.data || error.message);
        
    }
}

buscarEnderecoPeloCep("74590711");