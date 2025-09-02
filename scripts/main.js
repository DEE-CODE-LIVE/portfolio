// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});


// Hamburger menu toggle
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
// Close menu on nav link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});


// Optional: Click-to-flip instead of hover
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("flipped");
  });
});


