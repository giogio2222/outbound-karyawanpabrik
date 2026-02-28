// Floating Top Button functionality
const floatingTop = document.querySelector('.floating-top');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        floatingTop.classList.add('show');
    } else {
        floatingTop.classList.remove('show');
    }
};

floatingTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Automatic TOC for Article Pages
document.addEventListener('DOMContentLoaded', function () {
    const tocContent = document.getElementById('tocContent');
    const articleBody = document.querySelector('.article-content');

    if (tocContent && articleBody) {
        const headings = articleBody.querySelectorAll('h2, h3');
        let html = '<ul class="list-unstyled mb-0">';

        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;
            const level = heading.tagName.toLowerCase() === 'h2' ? 'ps-0' : 'ps-4';
            html += `<li class="${level} mb-2"><a href="#${id}" class="text-decoration-none text-dark">${heading.innerText}</a></li>`;
        });

        html += '</ul>';
        tocContent.innerHTML = html;

        // TOC Toggle
        const tocHeader = document.querySelector('.toc-header');
        const tocIcon = tocHeader.querySelector('i');
        tocHeader.onclick = function () {
            tocContent.classList.toggle('d-none');
            tocIcon.classList.toggle('fa-chevron-down');
            tocIcon.classList.toggle('fa-chevron-up');
        };
    }
});

// Social Share helper
function shareTo(platform, title, url) {
    let link = '';
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    switch (platform) {
        case 'wa':
            link = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
            break;
        case 'fb':
            link = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'tw':
            link = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
            break;
    }
    window.open(link, '_blank');
}
