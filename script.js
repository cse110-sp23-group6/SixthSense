$(document).ready(function() {
    let headerText = $('#header-text');
    let text = headerText.text();
    let html = '';

    for(let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            html += '<span class="header-hidden">&nbsp;</span>';
        } else {
            html += `<span class="header-hidden">${text[i]}</span>`;
        }
    }

    headerText.html(html);

    let delay = 100; // time in milliseconds between each character
    $('.header-hidden').each(function() {
        $(this).delay(delay).animate({opacity: 1}, 200);
        delay += 100;
    });
});
