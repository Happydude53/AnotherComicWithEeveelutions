const pages = [
    "001.html",
    "002.html"
];

function navigate(direction) {
    const current = window.location.pathname.split("/").pop();
    const idx = pages.indexOf(current);
    let newIndex = idx + direction;

    if (newIndex < 0) newIndex = 0;
    if (newIndex >= pages.length) newIndex = pages.length - 1;

    window.location.href = pages[newIndex];
}
