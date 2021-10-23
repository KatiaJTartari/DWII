function findCep(cep) {
    return fetch('https://viacep.com.br/ws/'+cep + '/json/?${cep}');
}

function findDadosCovid(dadoscovid) {
    return fetch('https://covid19-brazil-api.now.sh/api/report/v1/${dadoscovid}');
    // return fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp/${dadoscovid}');
}

const form = document.querySelector('#dadoscovid_form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const dadoscovid_el = document.querySelector("#dadoscovid");
    const cep = document.querySelector("#cep");
    
    dadoscovid_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';

    // async await
    try{
        const dadoscovidReponse = await findDadosCovid(cep.value);
        const data = await dadoscovidReponse.json();
        if (data.dadoscovid)
            dadoscovid_el.innerHTML = data.dadoscovid;
        else
            dadoscovid_el.innerHTML = data.error;
    } catch (err) {
        console.log(err);
    }

}