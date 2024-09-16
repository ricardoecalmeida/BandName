// Este ficheiro JavaScript faz a ligação ao Bootstrap
// Outras funcionalidades que eventualmente pudessem ser utilizadas, poderiam ser importadas apenas aqui, porque a actualização teria efeito em todas as páginas

class myBootstrap extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        `
  }
}
customElements.define("my-bootstrap", myBootstrap);