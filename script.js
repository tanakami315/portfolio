const cloverObject = document.getElementById("clover-logo");

cloverObject.addEventListener("load", () => {
    const svgDocument = cloverObject.contentDocument;
    const animationItems = [
        svgDocument.getElementById("stem"),
        svgDocument.getElementById("leaf-top"),
        svgDocument.getElementById("leaf-right"),
        svgDocument.getElementById("leaf-bottom-right"),
        svgDocument.getElementById("leaf-bottom-left"),
        svgDocument.getElementById("leaf-left"),
        svgDocument.getElementById("asu-text"),
    ];

    animationItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transition = "opacity 0.8s ease";
    });

    function animateItems() {
        animationItems.forEach((item) => {
            item.style.opacity = "0";
        });

        animationItems.forEach((item, index) => {

            let delay = index * 400;

            // asuだけ最後の葉っぱと同時に表示
            if (item.id === "asu-text") {
                delay = (animationItems.length - 2) * 400;
            }

            setTimeout(() => {
                item.style.opacity = "1";
            }, delay);

        });

        setTimeout(() => {
            animationItems.forEach((item) => {
                item.style.opacity = "0";
            });
        }, animationItems.length * 400 + 1800);
    }

    animateItems();

    setInterval(
        animateItems,
        animationItems.length * 400 + 3500
    );
});


// 5枚表示＋2秒待ってから繰り返す
setInterval(animation, 5000);