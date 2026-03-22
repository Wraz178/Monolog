const cards = document.querySelectorAll(".card");

let currentAudio = null;
let currentCard = null;

cards.forEach(card => {
    card.addEventListener("click", () => {

        const audioSrc = card.getAttribute("data-audio");

        // Если уже играет что-то — остановить
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;

            if (currentCard) {
                currentCard.classList.remove("active");
            }
        }

        // Создаём новый аудио
        const audio = new Audio(audioSrc);

        currentAudio = audio;
        currentCard = card;

        // Добавляем активный класс (меняет тень)
        card.classList.add("active");

        audio.play();

        // Когда закончилось — вернуть тень обратно
        audio.onended = () => {
            card.classList.remove("active");
            currentAudio = null;
            currentCard = null;
        };
    });
});