// procurar o botao
document.querySelector("#add-time")
// quando clicar no botao
.addEventListener('click', cloneField)

// executar uma açao
function cloneField() {
    // duplicar os campos. que campos?
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false

    // pegar os campos. que campos?
    const fields = newfieldContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })


    // colocar na pagina. onde??
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}
    