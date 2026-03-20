const tudo= document.querySelectorAll('.mostrar');

tudo.forEach(item =>{
  const botao = item.querySelector('.aparecer');
  const mais =item.querySelector('.resposta'); 
 botao.addEventListener('click',()=> {
    const ativo = !mais.hidden;
    mais.hidden = ativo;
  if (!ativo){
    botao.style.backgroundImage="url('./assets/images/icon-minus.svg')";
  }else {
    botao.style.backgroundImage="url('./assets/images/icon-plus.svg)";
  };
 }
);
}) 
  








