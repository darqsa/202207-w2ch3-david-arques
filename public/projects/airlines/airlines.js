const nombre = prompt("Escribe tu nombre de usuario: ");
console.log(`Bienvenido a skylab airlines ${nombre}`);
let costeMedio = 0;
let numEscalas = 0;
const ultVuelos = [];
const vuelos = [
  { id: 0, hacia: "Bilbao", de: "Barcelona", coste: 1600, escala: false },

  { id: 1, hacia: "New York", de: "Barcelona", coste: 700, escala: false },

  { id: 2, hacia: "Los Angeles", de: "Madrid", coste: 1100, escala: true },

  { id: 3, hacia: "Paris", de: "Barcelona", coste: 210, escala: false },

  { id: 4, hacia: "Roma", de: "Barcelona", coste: 150, escala: false },

  { id: 5, hacia: "London", de: "Madrid", coste: 200, escala: false },

  { id: 6, hacia: "Madrid", de: "Barcelona", coste: 90, escala: false },

  { id: 7, hacia: "Tokyo", de: "Madrid", coste: 1500, escala: true },

  { id: 8, hacia: "Shangai", de: "Barcelona", coste: 800, escala: true },

  { id: 9, hacia: "Sydney", de: "Barcelona", coste: 150, escala: true },

  { id: 10, hacia: "Tel-Aviv", de: "Madrid", coste: 150, escala: false },
];

function escalas(objeto) {
  if (vuelos[objeto].escala) {
    numEscalas++;
    return "realiza escala.";
  }

  return "no realiza escala.";
}

for (let i = 0; i < vuelos.length; i++) {
  console.log(
    `El vuelo con origen ${vuelos[i].de}, y destino: ${
      vuelos[i].hacia
    } tiene un coste de ${vuelos[i].coste}€ y,
    ${escalas(i)}`
  );
  costeMedio += vuelos[i].coste;
}

costeMedio = (costeMedio / vuelos.length).toFixed(0);
console.log(
  `El coste medio de los vuelos es ${costeMedio}€ y hay ${numEscalas} vuelos con escalas.`
);

for (let i = vuelos.length - 6; i < vuelos.length; i++) {
  ultVuelos.push(` ${vuelos[i].hacia}`);
}
console.log(`Estos son los destinos de últimos vuelos del día: ${ultVuelos}`);
