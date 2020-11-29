class Base{
    constructor(nombre, minutos){
        this.nombre = nombre;
        this.minutos = minutos;
        this.siguiente = null;
    };

};

class Ruta{
    constructor(){
        this.inicio = null;
        this.base = new Base();
    };

    agregar(nombre, minutos){
        const base = new Base(nombre, minutos);

		if(this.inicio) {
			var aux = this.inicio;
			while(aux.siguiente != this.inicio) {
				aux = aux.siguiente;
            };
			aux.siguiente = base;
		} else {
			this.inicio = base;
		};
		base.siguiente = this.inicio;
    };

    buscar(nombre){
        var aux = this.inicio;
		do {
			if (aux.nombre == nombre) {
                return aux;
            } else {
                aux = aux.siguiente;
            };
		} while(aux != this.inicio);
        return null;
    };
    
    eliminar(nombre){
        let aux = this.inicio;
        let anterior = null;
        let auxi

        if(aux.nombre == nombre){
            this.inicio = aux.siguiente;
            auxi = this.inicio;

            while(auxi.siguiente.nombre !== nombre){
                auxi = auxi.siguiente;
            }
            auxi.siguiente = this.inicio;
        } else{
            while(aux != null){
                if(aux.nombre == nombre){
                    if(!anterior){
                        this.inicio = aux.siguiente;
                    } else{
                        anterior.siguiente = aux.siguiente;
                    };
                    return aux.nombre;
                };
                anterior = aux;
                aux = aux.siguiente;
            };
            return null;
        };
    };

    imprimir(){
        let aux = this.inicio
		if (aux) {
			do {
				console.log("Restan", aux.minutos, " minutos para llegar a la base ",aux.nombre);
				aux = aux.siguiente;
            }while (aux != this.inicio);
            console.log("Regresa a la base ", aux.nombre);
		} else {
            return null;
        };
    };
};

var nombre = document.querySelector("#nombreAg");
var tiempo = document.querySelector("#tiempoAg");
var btnAg = document.querySelector("#agregarBtn");
var nombreBu = document.querySelector("#nombreBu");
var btnBu = document.querySelector("#buscarBtn");
var nombreEl = document.querySelector("#nombreEl");
var btnEl = document.querySelector("#eliminarBtn");
var btnIm = document.querySelector("#imprimirBtn");


var nRuta = new Ruta();
var nBase = new Base(nombre.Value, tiempo.value)


btnAg.addEventListener('click', () => {

    if(nombre.value == "" || tiempo.value == 0){
        alert("Llene todos los campos.");
        return null;
        
    }   else{
        nRuta.agregar(String(nombre.value), Number(tiempo.value));
        console.log(nRuta);

    };
});

btnBu.addEventListener('click', () => {
    if(nRuta.buscar(nombreBu.value)){
        console.log(nRuta.buscar(nombreBu.value))
    } else {
        alert("Base no identificada")
    };

});

btnEl.addEventListener('click', () => {
    nRuta.eliminar(nombreEl.value);
    console.log(nRuta);

});

btnIm.addEventListener('click', () => {
    console.log(nRuta.imprimir());

});

/*
nRuta.agregar("A", 15);
console.log(nRuta);

nRuta.agregar("B", 20);
console.log(nRuta);

nRuta.agregar("C", 50);
console.log(nRuta);

console.log(nRuta.buscar("B"));
console.log(nRuta.buscar("A"));
console.log(nRuta.buscar("F"));

//nRuta.eliminar("B");
//nRuta.eliminar("A");
console.log(nRuta);

console.log(nRuta.imprimir());
*/