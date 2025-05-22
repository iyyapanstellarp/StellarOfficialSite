// header.js

function getHeader() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center flex-wrap" href="#" style="white-space: normal;">
          <img src="logo.png" alt="Logo" style="height: 40px;" class="me-2">
          <span class="site-title text-wrap" style="font-size: 1rem;">Stellar Technologies</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav text-end text-lg-start">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About.html">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}



function loadHeader(id) {
  const headerContainer = document.getElementById(id);
  if (headerContainer) {
    headerContainer.innerHTML = getHeader();
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
}
