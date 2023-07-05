document.getElementById('myButton').onclick = function() {
    const block1 = document.getElementById('block1');
    const block2 = document.getElementById('block2');

    if (block1.style.display === 'none') {
        block1.style.display = 'block';
        block2.style.display = 'block';
    } else {
        block1.style.display = 'none';
        block2.style.display = 'none';
    }
}