// Cabaña 1 
import cabañaLumaImg from '../assets/images/Cabaña 1 (6 personas).jpg';
import C1_2 from '../assets/images/C1-2.jpg';
import C1_3 from '../assets/images/C1-3.jpg';
import C1_4 from '../assets/images/C1-4.jpg';
import C1_5 from '../assets/images/C1-5.jpg';

// Cabaña 2 
import cabañaFamiliarImg from '../assets/images/Cabaña de 2 (6 personas).jpg';
import C2_1 from '../assets/images/C2-1.jpeg';
import C2_2 from '../assets/images/C2-2.jpeg';
import C2_3 from '../assets/images/C2-3.jpeg';
import C2_4 from '../assets/images/C2-4.jpeg';

// Cabaña 3 
import cabañaArrayanImg from '../assets/images/Cabaña 3 Hot Tub (7 personas).jpg';
import C3_1 from '../assets/images/C3.1.jpg';
import C3_2 from '../assets/images/C3.2.jpg';
import C3_3 from '../assets/images/C3.3.jpg';
import C3_4 from '../assets/images/C3.4.jpg';
import C3_5 from '../assets/images/C3.5.jpg';
import C3_6 from '../assets/images/C3.6.jpg';
import C3_7 from '../assets/images/C3.7.jpg';

// Cabaña Avellano
import cabañaAvellanoImg from '../assets/images/Cabaña Avellano (2 personas).jpg';
import CA_1 from '../assets/images/CA.1.jpg';
import CA_2 from '../assets/images/CA.2.jpg';
import CA_3 from '../assets/images/CA.3.jpg';
import CA_4 from '../assets/images/CA.4.jpg';
import CA_5 from '../assets/images/CA.5.jpg';
import CA_6 from '../assets/images/CA.6.jpg';

// Domo 1 (Coihue)
import domoCoihueImg from '../assets/images/Domo 1 (6-7 personas).jpg';
import DOM1_1 from '../assets/images/DOM1-1.jpeg';
import DOM1_2 from '../assets/images/DOM1-2.jpeg';
import DOM1_3 from '../assets/images/DOM1-3.jpeg';
import DOM1_4 from '../assets/images/DOM1-4.jpeg';
import DOM1_5 from '../assets/images/DOM1-5.jpeg';

// Domo 2 (Panorámico)
import domoPanoramicoImg from '../assets/images/Domo 2 (6 personas).jpeg';
import DOM2_1 from '../assets/images/DOM2-1.jpeg';
import DOM2_2 from '../assets/images/DOM2-2.jpeg';
import DOM2_3 from '../assets/images/DOM2-3.jpeg';
import DOM2_4 from '../assets/images/DOM2-4.jpeg';

// Domo 3 (Íntimo)
import domoIntimoImg from '../assets/images/Domo 3 (4 personas).jpeg';
import DOM3_1 from '../assets/images/DOM3-1.jpeg';
import DOM3_2 from '../assets/images/DOM3-2.jpeg';
import DOM3_3 from '../assets/images/DOM3-3.jpeg';
import DOM3_4 from '../assets/images/DOM3-4.jpeg';

export interface Alojamiento {
  id: string;
  titulo: string;
  subtitulo: string;
  imagen: ImageMetadata; 
  galeria: ImageMetadata[]; 
  capacidad: string;
  descripcion: string;
  
  habitaciones: number;
  baños: string;
  terraza: string;
  incluye: string;
  tag?: {
    texto: string;
    color: string;
  };
}

export const todosLosAlojamientos: Alojamiento[] = [
 {
    id: 'cabaña-arrayan',
    titulo: 'Cabaña Arrayán',
    subtitulo: 'con Hot Tub Privado',
    imagen: cabañaArrayanImg,
    galeria: [
      cabañaArrayanImg,
      C3_1,
      C3_2,
      C3_3,
      C3_4,
      C3_5,
      C3_6,
      C3_7,
    ],
    capacidad: 'Hasta 7 personas',
    habitaciones: 3,
    baños: '2 completos',
    terraza: 'Sí, con parrilla y Hot Tub',
    incluye: 'Wi-Fi y DIRECTV',
    tag: { texto: 'Con Hot Tub', color: 'bg-blue-500' },
    descripcion: "Nuestra cabaña más espaciosa con hot tub privado. Perfecta para grupos grandes que buscan comodidad y lujo en medio del bosque nativo de Chiloé.",
 },
 {
    id: 'domo-coihue',
    titulo: 'Domo Coihue',
    subtitulo: 'Geodésico Familiar',
    imagen: domoCoihueImg,
    galeria: [
      domoCoihueImg,
      DOM1_1,
      DOM1_2,
      DOM1_3,
      DOM1_4,
      DOM1_5,
    ],
    capacidad: 'Hasta 7 personas',
    habitaciones: 2,
    baños: '2 completos',
    terraza: 'Sí, con parrilla',
    incluye: 'Wi-Fi y DIRECTV',
    tag: { texto: 'Domo', color: 'bg-teal-500' },
    descripcion: "Vive una experiencia única en nuestro domo geodésico más grande. Diseño innovador que se integra perfectamente con el entorno natural.",
 },
 {
    id: 'cabaña-familiar',
    titulo: 'Cabaña Familiar',
    subtitulo: 'Clásica del Sur',
    imagen: cabañaFamiliarImg,
    galeria: [
      cabañaFamiliarImg,
      C2_1,
      C2_2,
      C2_3,
      C2_4,
    ],
    capacidad: 'Hasta 6 personas',
    habitaciones: 2,
    baños: '2 completos',
    terraza: 'Sí, con parrilla',
    incluye: 'Wi-Fi y DIRECTV',
    descripcion: "El diseño clásico de una cabaña sureña con todas las comodidades modernas. Amplia y acogedora, perfecta para familias.",
 },
 {
    id: 'cabaña-luma',
    titulo: 'Cabaña Luma',
    subtitulo: 'Corazón del Bosque',
    imagen: cabañaLumaImg,
    galeria: [
      cabañaLumaImg,
      C1_2,
      C1_3,
      C1_4,
      C1_5,
    ],
    capacidad: 'Hasta 6 personas',
    habitaciones: 2,
    baños: '2 completos',
    terraza: 'Sí, con parrilla',
    incluye: 'Wi-Fi y DIRECTV',
    descripcion: "Ubicada en el corazón de nuestro terreno, rodeada de árboles nativos. Tranquilidad absoluta y conexión con la naturaleza.",
 },
 {
    id: 'domo-panoramico',
    titulo: 'Domo Panorámico',
    subtitulo: 'Vistas al Interior',
    imagen: domoPanoramicoImg,
    galeria: [
      domoPanoramicoImg,
      DOM2_1,
      DOM2_2,
      DOM2_3,
      DOM2_4,
    ],
    capacidad: 'Hasta 6 personas',
    habitaciones: 2,
    baños: '1 completo',
    terraza: 'Sí, con parrilla',
    incluye: 'Wi-Fi y DIRECTV',
    tag: { texto: 'Domo', color: 'bg-teal-500' },
    descripcion: "Despierta con una vista privilegiada del mar interior de Chiloé. Arquitectura única que maximiza las vistas panorámicas.",
 },
 {
    id: 'domo-intimo',
    titulo: 'Domo Íntimo',
    subtitulo: 'Refugio para Cuatro',
    imagen: domoIntimoImg,
    galeria: [
      domoIntimoImg,
      DOM3_1,
      DOM3_2,
      DOM3_3,
      DOM3_4,
    ],
    capacidad: 'Hasta 4 personas',
    habitaciones: 1,
    baños: '1 completo',
    terraza: 'Sí, con parrilla',
    incluye: 'Wi-Fi y DIRECTV',
    tag: { texto: 'Domo', color: 'bg-teal-500' },
    descripcion: "Perfecto para familias pequeñas o grupos de amigos. Espacio acogedor con todo lo necesario para una estadía memorable.",
 },
 {
    id: 'cabana-avellano',
    titulo: 'Cabaña Avellano',
    subtitulo: 'Nido para Dos',
    imagen: cabañaAvellanoImg,
    galeria: [
      cabañaAvellanoImg,
      CA_1,
      CA_2,
      CA_3,
      CA_4,
      CA_5,
      CA_6,
    ],
    capacidad: 'Hasta 2 personas',
    habitaciones: 1,
    baños: '1 completo',
    terraza: 'Sí, con parrilla',
    incluye: 'Wi-Fi y DIRECTV',
    tag: { texto: 'Para Parejas', color: 'bg-pink-500' },
    descripcion: "Diseñada para la intimidad y el confort de parejas. Un refugio romántico en medio del bosque chilote.",
 },
];