let multiTipo: number | string;

multiTipo = 10;
multiTipo = "Olá mundo";
//multiTipo  false // erro

function soma (x: string | number, y: string | number) {
    if (typeof x === "string" && typeof y === "string") {
        console.log("Não é possível somar, mas sim concatenar.");
        console.log(x.concat(y));
    }
    if (typeof x === "number" && typeof y === "number") {
        console.log("A soma é: ");
        console.log(`${x} + ${y} = ${x + y}`);
        
    }
}

//soma(11, 10);
soma("Lucas", "Ferreira");