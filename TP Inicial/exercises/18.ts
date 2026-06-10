// Exportar una funcion que devuelva las noticias simplificadas utilizando una estrategia segun su categoría
//Si es deporte
//Devolver esta interfaz
interface SportNews {
    category: 'sports',
    title: string,
    sourceName:string
}

//Si es ciencia
//Devolver esta interfaz
interface SciencieNews {
  category: "science";
  title: string;
  description: string;
}

//Si es technology
//Devolver esta interfaz
interface SciencieNews {
  category: "science";
  title: string;
    stars: number;
    url:string
}

//Si es cualquier otra
interface SimpleNews{
    title:string
}


import { data } from "../data";
