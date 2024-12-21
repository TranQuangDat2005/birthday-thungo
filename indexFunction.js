function button_work(selectedButton) {
    const selectedValue = selectedButton.innerHTML;
    if (selectedValue == "Không phải") {
        selectedButton.style.display = "none";
    }
    if (selectedValue == "Đúng rồi") {
        window.location.href ="./mirror.html";
    }
}