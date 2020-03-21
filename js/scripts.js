// Manages opening and closing of menu.
var navButton = document.getElementById('nav-button'),
	nav = document.getElementsByTagName('nav')[0],
    body = document.getElementsByTagName('body')[0];
    header = document.getElementsByTagName('header')[0];

// Manage menu opening & closing
navButton.onclick = function() {
	if (navButton.className === 'open') {
		navButton.className = '';
		nav.className = '';
		body.style.overflow = null;
	} else {
		navButton.className = 'open';
		nav.className = 'open';
		body.style.overflow = 'hidden';
	}
};

// Go through all the nav items; if the nav item is currently active give it the .active class to highlight it
var navItems = document.querySelectorAll('nav a');
for (i = 0; i < navItems.length; i++) {
    if (navItems[i].href.endsWith(window.location.pathname)) {
        navItems[i].className = 'active';
    }
}
