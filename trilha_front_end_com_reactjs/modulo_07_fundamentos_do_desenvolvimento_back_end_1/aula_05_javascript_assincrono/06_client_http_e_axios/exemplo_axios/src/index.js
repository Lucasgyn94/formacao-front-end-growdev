import axios from 'axios';

// Chamando api usando then / catch
axios
    .get("https://rickandmortyapi.com/api/character")
    .then((result) => {
        console.log(result.data);
    })
    .catch((error) => {
        console.log(error);
        
    })

// Chamando api usanto async / await
async function listarRickAndMorty() {
    try {
        const resultado = await axios.get("https://rickandmortyapi.com/api/character");
        console.log(resultado.data);
    } catch(error) {
        console.log(erro);

    }
}
