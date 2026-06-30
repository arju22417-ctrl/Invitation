const weddingDate = new Date("December 20, 2026 10:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your RSVP has been received.");

    form.reset();

});

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", function(){

    if(!playing){

        music.play();

        musicBtn.innerHTML =
        '<i class="bi bi-pause-fill"></i>';

        playing = true;

    }

    else{

        music.pause();

        musicBtn.innerHTML =
        '<i class="bi bi-play-fill"></i>';

        playing = false;

    }

});