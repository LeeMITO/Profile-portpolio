window.onload = function () {
    //시작화면 타이머
    setTimeout(function () {
        $('.bg-front').fadeOut();
    }, 3000)

    //링크연결
    document.querySelector('.btn-git').addEventListener('click', e => {
        window.open ('https://github.com/LeeMITO');
    });
    document.querySelector('.btn-email').addEventListener('click', e => {
        window.open ('mailto:cphigh05@gmail.com');
    });

    // EmailJS
    const inputText = document.getElementsByClassName("input-text");
    let sendBtn = document.getElementById("send-btn");

    for (let i = 0; i < inputText.length; i++) {
        inputText[i].addEventListener("keyup", checkForm);
    }

    function checkForm() {
        let canSubmit = true;

        for (let i = 0; i < inputText.length; i++) {
            if (inputText[i].value.length == 0) {
                canSubmit = false;
            }
        }

        if (canSubmit) {
            sendBtn.disabled = false;
        } else if (!canSubmit) {
            sendBtn.disabled = true;
        }
    }

    function setStatus(status) {
        const error = document.getElementById("error");
        const success = document.getElementById("success");
        const okay = document.querySelector(".okay");
        const tryAgain = document.querySelector(".try-again");

        if (status == "success") {
            success.classList.add("active");
            body.style.overflow = "hidden";
            okay.addEventListener("click", () => {
                success.classList.remove("active");
                body.style.overflow = "auto";
            });
        } else {
            error.classList.add("active");
            body.style.overflow = "hidden";
            tryAgain.addEventListener("click", () => {
                error.classList.remove("active");
                body.style.overflow = "auto";
            });
        }
    }

    const sendEmail = () => {
        if (sendBtn.disabled == false) {
            emailjs.init("oiG6f1Grno-m_6Sgq");
            let templateParams = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            emailjs.send("service_wkiqev4", "template_jce5jmj", templateParams,).then(function (response) {
                console.log('Success!', response.status, response.text);
                setStatus("success");
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            }, function (error) {
                console.log('Failed...', error);
                setStatus("fail");
            });
        }
    }
}


$(function () {
    AOS.init({
        duration: 1000,
        easing: 'linear',
        once: false
    });

    // ===== 햄버거 메뉴 펼치고 닫기
    $('.mo-overlay .close-btn').hide();

    $('.ham').click(function () {
        $('.mo-overlay').animate({ 'width': '100%' }, 300);
        $('.mo-overlay .close-btn').show();
    });

    $('.mo-overlay .close-btn').click(function () {
        $('.mo-overlay').animate({ 'width': 0 }, 300);
        $(this).hide();
        $('.overlay-menu > ul > li > a').removeClass('on');
    });
    // ======== //


    //스크롤 효과
    $(window).on('scroll', function () {
        const im = $(this).scrollTop();
        var skillcon = $(this).scrollTop();

        if ($(this).scrollTop() > 500) {
            $('.myimg').addClass('move');
        } else {
            $('.myimg').removeClass('move');
        }

        if ($(this).scrollTop() > 1300) {
            $('.circlesk').addClass('spin');
        } else {
            $('.circlesk').removeClass('spin');
        }

        if ($(this).scrollTop() > 700) {
            $('.circle1').addClass('scale');
        } 
        if ($(this).scrollTop() > 1500) {
            $('.circle2').addClass('scale');
        } 
        if ($(this).scrollTop() > 2500) {
            $('.circle3').addClass('scale');
        } 
        if ($(this).scrollTop() > 9500) {
            $('.circle4').addClass('scale');
        }

    });

    //top메뉴 이동
    $('#top-plane').click(function () {
        $('html').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function() {
        if ( $(this).scrollTop() > 2000) {
            $('.top-plane').addClass('op');
        } else{ $('.top-plane').removeClass('op');
        }
    }); 
});













