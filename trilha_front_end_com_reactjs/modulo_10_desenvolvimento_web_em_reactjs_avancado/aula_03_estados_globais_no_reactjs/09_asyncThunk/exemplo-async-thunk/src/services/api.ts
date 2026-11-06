import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com'
});

export async function getRepositories(username: string) {
    console.log('1 - Iniciando requisição para:', username);

    try {
        const response = await api.get(`/users/${username}/repos`);

        console.log('2 - Requisição concluída:', response.status);
        console.log('3 - Dados recebidos:', response.data);
        console.log('4 - Quantidade:', response.data.length);

        return response.data;
    } catch (e) {
        console.log('3 - Erro capturado pelo Axios:', e);

        if (axios.isAxiosError(e)) {
            console.log('Status HTTP:', e.response?.status);
            console.log('Resposta da API:', e.response?.data);

            throw new Error(
                e.response?.data?.message || 'Erro ao buscar repositórios'
            );
        }

        throw e;
    }
}