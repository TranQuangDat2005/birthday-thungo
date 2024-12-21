function openCam() {
    const videoElement = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                window.open("https://www.facebook.com/thu.ngothu.560", "_blank");
            });
    } else {
        window.open("https://www.facebook.com/thu.ngothu.560", "_blank");
    }
    alert("NHỚ ẤN NÚT Ở CUỐI TRANG");
}

function changePage() {
    window.location.href = "./gift_animation.html";
}

