async function buscarPersonagem() {
    try {
        const id = document.getElementById('nomep').value;
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        const dados = await response.json();
        document.getElementById('sprit').innerHTML = `<img src="${dados.image}" alt="personagem" style="width: 200px;">`;
        document.getElementById('nome').innerHTML = `<h3>Nome: ${dados.name}</h3>`;
        document.getElementById('raca').innerHTML = `<p>Raça: ${dados.race}</p>`;
        document.getElementById('genero').innerHTML = `<p>Gênero: ${dados.gender}</p>`;
        document.getElementById('ki').innerHTML = `<p>Ki: ${dados.ki}</p>`;
        document.getElementById('maxki').innerHTML = `<p>Ki Máximo: ${dados.maxKi}</p>`;
        document.getElementById('filiacao').innerHTML = `<p>Afiliação: ${dados.affiliation}</p>`;
    } catch (error) {
        console.log(error);
    }
}
