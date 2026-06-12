document.addEventListener("DOMContentLoaded", () => {
    
    // Interação 1: Menu Responsivo Hamburguer
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer link (útil para navegação mobile)
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Interação 2: Caixa Informativa Dinâmica para os botões de Destaque
    const interactButtons = document.querySelectorAll(".interact-btn");
    const infoBox = document.getElementById("infoBox");
    const infoText = document.getElementById("infoText");
    const closeInfo = document.getElementById("closeInfo");

    interactButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const dataMessage = e.target.getAttribute("data-info");
            infoText.textContent = dataMessage;
            
            // Exibe o painel flutuante removendo a classe oculta
            infoBox.classList.remove("hidden");
        });
    });

    closeInfo.addEventListener("click", () => {
        infoBox.classList.add("hidden");
    });

    // Interação 3: Animação de Scroll (Revelação de conteúdo)
    const sections = document.querySelectorAll(".text-reveal");
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if(sectionTop < triggerBottom) {
                section.classList.add("active");
            }
        });
    };

    // Executa uma vez no início e depois a cada rolagem de página
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
