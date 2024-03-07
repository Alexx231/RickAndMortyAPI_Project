// Realiza una solicitud GET a la API de Rick and Morty para obtener los personajes
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json()) // Convierte la respuesta en formato JSON
  .then(data => {
    const characters = data.results; // Obtiene la lista de personajes de la respuesta
    characters.forEach(character => {
      // Crea un elemento HTML para cada personaje y lo agrega al contenedor con id "characters"
      const characterElement = `
        <div class="col-md-4 my-3">
          <div class="card">
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Status: ${character.status}</p>
              <p class="card-text">Species: ${character.species}</p>
              <p class="card-text">Gender: ${character.gender}</p>
            </div>
          </div>
          <div class="card-back" style="background-image: url('img/portal.webp');">
                
          </div>
        </div>
      `;
      $('#characters').append(characterElement); // Agrega el elemento al contenedor
    });
  })
  .catch(error => {
    console.error('Error:', error); // Muestra un mensaje de error en la consola si ocurre algún problema
  });

// Función para buscar un personaje por nombre
function searchCharacter() {
  const name = document.getElementById('search').value; // Obtiene el valor del campo de búsqueda
  fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => {
      const characters = data.results; // Obtiene la lista de personajes de la respuesta
      document.getElementById('characters').innerHTML = ''; // Limpia el contenido del contenedor
      characters.forEach(character => {
        // Crea un elemento HTML para cada personaje y lo agrega al contenedor con id "characters"
        const characterElement = `
          <div class="col-md-4 my-3">
            <div class="card">
              <img src="${character.image}" class="card-img-top" alt="${character.name}">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text status">${i18next.t('Status')}: ${character.status}</p>
                <p class="card-text species">${i18next.t('Species')}: ${character.species}</p>
                <p class="card-text gender">${i18next.t('Gender')}: ${character.gender}</p>
              </div>
            </div>
            <div class="card-back" style="background-image: url('img/portal.webp');">
                  
            </div>
          </div>
        `;
        $('#characters').append(characterElement); // Agrega el elemento al contenedor
      });
      updateContent(); // Actualiza el contenido (función no mostrada en el código proporcionado)
    })
    .catch(error => {
      console.error('Error:', error); // Muestra un mensaje de error en la consola si ocurre algún problema
    });
}