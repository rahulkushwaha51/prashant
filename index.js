document.addEventListener("DOMContentLoaded", function () {

    function showPage(pageId) {

        const pages = document.querySelectorAll('.content-page');
        pages.forEach(function (page) {
            page.style.display = 'none';
        });

        const pageToShow = document.getElementById(pageId);
        if (pageToShow) {
            pageToShow.style.display = 'block';
        }
    }
    showPage('home');
    const profileLink = document.querySelector('a[href="#profile"]');
    if (profileLink) {
        profileLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('profile');
        });
    }

    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('home');
        });
    }

});



document.getElementById('setting').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.sidebar-submenu').classList.toggle('active');
});

document.querySelector('.mobile-menu-toggle').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.bottom-nav').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.event-overview-btn');
    const sections = document.querySelectorAll('.event-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            tabs.forEach(otherTab => {
                if (otherTab !== tab) {
                    otherTab.classList.remove('active');
                }
            });
            this.classList.toggle('active');
            showSection(target);
        });
    });

    function showSection(target) {
        sections.forEach(section => {
            if (section.getAttribute('id') === target) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Initially show the first section
    showSection('overview');
});


const popupbutton = document.querySelector(".popup-btn");
const popup = document.getElementById('popup');
const backbutton = document.querySelector(".back-btn")
const overlay = document.querySelector(".overlay");

popupbutton.addEventListener('click', () => {
    // document.body.classList.add('blur');
    popup.classList.toggle('active');
    overlay.style.display = 'block';
})
backbutton.addEventListener('click', () => {
    popup.classList.toggle('active');
    overlay.style.display = 'none';
})

