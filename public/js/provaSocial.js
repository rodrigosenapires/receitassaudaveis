const jsonUrl = '/comentarios-face.json';

fetch(jsonUrl)
  .then(response => response.json())
  .then(data => {
    const infoDiv = document.getElementById('json-info');
    infoDiv.innerHTML = `<p>Version: ${data.version}</p>
                          <p>Title: ${data.title}</p>
                          <p>Type: ${data.type}</p>`;
  })
  .catch(error => console.error(error));
