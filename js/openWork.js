function openWork() {
    document.getElementById("work").style.opacity = "1";
    document.getElementById("work").style.zIndex = "10";
    document.getElementById("work").style.visibility = "visible";
    document.getElementById("workBg").style.opacity = "1";
    document.getElementById("workBg").style.zIndex = "5";
    document.getElementById("workBg").style.visibility = "visible";
}
function closeWork() {
    document.getElementById("work").style.opacity = "0";
    document.getElementById("work").style.zIndex = "0";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("workBg").style.opacity = "0";
    document.getElementById("workBg").style.zIndex = "0";
    document.getElementById("workBg").style.visibility = "hidden";
}