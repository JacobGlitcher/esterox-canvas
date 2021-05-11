window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight - 15;

    function draw(event) {
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }

    let painting = false;
    let isStarted = (e) => {
        painting = true;
        draw(e);
    };
    let isFinished = () => {
        painting = false;
        ctx.beginPath();
    };

    canvas.addEventListener("mousedown", isStarted);
    canvas.addEventListener("mouseup", isFinished);
    canvas.addEventListener("mousemove", draw);
})