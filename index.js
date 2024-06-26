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
            document.querySelector('.sidebar-submenu').classList.toggle('active');
        });
    }

    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('home');
            document.querySelector('.bottom-nav').classList.toggle('active');
        });
    }
    const walletLink = document.querySelector('a[href="#wallet"]');
    if (walletLink) {
        walletLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('wallet');
            document.querySelector('.sidebar-submenu').classList.toggle('active');
        });
    }
    const paymentLink = document.querySelector('a[href="#payment"]');
    if (paymentLink) {
        paymentLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('payment');
            document.querySelector('.sidebar-submenu').classList.toggle('active');
        });
    }
    const appearenceLink = document.querySelector('a[href="#appearence"]');
    if (appearenceLink) {
        appearenceLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('appearence');
            document.querySelector('.sidebar-submenu').classList.toggle('active');
        });
    }
    const eventdetailsLink = document.querySelector('a[href="#events-details"]');
    if (eventdetailsLink) {
        eventdetailsLink.addEventListener('click', function (event) {
            event.preventDefault();
            showPage('events-details');
            document.querySelector('.bottom-nav').classList.toggle('active');
        });
    }

});

document.getElementById('notification-toggle').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    notification.classList.toggle('active');
    document.querySelector('.bottom-nav').classList.toggle('active');
});

document.getElementById('profile-submenu-toggle').addEventListener('click', function() {
    const profilesubmenu = document.getElementById('profile-submenu');
    profilesubmenu.classList.toggle('active');
    document.querySelector('.bottom-nav').classList.toggle('active');
});


document.getElementById('setting').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.sidebar-submenu').classList.toggle('active');
});

document.querySelector('.mobile-menu-toggle').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.bottom-nav').classList.toggle('active');
    notification.classList.remove('active');
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
const backbutton = document.querySelector(".popup-back-btn")
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

const events = document.querySelector(".events");
const analytics = document.getElementsByClassName("analytics");
const analyticsbutton = document.querySelector('.analytics-btn')
const backtoevent = document.querySelector('.back-to-events')

analyticsbutton.addEventListener('click', () => {
    events.style.display = 'none'
    analytics[0].style.display = 'block'
})

backtoevent.addEventListener('click', () => {
    events.style.display = 'block'
    analytics[0].style.display = 'none'
})


const addmoneybtn = document.querySelector(".add-money-btn")
const addmoney = document.getElementById('addmoney');
const backbuttonmoney = document.querySelector(".back-btn-money")
const overlaymoney = document.querySelector(".overlay-money");
addmoneybtn.addEventListener('click', () => {
    addmoney.style.display = 'block';
    overlaymoney.style.display = 'block';

})
backbuttonmoney.addEventListener('click', () => {
    addmoney.style.display = 'none';
    overlaymoney.style.display = 'none';
})

const selectAllCheckbox = document.getElementById('select-all-checkbox');
const selectAllCheckbox1 = document.getElementById('select-all-checkbox1');
const selectAllCheckbox2 = document.getElementById('select-all-checkbox2');
const checkboxes = document.querySelectorAll('#booking-recieved .table tbody input[type="checkbox"]');
const checkboxes1 = document.querySelectorAll('#booking-confirmed .table tbody input[type="checkbox"]');
const checkboxes2 = document.querySelectorAll('#booking-rejected .table tbody input[type="checkbox"]');

selectAllCheckbox.addEventListener('change', function () {
  
    checkboxes.forEach(checkbox => {
        
        checkbox.checked = selectAllCheckbox.checked;
    });
});
selectAllCheckbox1.addEventListener('change', function () {
  
    checkboxes1.forEach(checkbox => {
        
        checkbox.checked = selectAllCheckbox1.checked;
    });
});
selectAllCheckbox2.addEventListener('change', function () {
  
    checkboxes2.forEach(checkbox => {
        
        checkbox.checked = selectAllCheckbox2.checked;
    });
});
