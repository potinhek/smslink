function categoria(ctrsms) {
   if (ctrsms === 'router') {
      document.getElementById('roteador').style.display = 'block'
      document.getElementById('hardware').style.display = 'none'
      document.getElementById('acessorio').style.display = 'none'
   } else if (ctrsms === 'hardwpc') {
      document.getElementById('hardware').style.display = 'block'
      document.getElementById('roteador').style.display = 'none'
      document.getElementById('acessorio').style.display = 'none'
   } else if (ctrsms === 'acessory') {
      document.getElementById('acessorio').style.display = 'block'
      document.getElementById('roteador').style.display = 'none'
      document.getElementById('hardware').style.display = 'none'
   }
}
function qtdproduto(qtd) {
   var qtdproduto = document.getElementById('qtd')
   if (qtd <= 0) {
      document.getElementById('qtdmsrazer').value = ''
   }
  
}
function addms(qtd)

}