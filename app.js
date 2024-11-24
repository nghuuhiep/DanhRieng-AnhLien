var slide = [
    `Chào cậu   ALi Dương   - người nhận được khá nhiều sự chú ý cũng như người đã được nhận lá thư này.   
    Được gửi bởi Hữu Hiệp   - người mà cậu đang ghét  vì những việc làm của cậu ta trong quá khứ`,

    `Tao biết bây giờ là trễ   để nói lời xin lỗi tới cậu    nhưng hy vọng tớ vẫn còn cơ hội ?      
    Mong cậu sẽ đọc hết`,

    `Bắt đầu từ cuối năm lớp 9 và từ đó những việc làm KHÔNG suy nghĩ của tao đã ảnh hưởng tới mày,   không nhiều nhưng rất khó ưa      .  .  .   phải không?      
    Tới tận giờ, tớ không nghĩ mình có thể làm như vậy,   nhắn tin thì chán lại còn phiền.   Trên trường thì theo dõi lén cậu.`,

    `Nhưng tao không phải có vấn đề mà lại làm khác người vậy.     
    Khi đấy, phải nói tao rất mến mày.
    Thực sự,   không như mày nghĩ tao không chú ý tới mày qua các bài đăng   hay xingtu trên mạng xã hội.  
    Mà là bản thân Ánh Liên trong ngày thường.   
    Chú ý mày lần đầu tiên là trên trường   (khi không son, không phấn, không cầu kì),  giờ vẫn vậy  nhưng vẫn không hiểu vì sao lại vậy.           
    Xinh nhất thì không     nhưng đẹp gái nhất là Ánh Liên`,

    `Như tao đã nói, mục đích đến đây là nhận lỗi và mong được cậu mày thứ.     Những thứ đáng ghét về tao, tao xin nhận hết.   
    Xin lỗi bình thường, nhắn cậu thì nó không thành tâm.   Cậu là người đặc biệt nên cần cách thức đặc biệt`,

    `Sau tất cả việc làm, tao cảm thấy hối hận.      Một phần vì tao chưa làm ai phải block tao và  mày là người đầu tiên.  
    Thứ 2, vì cậu là         người      tớ      từng       rất         thích.   
    Tôi không giỏi,  không giỏi văn vở nhưng đã từng rất giỏi thương cậu  và ngăn lời nói rất xấu về cậu`,

    `Nhưng    tao biết mày đã có bồ rồi   nên thôi,    mà nếu chưa thì tao cũng chẳng có cơ hội`,

    `Qua mọi thứ,   chúc Ánh Liên mãi đẹp,  người bên cậu đủ tốt,   những người đến với cậu với ý tốt.      Mọi điều đến với cậu đều là cây bài thắng và làm chủ nhé!`
]
var slideName = [
    "Xin chào",
    "Mục đích",
    "Kể lại",
    "Vì ?",
    "Nhận lỗi",
    "Thích ?",
    "...",
    "Kết",
]


let end = document.getElementById("end");
let audio = new Audio("resources/pageFlip.mp3")
let texts = document.getElementById("texts");
let text = document.getElementsByClassName("text");
let slider = document.getElementsByClassName("slider")[0];
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 2;
let write = (main, text) => {
    let index = 0;
    let interval = setInterval(() => {
        if (main.textContent.length < text.length) {
            main.textContent += text.charAt(index);
            index++;
        }
        else {
            clearInterval(interval);
        }
    }, 90);
}
let addDiv = () => {
    for (let i = 0; i < slide.length; i++) {
        let div = document.createElement("div");
        //////////
        let h1 = document.createElement("h1");
        h1.textContent = (slideName[i] == undefined||null) ? `slide ${i + 1}` : slideName[i]
        let p = document.createElement("p");
        div.appendChild(h1);
        div.appendChild(p);
        //////////
        div.className = "item text";
        texts.appendChild(div);
    }
    for (let i = 0; i < texts.children.length; i++) texts.children[i].isWrite = false;
    // console.log(texts.children)
};
addDiv();
let items = document.querySelectorAll('.slider .item');
function loadShow() {
    if (items[active].classList.contains("text")) {
        if (!items[active].isWrite) {
            items[active].children[1].textContent = "";
            items[active].isWrite = true;
            for (let i = 0; i < texts.children.length; i++) {
                if (items[active] == texts.children[i]) {
                    if (slide[i] == undefined || null){slide[i] = "nope"}
                    write(items[active].children[1], slide[i])
                }
            }
        };
    }




    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(((navigator.userAgent || navigator.vendor || window.opera)).toLowerCase()));
    let mobile = window.isDevice;
    let show = mobile ? 2 : 4;

    items[active].style.transform = mobile ? "scale(1.3)" : "scale(1.1)";
    items[active].style.fontSize = mobile ? "medium" : "";
    items[active].style.padding = mobile ? "15px" : "50px";
    items[active].children[1].style.rotate = "0deg";

    let stt = 0;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].children[1].style.rotate = "20deg"
        items[i].style.transform = `translateX(${100 + (80 * stt)}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${-0.55 * stt}deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(${5 * stt}px)`;
        items[i].style.opacity = stt > show ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].children[1].style.rotate = "-20deg"
        items[i].style.transform = `translateX(${-100 + (-80 * stt)}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${0.55 * stt}deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(${5 * stt}px)`;
        items[i].style.opacity = stt > show ? 0 : 0.6;
    }
}
next.onclick = function () {
    if (active == items.length - 1) return
    active = active + 1 < items.length ? active + 1 : active;
    audio.play();
    setTimeout(() => {
        loadShow();
    }, 100);
}
prev.onclick = (function () {
    if (active == 0) return
    active = active - 1 >= 0 ? active - 1 : active;
    audio.play()
    setTimeout(() => {
        loadShow();
    }, 100);
})
document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
        case "a":
            if (active == 0) return
            active = active - 1 >= 0 ? active - 1 : active;
            audio.play()
            setTimeout(() => {
                loadShow();
            }, 100);
            break;
        case 'ArrowRight':
        case "d":
            if (active == items.length - 1) return
            active = active + 1 >= 0 ? active + 1 : active;
            audio.play()
            setTimeout(() => {
                loadShow();
            }, 100);
            break;
        case "m":
            document.body.style.backgroundImage = "black"
            break;
    }
});
let loop = () => {
    if (texts.children[texts.children.length-1].children[1].textContent == slide[texts.children.length-1])
        {
            for (let i = 0; i < items.length; i++){
                items[i].style.transition = "10s";
                items[i].style.opacity = 0;
            };
            prev.remove()
            next.remove()
            end.style.opacity = 1;
            end.style.color = "white"
            document.body.style.background = "black"
        };
    requestAnimationFrame(loop)
};loop()
document.addEventListener("DOMContentLoaded", loadShow)