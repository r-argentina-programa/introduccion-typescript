import ICalculadora from './ICalculadora';

// SHIFT + ALT + . -> Realizar sugerencias
export class CalculadoraSimple implements ICalculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }
    restar(a: number, b: number): number {
        return a - b;
    }
    dividir(a: number, b: number): number {
        return a / b;
    }
    multiplicar(a: number, b: number): number {
        return a * b;
    }

}