---
---
// Mobile navigation toggle
console.log('RoadTripp main.js loaded successfully!');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing components...');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Timeline animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Photo gallery lightbox effect (for both grid and carousel)
    function initLightbox() {
        const photoItems = document.querySelectorAll('.photo-item img, .carousel-item img');
        photoItems.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent carousel navigation when clicking image
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                
                // Get caption from either grid or carousel
                let caption = '';
                const captionElement = this.parentElement.querySelector('.photo-caption');
                if (captionElement) {
                    caption = `<p class="lightbox-caption">${captionElement.textContent}</p>`;
                }
                
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <img src="${this.src}" alt="${this.alt}">
                        ${caption}
                        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                document.body.style.overflow = 'hidden';
                
                // Close lightbox function
                const closeLightbox = () => {
                    if (document.body.contains(lightbox)) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = 'auto';
                    }
                };
                
                // Close lightbox event listeners
                const closeBtn = lightbox.querySelector('.lightbox-close');
                closeBtn.addEventListener('click', closeLightbox);
                
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox) {
                        closeLightbox();
                    }
                });
                
                // ESC key to close
                const handleEscape = (e) => {
                    if (e.key === 'Escape') {
                        closeLightbox();
                        document.removeEventListener('keydown', handleEscape);
                    }
                };
                document.addEventListener('keydown', handleEscape);
            });
        });
    }
    
    // Initialize lightbox on page load
    initLightbox();
    
    // Photo Carousel functionality
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-btn-prev');
        const nextBtn = carousel.querySelector('.carousel-btn-next');
        const dots = carousel.querySelectorAll('.carousel-dot');
        
        let currentSlide = 0;
        const totalSlides = items.length;
        
        // Function to update carousel position
        function updateCarousel() {
            const translateX = -currentSlide * 100;
            track.style.transform = `translateX(${translateX}%)`;
            
            // Update navigation buttons
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Next slide
        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateCarousel();
            }
        }
        
        // Previous slide
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }
        
        // Go to specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let isDragging = false;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            const threshold = 50; // Minimum swipe distance
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left - go to next
                } else {
                    prevSlide(); // Swipe right - go to previous
                }
            }
        });
        
        // Mouse drag support for desktop
        let mouseStartX = 0;
        let isMouseDragging = false;
        
        carousel.addEventListener('mousedown', (e) => {
            mouseStartX = e.clientX;
            isMouseDragging = true;
            carousel.style.cursor = 'grabbing';
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if (!isMouseDragging) return;
            e.preventDefault();
        });
        
        carousel.addEventListener('mouseup', (e) => {
            if (!isMouseDragging) return;
            isMouseDragging = false;
            carousel.style.cursor = 'grab';
            
            const endX = e.clientX;
            const diff = mouseStartX - endX;
            const threshold = 50;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        });
        
        carousel.addEventListener('mouseleave', () => {
            isMouseDragging = false;
            carousel.style.cursor = 'grab';
        });
        
        // Auto-play functionality (optional)
        let autoPlayInterval;
        const autoPlayDelay = 5000; // 5 seconds
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                if (currentSlide < totalSlides - 1) {
                    nextSlide();
                } else {
                    goToSlide(0); // Loop back to first slide
                }
            }, autoPlayDelay);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Start auto-play on carousel hover in/out
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        // Initialize carousel
        updateCarousel();
        carousel.style.cursor = 'grab';
        
        // Start auto-play if there are multiple slides
        if (totalSlides > 1) {
            startAutoPlay();
        }
        
        // Reinitialize lightbox for carousel images
        const carouselImages = carousel.querySelectorAll('.carousel-item img');
        carouselImages.forEach(img => {
            img.style.cursor = 'pointer';
            if (!img.hasAttribute('data-lightbox-initialized')) {
                img.setAttribute('data-lightbox-initialized', 'true');
                img.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent carousel navigation when clicking image
                    
                    const lightbox = document.createElement('div');
                    lightbox.className = 'lightbox';
                    
                    // Get caption from carousel
                    let caption = '';
                    const captionElement = this.parentElement.querySelector('.photo-caption');
                    if (captionElement) {
                        caption = `<p class="lightbox-caption">${captionElement.textContent}</p>`;
                    }
                    
                    lightbox.innerHTML = `
                        <div class="lightbox-content">
                            <img src="${this.src}" alt="${this.alt}">
                            ${caption}
                            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                        </div>
                    `;
                    
                    document.body.appendChild(lightbox);
                    document.body.style.overflow = 'hidden';
                    
                    // Close lightbox function
                    const closeLightbox = () => {
                        if (document.body.contains(lightbox)) {
                            document.body.removeChild(lightbox);
                            document.body.style.overflow = 'auto';
                        }
                    };
                    
                    // Close lightbox event listeners
                    const closeBtn = lightbox.querySelector('.lightbox-close');
                    closeBtn.addEventListener('click', closeLightbox);
                    
                    lightbox.addEventListener('click', function(e) {
                        if (e.target === lightbox) {
                            closeLightbox();
                        }
                    });
                    
                    // ESC key to close
                    const handleEscape = (e) => {
                        if (e.key === 'Escape') {
                            closeLightbox();
                            document.removeEventListener('keydown', handleEscape);
                        }
                    };
                    document.addEventListener('keydown', handleEscape);
                });
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff6b6b, #45b7d1);
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add lightbox styles dynamically
const lightboxStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        animation: fadeIn 0.3s ease forwards;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    
    .lightbox img {
        max-width: 100%;
        max-height: 85vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }
    
    .lightbox-caption {
        color: white;
        margin: 1rem 0 0 0;
        font-size: 1rem;
        line-height: 1.5;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.8rem 1.2rem;
        border-radius: 6px;
        backdrop-filter: blur(10px);
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @keyframes fadeIn {
        to { opacity: 1; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet); 