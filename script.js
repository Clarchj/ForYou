const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Mong mình có nhiều Valentine nữa. Anh yêu em nhiều lắm. Anh đón chị bé vào 7h 14/02 nhé :)";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNrN2ZmenZ2NXB3YjZyaTI5Z3Q2bjRkcmYwOTlmZ3c1eXcyNnJ2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9ZsHoKnjg4ykx3mzTR/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noBtn.addEventListener("click", () => {
        noBtn.innerHTML = "chọn sai rùi";
    });
});
