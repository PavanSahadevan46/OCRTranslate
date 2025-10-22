let button = document.getElementById("button");

function screenShot() {
    try {
        chrome.tabs.captureVisibleTab(function (data) {
            let img = document.createElement("img");
            img.src = data;

            let contentDiv = document.getElementById("userPicture");
            contentDiv?.appendChild(img);
        });

    } catch (e) {
        console.log(e);
    }

}

if (button) {
    button.addEventListener("click", () => {
        screenShot();
    });
}