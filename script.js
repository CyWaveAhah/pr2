document.addEventListener('DOMContentLoaded', function() {
    initMenuPage();
    
    initRegistrationForm();
    
    highlightCurrentPage();
});

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initMenuPage() {

    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (categoryButtons.length === 0) return;
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        
        if (password.length < 6) {
            alert('Пароль должен содержать не менее 6 символов!');
            return;
        }
        
        const terms = document.querySelector('input[name="terms"]');
        if (!terms.checked) {
            alert('Необходимо согласиться с условиями обработки персональных данных!');
            return;
        }
        
        alert('Регистрация успешно завершена! Добро пожаловать в Happy Corner!');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
}