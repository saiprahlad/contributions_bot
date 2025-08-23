 const chistes = [
  "Mi empleador vino corriendo hacia mí y me dijo: ¡Te estuve buscando todo el día! ¿Dónde has estado? Le respondí: Los buenos empleados son difíciles de encontrar", 
  "¿Cual es el cafe mas peligroso? El ex-preso.", 
  "Mi ordenador me gana al agedrez, pero yo boxeando.",
  "- Uff me cayo mal el estofado\n- ¡Pues no le hables hombre!", 
  "- ¡Soldado, ice la bandera!\n- ¿Si? Pues le quedo muy bonita.",
  "¿Que es un pez en un cine? Un mero espectador", 
  "¿Que le dice un huevo a un sartén? Me tienes frito", 
  "Si los zombies se deshacen con el tiempo ¿Zombiedegradables?", 
  "¿Porque el mar no se seca? Porque no tiene toalla", 
  "Una persona compro una casa en hawaii. A ver cuando la desaloha", 
  "¿Que hace una abeja en el gimnasio? Zumba" 
  ] 
  
  const frases = [
   "En esta isla vivió, durante cuatro largos años, Robinson Crusoe, cuya historia no solamente fascinó y emocionó al mundo entero sino que puso en el mapa del mundo a esta isla en la cual viven ochocientas chilenas y chilenos.",
  "Y durante nuestro Gobierno, vamos a entregar cinco nuevos ‘tiatros’ regionales en Iquique, La Serena, ‘Rancuagua’, Concepción y Punta Arenas.",
  "Si usted maneja, no conduce.",
  "Nunca han mirado las estrellas, la galactea o el fondo del alma? Una cosa es mirar e intentar descubrir y otra cosa ver que es lo sensorial",
  "Marepoto",
  "Tusunami",
  "Es la misma bandera con que hemos ‘cubrido’ tantas veces los féretros de nuestros ‘mártis’",
  "Ha llegado el fin de año, tiempo en que nos preguntamos, qué hicimos bien, qué hicimos mal, qué ‘podimos’ haber hecho mejor"
  ]
 
 // @return {string} | Chiste alealtorio
 function chiste(){
   return chistes[Math.floor(Math.random() * chistes.length)];
  } 
  // @return {string} | Frase alealtoria
 function frase(){
   return frases[Math.floor(Math.random() * frases.length)];
 }
 
module.exports = {
  chiste, frase
} 

