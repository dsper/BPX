var titles = [
    "Xchange",
    "Network",
    "Connections",
    "Marketplace",
    "Relationships",
    "Ventures",
    "Opportunities",
    "Solutions",
    "Alliances",
    "Ecosystem"
];

var i = 0;

setInterval(function () {
    i++;
    if (i == titles.length) i = 0;
    document.getElementById("rotatingtitle").innerHTML = titles[i];
    // $("#rotatingtitle").html(titles[i]);
}, 3 * 1000)

function openForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
    document.getElementById("loginForm").style.display = "none";
}