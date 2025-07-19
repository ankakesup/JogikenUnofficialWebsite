document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-events-btn");
    const hiddenWrapper = document.getElementById("event-hidden-wrapper");
    let isExpanded = false;

    toggleBtn.addEventListener("click", function () {
        hiddenWrapper.classList.toggle("expanded");
        toggleBtn.textContent = isExpanded ? "すべて表示" : "閉じる";
        
        if (isExpanded) {
            // ✅ 閉じるときは、イベントリストの先頭へスクロール
            document.querySelector("#event_title").scrollIntoView({ behavior: "smooth" });
        }
        
        isExpanded = !isExpanded;
    });
});
