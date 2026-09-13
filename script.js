/* =========================================================
   FAHIM KAZI — PORTFOLIO
   Interactive experience
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("open");

            const isOpen = navLinks.classList.contains("open");

            menuButton.textContent = isOpen ? "×" : "☰";
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });
    }


    /* =====================================================
       ACTIVE NAVIGATION WHILE SCROLLING
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    const updateActiveNavigation = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === #${currentSection}) {
                link.classList.add("active");
            }

        });
    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".project-card, .skill-group, .timeline-item, .about-card"
    );

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       PROJECT CARD MOUSE EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -1.2;

            const rotateY =
                ((x - centerX) / centerX) * 1.2;

            card.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       BUTTON MAGNETIC EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.08;

            const moveY =
                (y - rect.height / 2) * 0.08;

            button.style.transform =
                translate(${moveX}px, ${moveY}px);

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });


    /* =====================================================
       CURSOR GLOW
       ===================================================== */

    const cursorGlow =
        document.createElement("div");

    cursorGlow.className = "cursor-glow";

    document.body.appendChild(cursorGlow);

    document.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) {
            return;
        }

        cursorGlow.style.left =
            ${event.clientX}px;

        cursorGlow.style.top =
            ${event.clientY}px;

    });


    /* =====================================================
       LIVE DEMO PLACEHOLDER PROTECTION
       ===================================================== */

    const demoLinks =
        document.querySelectorAll(".live-link");

    demoLinks.forEach(link => {

        link.addEventListener("click", event => {

            if (link.getAttribute("href") === "#") {

                event.preventDefault();

                alert(
                    "The live demo link will be connected once the project URL is added."
                );

            }

        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const footer =
        document.querySelector(".footer");

    if (footer) {

        const year =
            new Date().getFullYear();

        const yearElement =
            document.createElement("span");

        yearElement.className = "footer-year";

        yearElement.textContent =
            © ${year};

        footer.prepend(yearElement);

    }


    /* =====================================================
       PAGE INITIALIZATION
       ===================================================== */

    console.log(
        "Fahim Kazi Portfolio initialized successfully."
    );

});-
