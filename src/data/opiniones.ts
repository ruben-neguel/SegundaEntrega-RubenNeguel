
import avatarDiana from '../assets/images/perfil-2.jpg';
import avatarRoxana from '../assets/images/Perfil-1.jpeg';
import avatarFelipe from '../assets/images/Perfil-3.jpg';

export interface Opinion {
    nombre: string;
    fecha: string;
    texto: string;
    avatar: ImageMetadata;
    rating: number; 
}

export const todasLasOpiniones: Opinion[] = [
    {
        nombre: 'Diana Claro',
        fecha: 'Hace 2 semanas',
        texto: 'Tuvimos una linda estadía de dos noches en una de las cabañas. Vale la pena llegar arriba por la vista. Es un buen sitio para ir en familia y desconectar. La cocina está equipada con todo y pueden hacer un asado. Además el wifi funciona muy bien. Recomiendo.',
        avatar: avatarDiana,
        rating: 5,
    },
    {
        nombre: 'Roxana Concha',
        fecha: 'Hace 6 meses',
        texto: 'Hermoso lugar....buena ubicación. Excelente vista y las cabañas son muy cómodas y están muy bien equipadas.',
        avatar: avatarRoxana,
        rating: 5,
    },
    {
        nombre: 'Felipe Moya',
        fecha: 'Hace 3 semanas',
        texto: 'Hermoso lugar, perfecto para desconectarse y disfrutar de una hermosa vista, la dueña muy atenta, estuvimos durante un corte de luz y nos asistió con generador para tener energía eléctrica y una lamparita❤️',
        avatar: avatarFelipe,
        rating: 5,
    }
];