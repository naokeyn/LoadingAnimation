window.onload = async function() {
    await new Promise(s => setTimeout(s, 3000));
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }