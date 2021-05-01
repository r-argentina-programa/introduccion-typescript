import ICalculadora from "./ICalculadora";

export default class Servicio {
    // CTRL + . inferir "fixes". En este caso "calculadora" no tiene un tipo asignado pero VSCode 
    // lo puede inferir por nosotros
    private calculadora: ICalculadora;
    constructor(calculadora: ICalculadora) { // Ejemplo: cambiar el constructor a private calculadora
        this.calculadora = calculadora;
    }

    realizarOperacion(tipo: string, a: number, b: number): number {
        switch (tipo) {
            case "suma":
                return this.calculadora.sumar(a, b);
            case "resta":
                return this.calculadora.restar(a, b);
            case "division":
                return this.calculadora.multiplicar(a, b);
            case "multiplicacion":
                return this.calculadora.dividir(a, b);
            default:
                throw new Error(`Operación inválida ${tipo}`)
        }
    }
}
