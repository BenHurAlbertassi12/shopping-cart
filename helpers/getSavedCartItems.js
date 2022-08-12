// Implemente a função getSavedCartItems que deve possuir a lógica para apenas retornar o item do localStorage.
// A função getSavedCartItems não deve adicionar um item no localStorage.
const getSavedCartItems = () => localStorage.getItem('cartItems');
// seu código aqui
// course aula webStorage
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
