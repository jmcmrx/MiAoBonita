
const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg"
];

const frases = [
    "Nunca Soltaré tu Mano 🥰",
    "Pero que bonita que estás 😍",
    "Te Amo en todas tus etapas 🥰",
    "Mi Amor Bonito ❤️",
    "Mi Corazón de Melón 👩‍❤️‍👨",
    "Eres la mejor, nunca lo dudes 🫶",
    "Tu puedes, con todo lo que te propongas 👩‍❤️‍👨",
    "Te Amo por lo Fuerte que eres 🥰",
    "Yo también te extraño mi corazón 🥹",
    "Estos son momentos bonitos que pasamos 🫶",
    "Mi Ojitos Bonitos ❤️",
    "Las Frases no se repiten, es que todas son siempre tuyas 💖",
    "Te Amo Muchoooooo ❤️",
    "Locamente Enamorado Tuyo 😍",
    "Mira como sonrié mi chica coqueta",
    "Amo tu sonrisa mi amor 💖",
    "Si me necesitas Llamame - 934949663 🥹",
    "Me encanta verte así, sonriendo 💖",
];

document.addEventListener('DOMContentLoaded', obtenerListaDeRecursos);

function obtenerListaDeRecursos() {
    fetch('src/img')
        .then(response => response.json())
        .then(data => {
            imagenes = data;
            console.log('Lista de imágenes:', imagenes);
        })
        .catch(error => console.error('Error al obtener la lista de imágenes:', error));
}

function mostrarImagenAleatoria() {
    const galeria = document.getElementById("galeria");
    const botonCorazon = document.getElementById("botonCorazon");
    const headerFrase = document.getElementById("frase");

    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);

    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = "src/img/" + imagenes[indiceAleatorio];
    nuevaImagen.alt = "Imagen Aleatoria";

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    headerFrase.textContent = fraseAleatoria;

    galeria.innerHTML = "";
    galeria.appendChild(nuevaImagen);

    botonCorazon.classList.add("jump");

    setTimeout(() => {
        botonCorazon.classList.remove("jump");
    }, 500);
}
