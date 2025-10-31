// Muelle de las Almas
import muelleAlmasImg from '../assets/images/Muelle de las almas.jpg';
import MLM_1 from '../assets/images/MLM.1.jpg';
import MLM_2 from '../assets/images/MLM.2.jpg';
import MLM_3 from '../assets/images/MLM.3.jpg';
import MLM_4 from '../assets/images/MLM.4.jpg';

// Cascada de Tocoihue
import cascadaTocoihueImg from '../assets/images/Cascada de Tocoihue.jpg';
import CDT_1 from '../assets/images/CDT.1.jpg';
import CDT_2 from '../assets/images/CDT.2.jpg';
import CDT_3 from '../assets/images/CDT.3.jpg';

// Cole-Cole
import coleColeImg from '../assets/images/Cole Cole.jpg';
import COL_1 from '../assets/images/COL.1.jpg';
import COL_2 from '../assets/images/COL.2.jpg';
import COL_3 from '../assets/images/COL.3.webp';
import COL_4 from '../assets/images/COL.4.jpg';
import COL_5 from '../assets/images/COL.5.jpg';
import PlayaColeCole from '../assets/images/Playa-Cole-Cole.jpg';
import RioColeCole from '../assets/images/rio-Cole-Cole.jpg';

// Sendero El Tepual
import elTepualImg from '../assets/images/Sendero el tepueal.jpg';
import SDT_1 from '../assets/images/SDT.1.jpg';
import SDT_2 from '../assets/images/SDT.2.jpg';
import SDT_3 from '../assets/images/SDT.3.jpg';

// Sendero Abtao
import abtaoImg from '../assets/images/sendero-abtao.webp';
import Abtao_1 from '../assets/images/Abtao-1.jpg';
import Abtao_2 from '../assets/images/Abtao-2.jpg';
import Abtao_3 from '../assets/images/Abtao-3.jpg';
import Abtao_4 from '../assets/images/Abtao-4.jpg';
import Abtao_5 from '../assets/images/Abtao-5.jpg';

// Isla Aucar
import aucarImg from '../assets/images/Isla-aucar.jpg';
import Aucar_1 from '../assets/images/Aucar-1.jpg';
import Aucar_2 from '../assets/images/Aucar-2.jpg';
import Aucar_3 from '../assets/images/Aucar-3.jpg';
import Aucar_4 from '../assets/images/Aucar-4.jpg';
import Aucar_5 from '../assets/images/Aucar-5.jpg';

export interface Guia {
    id: string;
    titulo: string;
    descripcion: string;
    imagen: ImageMetadata; 
    galeria: ImageMetadata[]; 
    destacada?: boolean;
    //pestaña individual
    descripcionLarga?: string;
    dificultad?: string;
    duracion?: string;
    distancia?: string;
}

export const todasLasGuias: Guia[] = [
    {
        id: 'muelle-almas',
        titulo: 'Muelle de las Almas',
        descripcion: 'Una caminata mística hacia un icónico muelle con vistas al Pacífico.',
        imagen: muelleAlmasImg,
        galeria: [
            muelleAlmasImg,
            MLM_1,
            MLM_2,
            MLM_3,
            MLM_4,
        ],
        destacada: true,
        descripcionLarga: 'El Muelle de las Almas es uno de los lugares más emblemáticos de Chiloé. Según la mitología local, este muelle es el punto de partida de las almas hacia su destino final. Una caminata de dificultad moderada te llevará a través de bosques nativos hasta llegar a este místico lugar con vistas impresionantes al océano Pacífico.',
        dificultad: 'Moderada',
        duracion: '2-3 horas',
        distancia: '8 km ida y vuelta',
    },
    {
        id: 'cascada-tocoihue',
        titulo: 'Cascada de Tocoihue',
        descripcion: 'Descubre el salto de agua más impresionante de la isla.',
        imagen: cascadaTocoihueImg,
        galeria: [
            cascadaTocoihueImg,
            CDT_1,
            CDT_2,
            CDT_3,
        ],
        descripcionLarga: 'La Cascada de Tocoihue es un salto de agua espectacular escondido en el bosque nativo chilote. Con una caída de aproximadamente 25 metros, es uno de los tesoros naturales mejor guardados de la isla. El sendero te lleva a través de un denso bosque de tepas, coihues y helechos.',
        dificultad: 'Fácil',
        duracion: '1-2 horas',
        distancia: '3 km ida y vuelta',
    },
    {
        id: 'sendero-cole-cole',
        titulo: 'Sendero a Cole-Cole',
        descripcion: 'Una aventura hacia una de las playas más vírgenes de Chile.',
        imagen: coleColeImg,
        galeria: [
            coleColeImg,
            COL_1,
            COL_2,
            COL_3,
            COL_4,
            COL_5,
            PlayaColeCole,
            RioColeCole,
        ],
        descripcionLarga: 'El sendero a Cole-Cole es una de las caminatas más hermosas y desafiantes de Chiloé. Te llevará a través de bosques nativos, ríos cristalinos y finalmente a una playa virgen con dunas de arena blanca. Un verdadero paraíso para los amantes de la naturaleza y la aventura.',
        dificultad: 'Difícil',
        duracion: '6-8 horas',
        distancia: '25 km ida y vuelta',
    },
    {
        id: 'sendero-el-tepual',
        titulo: 'Sendero El Tepual',
        descripcion: 'Camina por pasarelas sobre un bosque encantado y único.',
        imagen: elTepualImg,
        galeria: [
            elTepualImg,
            SDT_1,
            SDT_2,
            SDT_3,
        ],
        descripcionLarga: 'El Tepual es un sendero con pasarelas de madera que te permite caminar sobre un bosque pantanoso único en su tipo. Los tepus (árboles nativos) crecen en suelo anegado, creando un ecosistema fascinante. Ideal para fotografía y observación de aves.',
        dificultad: 'Fácil',
        duracion: '1 hora',
        distancia: '2 km circular',
    },
    {
        id: 'sendero-abtao',
        titulo: 'Sendero Abtao',
        descripcion: 'Un recorrido sereno a través de la densa flora nativa.',
        imagen: abtaoImg,
        galeria: [
            abtaoImg,
            Abtao_1,
            Abtao_2,
            Abtao_3,
            Abtao_4,
            Abtao_5,
        ],
        descripcionLarga: 'El Sendero Abtao te sumerge en la esencia del bosque chilote. Un camino tranquilo y bien mantenido que te permite conectar con la naturaleza en su estado más puro. Perfecto para familias y aquellos que buscan una caminata relajante.',
        dificultad: 'Fácil',
        duracion: '1-2 horas',
        distancia: '4 km circular',
    },
    {
        id: 'isla-aucar',
        titulo: 'Isla Aucar',
        descripcion: 'Explora los caminos de la mística isla de las almas navegantes.',
        imagen: aucarImg,
        galeria: [
            aucarImg,
            Aucar_1,
            Aucar_2,
            Aucar_3,
            Aucar_4,
            Aucar_5,
        ],
        destacada: true,
        descripcionLarga: 'La Isla Aucar es un lugar lleno de misterio y belleza. Accesible solo por bote, esta pequeña isla ofrece senderos costeros con vistas espectaculares, flora única y una atmósfera de tranquilidad absoluta. Un destino imperdible para los aventureros.',
        dificultad: 'Moderada',
        duracion: '3-4 horas',
        distancia: '6 km (requiere transporte marítimo)',
    },
];