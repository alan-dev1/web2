// Controle do carrossel
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto play (opcional)
setInterval(nextSlide, 5000);

// Controle do formulário de agendamento
document.getElementById('formAgendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const servico = document.getElementById('servico').value;

    alert(`Agendamento realizado com sucesso!\nNome: ${nome}\nData: ${data}\nServiço: ${servico}`);
});
