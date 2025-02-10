// Hiển thị thông báo khi nhấp vào nút
function showAlert() {
    alert("Chào mừng bạn đến với Trang Web Học Tập!");
}
function toggleDropdown(id) {
    var dropdown = document.getElementById(id + "-dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}