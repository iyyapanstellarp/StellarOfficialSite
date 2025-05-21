// header.js

function getHeader() {
  return `
    <header class="mb-auto bg-dark">
      <div class="d-flex justify-content-between align-items-center p-3">
        <!-- Logo + Title -->
        <div class="d-flex align-items-center">
          <img src="logo.png" alt="Stellar Technologies Logo" style="height: 50px; margin-right: 10px;">
          <h3 class="mb-0 text-white site-title">Stellar Technologies</h3>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav nav-masthead">
          <a class="nav-link active text-white" aria-current="page" href="index.html">Home</a>
          <a class="nav-link text-white" aria-current="page" href="About.html">Features</a>
          <a class="nav-link text-white" aria-current="page" href="#">Service</a>
          <a class="nav-link text-white" aria-current="page" href="#">Contact</a>
        </nav>
      </div>
    </header>
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
