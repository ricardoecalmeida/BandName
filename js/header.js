// Este ficheiro JavaScript tem o código HTML para o Header e a Barra de Navegação (navbar)
// O código abaixo é inserido sempre que for "chamado" o "my-header" e é igual em todas as páginas
// Basta editar o código aqui para que a alteração se reflicta em todas as páginas, não havendo necessidade de o replicar em todas as páginas

class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

      <!-- HEADER -->
    <header class="header-style">
        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <img src="images/logo.png">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi" fill="#ffc60a" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="members.html">Members</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="music.html">Music</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="discography.html">Discography</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="concerts.html">Concerts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="photos.html">Photos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="video.html">Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- FINAL DA NAVBAR -->
    </header>
    <!-- FINAL DO HEADER -->
    `
  }
}
customElements.define("my-header", myHeader);
