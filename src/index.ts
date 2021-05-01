// sin el || "" da error, porque nombre podría ser de tipo null (ya que prompt puede devolver null!)
// la otra opción es indicar que nombre también puede ser null con | null
// const nombre: string | null = prompt("Cual es tu nombre?");
const nombre: string = prompt("Cual es tu nombre?") || "";

function saludar(nombre?: string): void {
    alert(nombre);
}


saludar('nombre');

// da error porque 2 no es un string
// saludar(2);
