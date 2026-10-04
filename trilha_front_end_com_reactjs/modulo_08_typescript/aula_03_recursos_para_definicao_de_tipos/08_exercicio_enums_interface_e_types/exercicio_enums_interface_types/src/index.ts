enum StatusPedido {
    Pendente,
    Processando,
    Concluido,
    Cancelado
}

type MetodoPagamento = "Cartão" | "Boleto" | "Pix";

interface Pedido {
    id: string;
    produtos: string[];
    quantidades: number[];
    status: StatusPedido,
    metodoPagamento: MetodoPagamento
}


const precos: Record<string, number> = {
    "Camiseta": 50,
    "Calça": 90,
    "Tênis": 250
}

function exibirPedido(pedido: Pedido) : void {
    let total = 0;

    for (let i = 0; i < pedido.produtos.length; i++) {
        let produto = pedido.produtos[i];
        let quantidade = pedido.quantidades[i];

        if (produto !== undefined && quantidade !== undefined) {
            const preco = precos[produto];

            if (preco !== undefined) {
                total += preco * quantidade;
            }
        }
    }

    console.log(`Pedido #${pedido.id}`);
    console.log(`Status: ${pedido.status}`);
    console.log(`Total: R$ ${total}`);
    console.log(`Método de Pagamento: ${pedido.metodoPagamento}`);
    
    
}

const pedido1: Pedido = {
    id: "01",
    produtos: ["Camiseta", "Calça"],
    quantidades: [2, 1],
    status: StatusPedido.Concluido,
    metodoPagamento: "Cartão"
}


exibirPedido(pedido1);

