function gerar() {

    var tabutxt = document.getElementById('tabuada')
    var resul = document.getElementById('result')

    var tabu = Number(tabutxt.value)

    resul.innerHTML =``

    if (tabu <= 0) {
    window.alert('Erro, Digite novamente!!')
    tabutxt.value =""

    }else{
    for (var cont = 1; cont <=10;cont++) {
    var soma = tabu*cont    
    var item = document.createElement('option')
    item.text= `${tabu} x ${cont} = ${soma} `
   
    resul.appendChild(item)
    
      
    

 
   
                                      }        
        }
}

function limpar () {

var tabutxt = document.getElementById('tabuada').value =""
var resul = document.getElementById('result')

resul.innerHTML =``

}