document.addEventListener("DOMContentLoaded", () => {
    const emotions = {
        happy: "La alegría es una emoción que nos hace sentir muy bien. Nos sentimos felices cuando algo bueno nos pasa.",
        sad: "La tristeza es una emoción que sentimos cuando algo nos hace sentir mal o perdemos algo importante.",
        angry: "El enojo es una emoción que sentimos cuando algo nos molesta o nos parece injusto.",
        surprised: "La sorpresa es una emoción que sentimos cuando algo inesperado sucede."
    };

    document.querySelectorAll(".emotion").forEach(emotion => {
        emotion.addEventListener("click", () => {
            const emotionId = emotion.id;
            const description = document.getElementById("description");
            description.textContent = emotions[emotionId];
        });
    });
});