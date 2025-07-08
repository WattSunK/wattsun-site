// Inject header
fetch('/components/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
  });

// Inject footer (if you have a footer.html)
fetch('/components/footer.html')
  .then(response => response.text())
  .then(html => {
    const footer = document.getElementById('site-footer');
    if (footer) footer.innerHTML = html;
  });
