#TP2 cURL 
# Ferreyra Gastón 16298
# Villoria Federico 13906
# Martín José Ignacio 6895

#Consulta
curl https://jsonplaceholder.typicode.com/posts

#Consulta específica
curl  https://jsonplaceholder.typicode.com/posts/1

#insertar Información
curl -X POST   -H "Content-Type: application/json"   -d '{
    "userId": 10,
    "title": "prueba",
    "body": "hola"
  }'   https://jsonplaceholder.typicode.com/posts

# Modificar Información
curl -X PUT   -H "Content-Type: application/json"   -d '{
    "userId": 1,
    "title": "TITULO ACTUALIZADO"
    "body": "CONTENIDO ACTUALIZADO"
  }'   https://jsonplaceholder.typicode.com/posts/1

#Modificar parcialmente
curl -X PATCH   -H "Content-Type: application/json"   -d '{
    "title": "NUEVO TITULO"
  }'   https://jsonplaceholder.typicode.com/posts/1


#Eliminar información
curl -X DELETE  https://jsonplaceholder.typicode.com/posts/101

