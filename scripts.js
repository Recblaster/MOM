window.onload = function () {
    let container = document.getElementById("container");
    let frameIndex = 1;

    function nextFrame() {
        if (frameIndex < 10) {
            frameIndex++;
            renderFrame();
        }
    }

    function renderFrame() {
        container.innerHTML = '';
        let frame = document.createElement("div");
        frame.className = "frame";

        if (frameIndex === 1) {
            createTextBox(frame, "It's Your Special Day Yeyey!🥳", "Next", nextFrame);
        } else if (frameIndex === 2) {
            createTextBox(frame, "Made something special for you! 🤗", "Next", nextFrame);
        } else if (frameIndex === 3) {
            createTextBox(frame, "Wanna see what I've made?", "Let's Gooo 🥳", nextFrame);
        } else if (frameIndex === 4) {
            createTextBox(frame, "Have a look at it mummy jii 😊", "Click And Wait", async function() {
                await wait2Seconds();
                transitionToFrame5();
            });
        } else if (frameIndex === 5) {
            frame.style.backgroundColor = "black";
            createButtonStandalone(frame, "Lights On", function() {
                document.body.style.backgroundColor = "pink";
                transitionToFrame6();
            });
        } else if (frameIndex === 6) {
            frame.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            createButtonStandalone(frame, "Decorate", function() {
                addBalloons();
                addConfetti();
                setTimeout(() => {
                    createTextBox(frame, "Happy Birthday Mummy 🤗", "Main event pe chale?", nextFrame);
                }, 1500);
            });
        } else if (frameIndex === 7) {
            createTextBox(frame, "Let's cut the cake Mummy ji!", "🎂 ARCHANA", function() {
                showConfetti();
                alert("🎉HAPPY BIRTHDAY MOM🎉");
                nextFrame();
            });
        } else if (frameIndex === 8) {
            frame.classList.add("centered-textbox");
            createTextBox(frame, "A really reallly happy birthday mummy! I hope tulaa he surprise aavadla asel! Me haa code tujhya saathi banavla, happy birthday pan wish karaycha hota, pan most importantly... i wanted to say that I AM SORRY 🙏🏻 like im soo sorry for whatever happened! I know i shouldnt have done that but kya kar saktey hogaya. I didnt want to do it aur mene saamne se bhi kuch nai kiya! But yes, it was my fault and i genuinly apologise for that and also wanna assure you something...", "HERE'S THE THING💚", nextFrame);
        } else if (frameIndex === 9) {
            createFloatingHearts();
            frame.className = "last-frame";
            frame.innerHTML = `
                <h2>My Promises To You, Mummy 💖</h2>
                <p class="promise-text">🌟 I'll always give my best in studies.</p>
                <p class="promise-text">💪 I'll wash my garments and dishes myself.</p>
                <p class="promise-text">❤️ I'll try not to lie to you</p>
                <p class="promise-text">🤞🏻  Will leave my lip bitting habits</p>
                <p class="promise-text">🌍 I have a few plans to make ₹10K+ per month.</p>
                <button class="button">LOVE YOU 💚</button>
            `;
        }

        container.appendChild(frame);
    }

    function createTextBox(frame, text, buttonText, buttonAction) {
        let textbox = document.createElement("div");
        textbox.className = "textbox";
        let p1 = document.createElement("p");
        p1.className = "center";
        p1.textContent = "✨";
        let p2 = document.createElement("p");
        p2.className = "center";
        p2.textContent = text;
        let button = document.createElement("button");
        button.className = "button";
        button.textContent = buttonText;
        button.onclick = buttonAction;
        textbox.appendChild(p1);
        textbox.appendChild(p2);
        textbox.appendChild(button);
        frame.appendChild(textbox);
    }

    function createButtonStandalone(frame, text, buttonAction) {
        let button = document.createElement("button");
        button.className = "button";
        button.textContent = text;
        button.onclick = buttonAction;
        frame.appendChild(button);
    }

    function wait2Seconds() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    function createFloatingHearts() {
        for (let i = 0; i < 50; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(heart);
        }
    }

    function addBalloons() {
        for (let i = 0; i < 10; i++) {
            let balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.animationDuration = Math.random() * 2 + 2 + "s";
            document.body.appendChild(balloon);
        }
    }

    function addConfetti() {
        for (let i = 0; i < 30; i++) {
            let confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = (Math.random() * window.innerWidth / 20) + "px";
            confetti.style.top = "-300px";
            confetti.style.backgroundColor = getRandomColor();
            document.body.appendChild(confetti);

            let confetti2 = document.createElement("div");
            confetti2.className = "confetti";
            confetti2.style.left = (window.innerWidth - window.innerWidth / 20 + Math.random() * window.innerWidth / 20) + "px";
            confetti2.style.top = "-300px";
            confetti2.style.backgroundColor = getRandomColor();
            document.body.appendChild(confetti2);
        }
    }

    function showConfetti() {
        for (let i = 0; i < 100; i++) {
            let confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
            document.body.appendChild(confetti);
        }
    }

    function transitionToFrame5() {
        let frame = document.querySelector(".frame");
        frame.style.animation = "fadeOutWithBg 2s forwards ease-in-out";
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
            nextFrame();
        }, 2000);
    }

    function transitionToFrame6() {
        let frame = document.querySelector(".frame");
        frame.style.animation = "fadeOut 2s forwards ease-in-out";
        setTimeout(() => {
            document.body.style.backgroundColor = "pink";
            nextFrame();
        }, 2000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    renderFrame();
};
