// Exporta una función que reciba la categoría y devuelva las noticias filtradas por una categoría específica

//Importar los datos desde el archivo data.ts
import { data, News } from "../data";


function filterNewsByCategory(category: string): News[] {
  return data.news.filter((news) => news.category === category);
}

console.log(filterNewsByCategory("general"));

