document.addEventListener('DOMContentLoaded', () => {

    /* --- Feature 1: Form Validation (Login Modal) --- */
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Open Modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        clearErrors();
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
            clearErrors();
        }
    });

    // Form Validation Logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        let isValid = true;

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        }

        // Password Validation
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (isValid) {
            alert('Login Successful!');
            loginModal.style.display = 'none';
            loginForm.reset();
        }
    });

    function clearErrors() {
        emailError.textContent = '';
        passwordError.textContent = '';
    }


    /* --- Feature 2: Dynamic Content (Dark Mode Toggle) --- */
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;


    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });


    /* --- Feature 3: Interactive Navigation (Scroll Spy) --- */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav ul li a');


    if (navLinks.length >= 3) {
        navLinks[0].setAttribute('href', '#shop');
        navLinks[1].setAttribute('href', '#home');
        navLinks[2].setAttribute('href', '#stores');
    }

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });


    /* --- Feature 4: Button Click Interaction --- */
    const downloadBtns = document.querySelectorAll('.download-btn, .visit-btn, .order-now-btn, .order-btn');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const text = e.target.textContent || "Action";
            if (text.includes('DOWNLOAD APP')) {
                alert('Redirecting to App Store... (Demo)');
            } else {
                // Creating a simple interaction for other buttons too
                alert(`You clicked: ${text}`);
            }
        });
    });

});
