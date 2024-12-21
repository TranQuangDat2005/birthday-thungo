const audio = new Audio("./Happybirthday_song.mp3");

function outOrder() {
    alert("Sản Phẩm Hết Hàng! Vui lòng ấn vào đặt bánh để tiếp tục");
}

function playMP3() {
    audio.play();
}

function ValueSubmit(event) {
    audio.pause();
    event.preventDefault();
    const hovaten = document.getElementById("TenDayDu")?.value.trim() || "";
    const email = document.getElementById("NhapEmail")?.value.trim() || "";
    const loaibanh = document.getElementById("Chonbanh").value;
    const ghichu = document.getElementById("Note")?.value.trim() || "";

    if (!hovaten || !email || !loaibanh) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    if (loaibanh.toLowerCase() == "bánh gauto strawberry") {
        alert(`Thông tin bạn đã nhập:\nHọ và Tên: ${hovaten}\nEmail: ${email}\nLoại bánh: ${loaibanh}\nGhi chú: ${ghichu}`);
        const src = "./ThuNgo_strawberry.jpg";
        window.open(src, "_blank", "width=1000,height=900");
        playMP3();
    }
    else if (loaibanh.toLowerCase() == "bánh gauto socola") {
        alert(`Thông tin bạn đã nhập:\nHọ và Tên: ${hovaten}\nEmail: ${email}\nLoại bánh: ${loaibanh}\nGhi chú: ${ghichu}`);
        const src = "./ThuNgo_chocolate.jpg";
        window.open(src, "_blank", "width=1000,height=900");
        playMP3();
    }
    else if (loaibanh.toLowerCase() == "bánh macaron") {
        alert(`Thông tin bạn đã nhập:\nHọ và Tên: ${hovaten}\nEmail: ${email}\nLoại bánh: ${loaibanh}\nGhi chú: ${ghichu}`);
        const src = "./ThuNgo_maccaron.jpg";
        window.open(src, "_blank", "width=1000,height=900");
        playMP3();

    }
    else if (loaibanh.toLowerCase() == "bánh gauto kem cheese") {
        alert(`Thông tin bạn đã nhập:\nHọ và Tên: ${hovaten}\nEmail: ${email}\nLoại bánh: ${loaibanh}\nGhi chú: ${ghichu}`);
        const src = "./ThuNgo_cheese.jpg";
        window.open(src, "_blank", "width=1000,height=900");
        playMP3();
    }
}
