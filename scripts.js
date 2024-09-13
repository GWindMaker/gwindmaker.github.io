
document.addEventListener('keydown', function(event) {

    if (event.key === 'Q' || event.key === 'q') {
        let hint = document.getElementById('hint');
        hint.classList.toggle('hidden');
        alert('?');
    }


    if (event.key === 'S' || event.key === 's') {
        let hint = document.getElementById('hint2');
        hint.classList.toggle('hiddens');
        alert('?');
    }
});
