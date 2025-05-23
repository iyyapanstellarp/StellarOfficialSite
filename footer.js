// footer.js

function getFooter() {
  return `
   <footer class="footer bg-dark text-white">
  <div class="container-fluid py-3 px-0">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center px-3" style="max-width: 1200px; margin: auto; gap: 1rem;">

      <!-- Address Left -->
      <div class="d-flex align-items-start text-start">
        <div class="me-2 mt-1">
          <!-- Location Icon -->
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>
        </div>
        <div>
          <p class="mb-1">No542 New Street, Thirukkokarnam, Pudukkottai - 622005</p>
          <p class="mb-0">Landmark: Opposite Thirukkokarnam Government Hospital</p>
        </div>
      </div>

      <!-- Center: Email and Phone -->
      <div class="d-flex flex-column flex-lg-row align-items-center text-center gap-5">
        <!-- Email -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-envelope me-2" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105z" />
                  </svg>
          hrmanager@stellartechpdkt.org
        </div>

        <!-- Phone -->
        <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-telephone me-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459" />
                  </svg>
          +91 9345173682
        </div>
      </div>

      <!-- Right: Social Media -->
      <div class="d-flex gap-2">
        <a href="#" class="text-white" aria-label="Facebook">
          <!-- Facebook Icon -->
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M8.94 6.5H10V5a1 1 0 0 1 1-1h1V2h-1a3 3 0 0 0-3 3v1.5H6v2h2v5h2v-5h1.293l.207-2H10V6.5z" />
                  </svg>
        </a>
        <a href="https://www.instagram.com/stellarpdkt/" class="text-white" aria-label="Instagram">
          <!-- Instagram Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.8 0 5.5.01 4.7.05c-.8.04-1.5.17-2 .37A4 4 0 0 0 .42 2.7c-.2.5-.34 1.2-.38 2C0 5.5 0 5.8 0 8s.01 2.5.05 3.3c.04.8.17 1.5.37 2a4 4 0 0 0 2.28 2.28c.5.2 1.2.34 2 .38.8.04 1.1.05 3.3.05s2.5-.01 3.3-.05c.8-.04 1.5-.17 2-.37a4 4 0 0 0 2.28-2.28c.2-.5.34-1.2.38-2 .04-.8.05-1.1.05-3.3s-.01-2.5-.05-3.3c-.04-.8-.17-1.5-.37-2A4 4 0 0 0 13.3.42c-.5-.2-1.2-.34-2-.38C10.5 0 10.2 0 8 0Zm0 1.4c2.2 0 2.5.01 3.3.05.6.03 1 .13 1.3.22.4.16.7.35 1 .6.3.3.45.6.6 1 .09.3.19.7.22 1.3.04.8.05 1.1.05 3.3s-.01 2.5-.05 3.3c-.03.6-.13 1-.22 1.3-.16.4-.35.7-.6 1-.3.3-.6.45-1 .6-.3.09-.7.19-1.3.22-.8.04-1.1.05-3.3.05s-2.5-.01-3.3-.05c-.6-.03-1-.13-1.3-.22a2.7 2.7 0 0 1-1-.6 2.7 2.7 0 0 1-.6-1c-.09-.3-.19-.7-.22-1.3C1.4 10.5 1.4 10.2 1.4 8s.01-2.5.05-3.3c.03-.6.13-1 .22-1.3.16-.4.35-.7.6-1a2.7 2.7 0 0 1 1-.6c.3-.09.7-.19 1.3-.22C5.5 1.4 5.8 1.4 8 1.4Z" />
                    <path d="M8 3.8A4.2 4.2 0 1 0 8 12.2a4.2 4.2 0 0 0 0-8.4Zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
                    <circle cx="12.3" cy="3.7" r="1" />
                  </svg>
        </a>
      </div>

    </div>
  </div>
</footer>


  `;
}

function loadFooter(id) {
  const footerContainer = document.getElementById(id);
  if (footerContainer) {
    footerContainer.innerHTML = getFooter();
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
}
