import { CalculadoraSimple } from './ejemplo/CalculadoraSimple';
import Servicio from './ejemplo/Servicio';

// Mostrar autocomplete de clases
const miServicio = new Servicio(new CalculadoraSimple);

// CTRL + SHIFT + SPACE para ver los "Parameter hints" que son los parámetros que toma esta función
const resultado = miServicio.realizarOperacion("suma", 1 ,2);

// Si hacemos un hover con CTRL apretado, vemos que resultado infirió que es de tipo NUMBER.
console.log(resultado);