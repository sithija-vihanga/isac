console.log('script.js loaded at', new Date().toISOString());

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    let data; // Global for university modal access

    // Fallback content
    const fallbackContent = {
        about: "ISAC helps students secure admissions to top Italian universities for engineering programs.",
        whyItaly: "Experience world-class engineering education in Italy, blending cutting-edge innovation with rich cultural heritage.<h4>Cultural Immersion</h4><ul><li>Experience Italy's rich culture</li></ul>",
        tolc_description: "Prepare for the TOLC-I entrance exam for engineering programs in Italy. It consists of 50 MCQ questions over 1 hour and 50 minutes, available online at home for €39.<h4>Exam Format</h4><ul><li>Multiple-choice questions</li></ul>",
        classes_description: "Join our interactive classes for TOLC-I preparation.",
        duration: "4 months (flexible start dates)",
        syllabus_items: ["Logic", "Mathematics", "Physics", "Chemistry", "General Knowledge"],
        university1_name: "University of Bologna",
        university1_degrees: "Civil and Environmental Engineering",
        university1_description: "World's oldest university with excellent engineering programs.<h4>Facilities</h4><ul><li>Modern labs</li></ul>",
        university1_admissions: "Requires high school diploma and TOLC-I score.",
        university2_name: "University of Napoli Federico II",
        university2_degrees: "Applied Computer Science and AI",
        university2_description: "Leading AI and computer science programs in Naples.<h4>Research</h4><ul><li>AI innovation</li></ul>",
        university2_admissions: "Requires STEM background and TOLC-I score.",
        university3_name: "University of La Sapienza, Rome",
        university3_degrees: "Artificial Intelligence",
        university3_description: "Top-tier AI programs in historic Rome.<h4>Facilities</h4><ul><li>Advanced research centers</li></ul>",
        university3_admissions: "Requires TOLC-I score and interview.",
        university4_name: "University of Pavia",
        university4_degrees: "Building Construction Engineering",
        university4_description: "Focus on practical engineering in a student-friendly city.<h4>Programs</h4><ul><li>Hands-on projects</li></ul>",
        university4_admissions: "Requires high school diploma and TOLC-I score.",
        testimonial1_quote: "They guided me in the admissions process and helped me with the entrance exam preparation.",
        testimonial1_name: "Ayesh",
        testimonial1_degree: "Artificial Intelligence",
        testimonial1_university: "University of Napoli Federico II",
        news1_title: "ISAC News",
        news1_description: "Latest updates from ISAC.<h4>Highlights</h4><ul><li>New programs</li></ul>",
        news2_title: "ISAC Events",
        news2_description: "Recent events hosted by ISAC.<h4>Activities</h4><ul><li>Workshops</li></ul>",
        news3_title: "ISAC Partnerships",
        news3_description: "New collaborations with universities.<h4>Outcomes</h4><ul><li>Enhanced programs</li></ul>",
        scholarships: "Explore scholarships for engineering students in Italy.<div class='flex flex-col gap-4 mt-4'><h3 class='accordion-header text-xl font-bold flex justify-between cursor-pointer'>Scholarships up to €6000/year <i class='fas fa-chevron-down'></i></h3><div class='accordion-content text-gray-700'>Merit-based scholarships covering living expenses and tuition for outstanding students in engineering programs.</div><h3 class='accordion-header text-xl font-bold flex justify-between cursor-pointer'>Course Fee Waivers up to €156/year <i class='fas fa-chevron-down'></i></h3><div class='accordion-content text-gray-700'>Income-based waivers reducing tuition fees to as low as €156/year for eligible international students.</div></div>",
        hero_texts: ["Welcome to ISAC", "Study Engineering in Italy", "Join Top Universities", "Start Your Journey"]
    };

    // Debug function to check DOM elements
    function debugElements() {
        const elements = [
            'hero-headline', 'about-content', 'why-italy-content', 'tolc-description',
            'classes-description', 'duration', 'syllabus-list', 'university1-name',
            'university1-degrees', 'university1-description', 'university2-name',
            'university2-degrees', 'university2-description', 'university3-name',
            'university3-degrees', 'university3-description', 'university4-name',
            'university4-degrees', 'university4-description', 'testimonial1-quote',
            'testimonial1-name', 'testimonial1-degree', 'testimonial1-university',
            'news1-title', 'news1-description', 'news2-title', 'news2-description',
            'news3-title', 'news3-description', 'scholarships-content'
        ];
        elements.forEach(id => {
            const el = document.getElementById(id);
            console.log(`Element ${id}: ${el ? 'Found' : 'Not found'}`);
        });
    }

    // Apply content (real or fallback)
    function applyContent(content) {
        console.log('Applying content:', Object.keys(content));
        document.getElementById('about-content').innerHTML = content.about;
        document.getElementById('why-italy-content').innerHTML = content.whyItaly;
        document.getElementById('tolc-description').innerHTML = content.tolc_description;
        document.getElementById('classes-description').innerHTML = content.classes_description;
        document.getElementById('duration').innerHTML = content.duration;
        const syllabusList = document.getElementById('syllabus-list');
        syllabusList.innerHTML = '';
        content.syllabus_items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            syllabusList.appendChild(li);
        });
        document.getElementById('university1-name').innerHTML = content.university1_name;
        document.getElementById('university1-degrees').innerHTML = content.university1_degrees;
        document.getElementById('university1-description').innerHTML = content.university1_description;
        document.getElementById('university2-name').innerHTML = content.university2_name;
        document.getElementById('university2-degrees').innerHTML = content.university2_degrees;
        document.getElementById('university2-description').innerHTML = content.university2_description;
        document.getElementById('university3-name').innerHTML = content.university3_name;
        document.getElementById('university3-degrees').innerHTML = content.university3_degrees;
        document.getElementById('university3-description').innerHTML = content.university3_description;
        document.getElementById('university4-name').innerHTML = content.university4_name;
        document.getElementById('university4-degrees').innerHTML = content.university4_degrees;
        document.getElementById('university4-description').innerHTML = content.university4_description;
        document.getElementById('testimonial1-quote').innerHTML = content.testimonial1_quote;
        document.getElementById('testimonial1-name').innerHTML = content.testimonial1_name;
        document.getElementById('testimonial1-degree').innerHTML = content.testimonial1_degree;
        document.getElementById('testimonial1-university').innerHTML = content.testimonial1_university;
        document.getElementById('news1-title').innerHTML = content.news1_title + ' <i class="fas fa-chevron-down"></i>';
        document.getElementById('news1-description').innerHTML = content.news1_description;
        document.getElementById('news2-title').innerHTML = content.news2_title + ' <i class="fas fa-chevron-down"></i>';
        document.getElementById('news2-description').innerHTML = content.news2_description;
        document.getElementById('news3-title').innerHTML = content.news3_title + ' <i class="fas fa-chevron-down"></i>';
        document.getElementById('news3-description').innerHTML = content.news3_description;
        document.getElementById('scholarships-content').innerHTML = content.scholarships;
        const headline = document.getElementById('hero-headline');
        let textIndex = 0;
        function rotateText() {
            headline.innerHTML = content.hero_texts[textIndex];
            textIndex = (textIndex + 1) % content.hero_texts.length;
        }
        rotateText();
        setInterval(rotateText, 4000);
    }

    // Hero carousel with smoother transition
    function initHeroCarousel() {
        const hero = document.querySelector('.hero');
        let imageIndex = 0;
        const heroImages = ['resources/hero1.jpg', 'resources/hero2.jpg', 'resources/hero3.jpg', 'resources/hero4.jpg'];
        function switchImage() {
            if (hero) {
                hero.style.backgroundImage = `url('${heroImages[imageIndex]}')`;
                imageIndex = (imageIndex + 1) % heroImages.length;
            }
        }
        if (hero) {
            switchImage();
            setInterval(switchImage, 4000);
        }
    }

    // Initialize accordions with animation
    function initAccordions() {
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                if (content) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                    header.querySelector('i').classList.toggle('fa-chevron-up');
                    header.querySelector('i').classList.toggle('fa-chevron-down');
                }
            });
        });
    }

    // Fetch content.json
    console.log('Attempting to fetch content.json');
    fetch('content.json')
        .then(response => {
            console.log('Fetch response:', response.status, response.statusText);
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            return response.json();
        })
        .then(fetchedData => {
            console.log('Content.json loaded successfully');
            data = fetchedData;
            applyContent(data);
            initAccordions();
            debugElements();
        })
        .catch(error => {
            console.error('Error loading content.json:', error);
            console.log('Applying fallback content');
            applyContent(fallbackContent);
            initAccordions();
            debugElements();
        });

    // Initialize hero carousel
    initHeroCarousel();

    // Modals with animation
    const modal = document.getElementById('modal');
    const univModal = document.getElementById('university-modal');
    if (modal && univModal) {
        const closes = document.querySelectorAll('.close');
        closes.forEach(close => close.addEventListener('click', () => {
            modal.style.display = 'none';
            univModal.style.display = 'none';
        }));
        const getStartedBtn = document.getElementById('get-started-btn');
        if (getStartedBtn) getStartedBtn.addEventListener('click', () => modal.style.display = 'block');
        const enrollBtn = document.getElementById('enroll-btn');
        if (enrollBtn) enrollBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
        const contactForm = document.getElementById('contact-form');
        const feedbackDiv = document.getElementById('form-feedback');
        if (contactForm && feedbackDiv) {
            contactForm.addEventListener('submit', e => {
                e.preventDefault();
                const name = contactForm.querySelector('input[name="name"]').value.trim();
                const email = contactForm.querySelector('input[name="email"]').value.trim();
                let isValid = true;
                contactForm.querySelectorAll('.error').forEach(err => {
                    err.style.display = 'none';
                });
                feedbackDiv.classList.add('hidden');
                if (!name) {
                    contactForm.querySelector('#name-error').style.display = 'block';
                    isValid = false;
                }
                if (!email || !/\S+@\S+\.\S+/.test(email)) {
                    contactForm.querySelector('#email-error').style.display = 'block';
                    isValid = false;
                }
                if (!isValid) {
                    feedbackDiv.textContent = 'Please fix the errors above.';
                    feedbackDiv.className = 'mt-4 p-4 rounded text-center bg-red-100 text-red-700';
                    feedbackDiv.classList.remove('hidden');
                    return;
                }
                const formData = new FormData(contactForm);
                console.log('FormData contents:', Array.from(formData.entries()));
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                submitBtn.disabled = true;
                submitBtn.innerText = 'Submitting...';
                feedbackDiv.textContent = 'Submitting form...';
                feedbackDiv.className = 'mt-4 p-4 rounded text-center bg-blue-100 text-blue-700';
                feedbackDiv.classList.remove('hidden');
                fetch('https://formbold.com/s/9BqEY', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                    .then(response => {
                        console.log('Formspree response:', {
                            status: response.status,
                            statusText: response.statusText
                        });
                        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                        return response.text();
                    })
                    .then(result => {
                        console.log('Formspree response body:', result);
                        feedbackDiv.textContent = 'Submitted! We will get back to you soon.';
                        feedbackDiv.className = 'mt-4 p-4 rounded text-center bg-green-100 text-green-700';
                        feedbackDiv.classList.remove('hidden');
                        modal.style.display = 'none';
                        contactForm.reset();
                        setTimeout(() => feedbackDiv.classList.add('hidden'), 5000);
                    })
                    .catch(error => {
                        console.error('Formspree submission error:', error);
                        feedbackDiv.textContent = 'Submission failed. Trying native submission...';
                        feedbackDiv.className = 'mt-4 p-4 rounded text-center bg-red-100 text-red-700';
                        feedbackDiv.classList.remove('hidden');
                        contactForm.submit();
                        setTimeout(() => {
                            feedbackDiv.textContent = 'Check your email shortly.';
                            feedbackDiv.className = 'mt-4 p-4 rounded text-center bg-green-100 text-green-700';
                            contactForm.reset();
                        }, 2000);
                    })
                    .finally(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalText;
                    });
            });
        }
    }

    // University cards interactive
    document.querySelectorAll('.university-card').forEach(card => {
        card.addEventListener('click', () => {
            const univ = card.dataset.univ;
            const nameEl = document.getElementById(`university${univ}-name`);
            const descEl = document.getElementById(`university${univ}-description`);
            if (nameEl && descEl) {
                document.getElementById('univ-modal-name').innerHTML = nameEl.innerHTML;
                document.getElementById('univ-modal-description').innerHTML = descEl.innerHTML;
                document.getElementById('univ-modal-admissions').innerHTML = data ? data[`university${univ}_admissions`] || fallbackContent[`university${univ}_admissions`] : fallbackContent[`university${univ}_admissions`];
                univModal.style.display = 'block';
            }
        });
    });

    // Hover for animated widgets only (class panels no longer have dropdowns)
    document.querySelectorAll('.animated-widget').forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            const content = panel.nextElementSibling;
            if (content && content.classList.contains('accordion-content')) {
                content.style.display = 'block';
            }
        });
        panel.addEventListener('mouseleave', () => {
            const content = panel.nextElementSibling;
            if (content && content.classList.contains('accordion-content')) {
                content.style.display = 'none';
            }
        });
    });

    // Initialize Leaflet Map
    try {
        const map = L.map('map').setView([42, 12], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        const locations = [
            { lat: 44.49381, lng: 11.33875, title: "Bologna", description: "Vibrant student city with historic charm." },
            { lat: 40.84773, lng: 14.25662, title: "Naples", description: "Dynamic coastal city with rich culture." },
            { lat: 41.9033, lng: 12.5158, title: "Rome", description: "Eternal city blending history and innovation." },
            { lat: 45.1867, lng: 9.1565, title: "Pavia", description: "Charming town with a focus on academics." }
        ];

        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng]).addTo(map);
            marker.bindPopup(`<b>${location.title}</b><br>${location.description}`).openPopup();
            marker.on('click', () => {
                map.setView([location.lat, location.lng], 14);
                marker.openPopup();
            });
        });
    } catch (error) {
        console.error('Leaflet map initialization failed:', error);
        document.getElementById('map').innerHTML = '<p class="text-center text-red-600 p-4">Failed to load map. Please try again later.</p>';
    }
});