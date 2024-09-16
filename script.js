function desc(x, y, id) {
    const stage = document.getElementById("stage");

    stage.style.transform = `translateX(${x}%) translateY(${y}%)`;

    document.getElementById("fade").classList.toggle("hide");
    document.getElementById(`desc${id}`).classList.toggle("show");

    stage.classList.toggle("stop");

    if (stage.getAttribute("data-desc-active") == "true") {
        stage.setAttribute("data-desc-active", "false");

        //enable scroll
        document.body.style.overflow = "scroll";
        return;
    }

    stage.setAttribute("data-desc-active", "true")

    //disable scroll
    window.scrollTo(0, 500);
    document.body.style.overflow = "hidden";
}