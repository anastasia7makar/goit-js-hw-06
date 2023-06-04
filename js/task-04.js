let counterValue = 0;

const counterValueEl = document.querySelector("#value");

const decButtonEl = document.querySelector('button[data-action="decrement"]');
decButtonEl.addEventListener("click", () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

const incButtonEl = document.querySelector('button[data-action="increment"]');
incButtonEl.addEventListener("click", () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});