async function paisn() {
    try {
        const npais = document.getElementById('nomep').value
        const pais = await fetch(`https://restcountries.com/v3.1/name/${npais}`)
        const dadosp = await pais.json()
        document.getElementById('band').innerHTML = `<img src="${dadosp[0].flags.png}" alt="pais">`
        document.getElementById('populac').innerHTML = `<p>${dadosp[0].population}</p>`
        document.getElementById('capitau').innerHTML = `<p>${dadosp[0].capital}</p>`
        document.getElementById('regi').innerHTML = `<p>${dadosp[0].region}</p>`
        document.getElementById('su').innerHTML = `<p>${dadosp[0].subregion}</p>`
        document.getElementById('fus').innerHTML = `<p>${dadosp[0].timezones}</p>`
    } catch (erro) {
        console.log(erro)
    }
}