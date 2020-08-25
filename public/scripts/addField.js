//procurar o botão

document.querySelector("#add-time")
//quando clicar no botão

.addEventListener('click', cloneField)
//executar uma ação

function cloneField(){
    //duplicar os campos
    //quais campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //clodenode duplica, o Node, se refere a tags html
    
    //Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    // para cada campo limpar
    fields.forEach(function (field) {
        //pegar o field do momento e limpa
        field.value = ""
    })
    
    //colocar na página. onde?
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
   
   
}





