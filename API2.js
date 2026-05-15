async function pokedex(){
    try {
        const nomep = document.getElementById('nomep').value
        const pkm = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomep}`)
        const dados = await pkm.json()
        const tipagens = dados.types.map(t => t.type.name)
        document.getElementById('sprit').innerHTML = `<img src="${dados.sprites.front_default}" alt="pokemon">`
        document.getElementById('sts').innerHTML = `<p id="stas">Status base : ${dados.base_experience}</p>`
        document.getElementById('hgt').innerHTML = `<p id="hgte">Altura : ${dados.height}</p>`
        document.getElementById('pes').innerHTML = `<p id="peso">Peso : ${dados.weight}</p>`
        document.getElementById('tipo').innerHTML = `<p id="tip">tipo : ${tipagens}</p>`
        document.getElementById('id').innerHTML = `<p id="idn">n° pokedex : ${dados.id}</p>`


    }
    catch(error) {
        console.log(error);
    }
}