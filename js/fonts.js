// Este ficheiro JavaScript faz a ligação à font do Google Fonts
// Fonts adicionais que eventualmente pudessem ser utilizadas, poderiam ser importadas apenas aqui, porque a actualização teria efeito em todas as páginas

class myFonts extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        `
    }
}
customElements.define('my-fonts', myFonts)