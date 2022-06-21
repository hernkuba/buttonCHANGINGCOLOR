{
    const Hello = () => {
        console.log("hello developers");
    }
    const button = document.querySelector(".js-button");
    const body = document.querySelector(".body");
    
    button.addEventListener("click", () => {
        body.classList.toggle("dark");
        changeText();
    });
    const changeText = () => {
        const text = document.querySelector(".text");
        text.innerText = (body.classList.contains("dark") ? "jasny" : "ciemny");
    }
    Hello();
}