document.querySelector('.btn').addEventListener('click', function() {
    let checkbox = document.getElementById('confermaPulsante');
    if (checkbox.checked) {
        document.getElementById('welcomePage').style.display = 'none';
        document.getElementById('ciaone').style.display = 'block';
    } else {
        alert("Devi accettare i termini prima di procedere.");
    }
});