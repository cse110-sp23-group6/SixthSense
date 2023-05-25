document.addEventListener("DOMContentLoaded", function() {
    let headerText = document.getElementById('header-text');
    let text = headerText.textContent;
    let html = '';

    for(let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            html += '<span class="header-hidden">&nbsp;</span>';
        } else {
            html += `<span class="header-hidden">${text[i]}</span>`;
        }
    }

    headerText.innerHTML = html;

    let delay = 100; // time in milliseconds between each character
    document.querySelectorAll('.header-hidden').forEach(function(elem) {
        setTimeout(function() {
            elem.style.opacity = 1;
        }, delay);
        delay += 100;
    });
});
