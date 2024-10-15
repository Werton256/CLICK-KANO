let punkty = 0;
const cel = document.getElementById('cel');
const wynik = document.getElementById('wynik');

function losujPozycje() {
    // Obliczanie losowej pozycji w obrębie okna przeglądarki
    const x = Math.random() * (window.innerWidth - 50); // 50 to szerokość celu
    const y = Math.random() * (window.innerHeight - 50); // 50 to wysokość celu
    cel.style.left = `${x}px`;
    cel.style.top = `${y}px`;
}

function kliknijCel() {
    punkty++;
    wynik.textContent = `Punkty: ${punkty}`;
    losujPozycje();
}

// Ustaw początkową pozycję
losujPozycje();

// Dodaj zdarzenie kliknięcia
cel.addEventListener('click', kliknijCel);

// Co 1 sekundę zmieniaj pozycję celu
setInterval(losujPozycje, 1000);
