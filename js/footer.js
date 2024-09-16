// Este ficheiro JavaScript tem o código HTML para o Footer
// O código abaixo é inserido sempre que for "chamado" o "my-footer" e é igual em todas as páginas
// Basta editar o código aqui para que a alteração se reflicta em todas as páginas, não havendo necessidade de o replicar em todas as páginas

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <footer>
        <div class="footer">
        <div class="social">
        <a href="https://www.youtube.com/" target="_blank"><i class="icons fa-brands fa-youtube fa-l"></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="icons fa-brands fa-x-twitter fa-l"></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i class="icons fa-brands fa-facebook-f fa-l"></i></a>
        <a href="https://www.instagram.com/" target="_blank"><i class="icons fa-brands fa-instagram fa-l"></i></a>
        <a href="https://applemusic.com/" target="_blank"><i class="icons fa-brands fa-apple fa-l"></i></a>
        <a href="https://spotify.com/" target="_blank"><i class="icons fa-brands fa-spotify fa-l"></i></a>
        </div>
        <div class="copyright">
        <p>Copyright &copy; 2024 <span style="color: var(--maincolor)">BandName</span></p>
        </div>
        </div>
  </footer>
        `
    }
}
customElements.define('my-footer', myFooter)