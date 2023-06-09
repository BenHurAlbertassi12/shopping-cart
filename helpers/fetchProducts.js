const fetchProducts = async (busca) => {
  try {
    const linqui = `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
    const buscado = await fetch(linqui);
    const resultado = await buscado.json();
    return resultado.results;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
// exercicio resolvido com ajuda da mentoria. dia 10 de Agosto. 
