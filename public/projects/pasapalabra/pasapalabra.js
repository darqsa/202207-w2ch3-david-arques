function pasapalabra() {
  const questions = [
    [
      {
        letter: "a",
        answer: "ABDUCIR",
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.",
      },
      {
        letter: "a",
        answer: "ARTERIA",
        question:
          "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
      },
    ],
    [
      {
        letter: "b",
        answer: "BINGO",
        question:
          "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.",
      },
      {
        letter: "b",
        answer: "BILIS",
        question:
          "CON LA B. Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
      },
    ],
    [
      {
        letter: "c",
        answer: "CHURUMBEL",
        question: "CON LA C. Niño, crío, bebé.",
      },
      {
        letter: "c",
        answer: "CEREZA",
        question: "CON LA C. Fruto del cerezo de color rojo OSCURO.",
      },
    ],
    [
      {
        letter: "d",
        answer: "DIARREA",
        question:
          "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.",
      },
      {
        letter: "d",
        answer: "DIERESIS",
        question:
          "CON LA D. Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
      },
    ],
    [
      {
        letter: "e",
        answer: "ECTOPLASMA",
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.",
      },
      {
        letter: "e",
        answer: "ESTRIA",
        question:
          "CON LA E. Línea que se forma en la piel cuando ésta se ha estirado excesivamente.",
      },
    ],
    [
      {
        letter: "f",
        answer: "FACIL",
        question:
          "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.",
      },
      {
        letter: "f",
        answer: "FISIOLOGIA",
        question:
          "CON LA F. Ciencia que estudia las funciones de los órganos de los seres vivos.",
      },
    ],
    [
      {
        letter: "g",
        answer: "GALAXIA",
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.",
      },
      {
        letter: "g",
        answer: "GUITARRA",
        question:
          "CON LA G. Instrumento musical con seis cuerdas que hacemos sonar con los dedos.",
      },
    ],
    [
      {
        letter: "h",
        answer: "HARAKIRI",
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento.",
      },
      {
        letter: "h",
        answer: "HERMANO",
        question:
          "CON LA H. ¿Cómo se llama la persona que tiene el mismo padre y la misma madre que tú?",
      },
    ],
    [
      {
        letter: "i",
        answer: "IGLESOA",
        question: "CON LA I. Templo cristiano.",
      },
      {
        letter: "i",
        answer: "INVISIBLE",
        question:
          "CON LA I. Añade un prefijo a la palabra visible para obtener lo contrario y tendrás…",
      },
    ],
    [
      {
        letter: "j",
        answer: "JABALI",
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.",
      },
      {
        letter: "j",
        answer: "JABON",
        question: "CON LA J. Se utiliza para limpiar el cuerpo.",
      },
    ],
    [
      {
        letter: "k",
        answer: "KAMIKAZE",
        question:
          "CON LA K. Persona que se juega la vida realizando una acción temeraria.",
      },
      {
        letter: "k",
        answer: "KOALA",
        question:
          "CON LA K. Animal parecido a un oso pequeño y que podemos encontrar en Australia.",
      },
    ],
    [
      { letter: "l", answer: "LICANTROPO", question: "CON LA L. Hombre lobo." },
      {
        letter: "l",
        answer: "LIBRERIA",
        question: "CON LA L. Lugar en el que se compran libros.",
      },
    ],
    [
      {
        letter: "m",
        answer: "MISANTROPO",
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas.",
      },
      {
        letter: "m",
        answer: "COMBA",
        question:
          "CONTIENE LA M. Juego que consiste en saltar por encima de una cuerda que se hace pasar por debajo de los pies y sobre la cabeza de quien salta.",
      },
    ],
    [
      {
        letter: "n",
        answer: "NECEDAD",
        question: "CON LA N. Demostración de poca inteligencia.",
      },
      {
        letter: "n",
        answer: "NARANJA",
        question:
          "CON LA N. Del campo semántico de los colores y el color de una fruta con la que podemos hacer zumo.",
      },
    ],
    [
      {
        letter: "ñ",
        answer: "SEÑAL",
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      },
      {
        letter: "ñ",
        answer: "NIÑO",
        question: "CONTIENE LA Ñ. Persona que tiene pocos años.",
      },
    ],
    [
      {
        letter: "o",
        answer: "ORCO",
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.",
      },
      {
        letter: "o",
        answer: "OSCURO",
        question: "CON LA O. El antónimo de claro es...",
      },
    ],
    [
      {
        letter: "p",
        answer: "PROTOSS",
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.",
      },
      {
        letter: "p",
        answer: "PANADERO",
        question:
          "CON LA P. ¿Cómo se llama la persona que vende en una panadería?",
      },
    ],
    [
      {
        letter: "q",
        answer: "QUESO",
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche.",
      },
      {
        letter: "q",
        answer: "EQUILATERO",
        question: "CONTIENE LA Q. Triángulo que tiene todos sus lados iguales.",
      },
    ],
    [
      { letter: "r", answer: "RATON", question: "CON LA R. Roedor." },
      {
        letter: "r",
        answer: "RANA",
        question: "CON LA R. El renacuajo es la cría de la... ",
      },
    ],
    [
      {
        letter: "s",
        answer: "STACKOVERFLOW",
        question:
          "CON LA S. Comunidad salvadora de todo desarrollador informático.",
      },
      {
        letter: "s",
        answer: "SOSA",
        question:
          "CON LA S. Lo contrario de “La sopa está salada” es: “La sopa está...”",
      },
    ],
    [
      {
        letter: "t",
        answer: "TERMINATOR",
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.",
      },
      {
        letter: "t",
        answer: "TARTA",
        question:
          "CON LA T. Pastel grande que no suele faltar en los cumpleaños.",
      },
    ],
    [
      {
        letter: "u",
        answer: "UNAMUNO",
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.",
      },
      {
        letter: "u",
        answer: "USAR",
        question: "CON LA U. Sinónimo de utilizar.",
      },
    ],
    [
      {
        letter: "v",
        answer: "VIKINGOS",
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.",
      },
      {
        letter: "v",
        answer: "VASO",
        question: "CON LA V. Recipiente que sirve para beber.",
      },
    ],
    [
      {
        letter: "w",
        answer: "SANDWICH",
        question:
          "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso.",
      },
      {
        letter: "w",
        answer: "WATERPOLO",
        question:
          "CON LA W. Juego practicado en una piscina entre dos equipo, que consiste en introducir el balón en la portería contraria.",
      },
    ],
    [
      {
        letter: "x",
        answer: "BOTOX",
        question:
          "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética.",
      },
      {
        letter: "x",
        answer: "XILOFONO",
        question:
          "CONT LA X. Instrumento musical formado por láminas de diferentes tamaños, que suenan al golpearlas.",
      },
    ],
    [
      {
        letter: "y",
        answer: "PEYOTE",
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.",
      },
      {
        letter: "y",
        answer: "YEGUA",
        question: "CON LA Y. Hembra del caballo.",
      },
    ],
    [
      {
        letter: "z",
        answer: "ZEN",
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.",
      },
      {
        letter: "z",
        answer: "ZAPATO",
        question: "CON LA Z. Calzado que nos ponemos en los pies para caminar.",
      },
    ],
  ];

  let questionSelector;
  let randomQuestions = [];
  for (let i of questions) {
    i += 1;
    const randomNum = Math.floor(Math.random() * 10);

    if (randomNum <= 4) {
      questionSelector = 0;
    } else {
      questionSelector = 1;
    }
    randomQuestions.push(questions[i][questionSelector]);
  }

  let user;
  function start() {
    user = prompt("Bienvenido al pasapalabra, por favor introduce tu nombre: ");
    console.log("Estas son las reglas del juego: ");
    console.log(
      "Van a salir un total de 27 preguntas, una por cada letra del abecedario (responde sin USAR tildes). Si quieres pensarte una respuesta puedes pasar de pregunta usando: pasapalabra (si dejas la casilla en blanco, contará como incorrecta). Si fallas una pregunta no tendrás una segunda oportunidad. Si quieres finalizar el juego escribe: end. Al final del juego se mostrará tu puntuación."
    );
    console.log("Empecemos.");
  }
  start();

  const ranks = [
    { name: "Jugador 2", punctuation: 16 },
    { name: "Jugador 3", punctuation: 8 },
    { name: "Jugador 4", punctuation: 11 },
    { name: "Jugador 5", punctuation: 2 },
  ];
  let points = 0;
  function ranking() {
    ranks.push({
      name: user,
      punctuation: points,
    });
    ranks.sort((a, b) => b.punctuation - a.punctuation);
    console.log("Estas son las preguntas acertadas de cada jugador:");
    console.table(ranks);
  }

  let userAnswer;
  let answered = 0;
  let notAnswered = [];
  function askQuestions() {
    do {
      for (let i = 0; i < randomQuestions.length; i++) {
        userAnswer = prompt(randomQuestions[i].question).toUpperCase();
        switch (userAnswer) {
          case "PASAPALABRA":
            console.log("Siguiente pregunta.");
            notAnswered.push(randomQuestions[i]);
            break;
          case "END":
            i += 27;
            console.log(
              `Juego terminado, has acertado un total de ${points} preguntas`
            );
            break;
          case randomQuestions[i].answer:
            answered++;
            points++;
            console.log(`Correcto! Tienes un total de ${points} aciertos.`);
            break;
          default:
            answered++;
            points += 0;
            console.log(
              `Incorrecto! La respuesta correcta era ${randomQuestions[
                i
              ].answer.toLowerCase()}`
            );
            break;
        }
      }
      randomQuestions = notAnswered;
      notAnswered = [];
    } while (answered < 27);
    ranking();
  }
  askQuestions();
}
pasapalabra();
