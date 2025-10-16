document.addEventListener('DOMContentLoaded', function() {
    
    const typed = new Typed('.typing-text', {
        strings: ['18 years old', 'Grade 12 senior highschool', 'Web Designer'],
        typeSpeed: 69,
        backSpeed: 69,
        loop: true,
    });
    
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };
    
    
    const cvModal = document.getElementById('cv-modal');
    const downloadCvBtn = document.getElementById('download-cv');
    const closeCvBtn = cvModal.querySelector('.close-btn');
    const alrightBtn = cvModal.querySelector('.modal-btn');
    
    downloadCvBtn.onclick = (e) => {
        e.preventDefault();
        cvModal.style.display = "block";
    }
    
    closeCvBtn.onclick = () => {
        cvModal.style.display = "none";
    }
    
    alrightBtn.onclick = () => {
        cvModal.style.display = "none";
    }
    
    const testimonialModal = document.getElementById('testimonial-modal');
    const successModal = document.getElementById('success-modal');
    const addTestimonialBtn = document.getElementById('add-testimonial-btn');
    const closeTestimonialBtn = testimonialModal.querySelector('.close-btn');
    const testimonialForm = document.getElementById('testimonial-form');
    const testimonialList = document.querySelector('.testimonial-list');

    addTestimonialBtn.onclick = () => {
        testimonialModal.style.display = "block";
    }
    
    closeTestimonialBtn.onclick = () => {
        testimonialModal.style.display = "none";
    }

    testimonialForm.onsubmit = (e) => {
        e.preventDefault();
        
        const name = document.getElementById('testimonial-name').value;
        const position = document.getElementById('testimonial-position').value;
        const text = document.getElementById('testimonial-text').value;
        
        
        if(text.length < 10) {
            const errorEl = document.getElementById('char-count-error');
            errorEl.textContent = 'Testimonial must be at least 10 characters.';
            return;
        }

        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

        const newTestimonial = `
            <div class="testimonial-card">
                <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
                <p>${text}</p>
                <div class="rating">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <div class="author">
                    <div class="author-initials">${initials}</div>
                    <div>
                        <strong>${name}</strong>
                        <span>${position}</span>
                    </div>
                </div>
            </div>
        `;

        testimonialList.insertAdjacentHTML('afterbegin', newTestimonial);
        
        testimonialModal.style.display = "none";
        testimonialForm.reset();
        
        
        successModal.style.display = "block";
    }

    
    const successModalBtn = successModal.querySelector('.modal-btn');
    successModalBtn.onclick = () => {
        successModal.style.display = "none";
    }
    
    
    window.onclick = (e) => {
        if (e.target == cvModal) {
            cvModal.style.display = "none";
        }
        if (e.target == testimonialModal) {
            testimonialModal.style.display = "none";
        }
        if (e.target == successModal) {
            successModal.style.display = "none";
        }
    }
});

