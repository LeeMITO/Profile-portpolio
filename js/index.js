window.onload = function () {
    //시작화면 타이머
    setTimeout(function () {
        $('.bg-front').fadeOut();
    }, 3000);

    //PC메뉴 이동
    const menuBox = document.querySelector('.menuBox');
    const gnbmenu = menuBox.offsetheight;

    const $about = document.querySelector('.about');
    const $skills = document.querySelector('.skills');
    const $projects = document.querySelector('.projects');
    const $contect = document.querySelector('.contect');

    const aboutgo = document.getElementById('aboutme');
    const skillsgo = document.getElementById('skills');
    const projectsgo = document.getElementById('projects');
    const contectgo = document.getElementById('contect');

    $about.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: aboutgo.offsetTop + 980, behavior: 'smooth' });
    }, false);

    $skills.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: skillsgo.offsetTop + 1100, behavior: 'smooth' });
    }, false);

    $projects.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: projectsgo.offsetTop + 1100, behavior: 'smooth' });
    }, false);

    $contect.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: contectgo.offsetTop + 10300, behavior: 'smooth' });
    }, false);

    //모바일 메뉴 펼침
    const hamBar = document.querySelector('.ham');
    const momenu = document.querySelector('.overlay-menu');

    hamBar.addEventListener('click', () => {
        hamBar.classList.toggle('active');
        momenu.classList.toggle('active');
    }, false);

    window.onresize = function () {
        if (window.innerWidth >= 768) {
            hamBar.classList.remove('active');
            momenu.classList.remove('active');
        }
    }

    // 모바일 메뉴 이동
    const mabout = document.querySelector('.mo-about');
    const mskills = document.querySelector('.mo-skills');
    const mprojects = document.querySelector('.mo-projects');
    const mcontect = document.querySelector('.mo-contect');

    mabout.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: aboutgo.offsetTop + 1000, behavior: 'smooth' });
        hamBar.classList.remove('active');
        momenu.classList.remove('active');
    }, false);

    mskills.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: skillsgo.offsetTop + 950, behavior: 'smooth' });
        hamBar.classList.remove('active');
        momenu.classList.remove('active');
    }, false);

    mprojects.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: projectsgo.offsetTop + 950, behavior: 'smooth' });
        hamBar.classList.remove('active');
        momenu.classList.remove('active');
    }, false);

    mcontect.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: contectgo.offsetTop + 10000, behavior: 'smooth' });
        hamBar.classList.remove('active');
        momenu.classList.remove('active');
    }, false);

    // 타이핑 효과
    const content = "어제보다 더 나은 웹개발자 이복경입니다.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200);


    //skills text
    const txt1 = document.querySelector('#sktxt1');
    const txt2 = document.querySelector('#sktxt2');
    const txt3 = document.querySelector('#sktxt3');
    const txt4 = document.querySelector('#sktxt4');
    const txt5 = document.querySelector('#sktxt5');
    const txt6 = document.querySelector('#sktxt6');
    const txt7 = document.querySelector('#sktxt7');
    const txt8 = document.querySelector('#sktxt8');
    const txt9 = document.querySelector('#sktxt9');
    const txt10 = document.querySelector('#sktxt10');

    const cir1 = document.querySelector('.cir1');
    const cir2 = document.querySelector('.cir2');
    const cir3 = document.querySelector('.cir3');
    const cir4 = document.querySelector('.cir4');
    const cir5 = document.querySelector('.cir5');
    const cir6 = document.querySelector('.cir6');
    const cir7 = document.querySelector('.cir7');
    const cir8 = document.querySelector('.cir8');
    const cir9 = document.querySelector('.cir9');
    const cir10 = document.querySelector('.cir10');

        cir1.addEventListener("mouseover", function() {
            txt1.classList.add("op");
        });
        cir1.addEventListener("mouseout", function() {
            txt1.classList.remove("op");
        });

        cir2.addEventListener("mouseover", function() {
            txt2.classList.add("op");
        });
        cir2.addEventListener("mouseout", function() {
            txt2.classList.remove("op");
        });

        cir3.addEventListener("mouseover", function() {
            txt3.classList.add("op");
        });
        cir3.addEventListener("mouseout", function() {
            txt3.classList.remove("op");
        });

        cir4.addEventListener("mouseover", function() {
            txt4.classList.add("op");
        });
        cir4.addEventListener("mouseout", function() {
            txt4.classList.remove("op");
        });

        cir5.addEventListener("mouseover", function() {
            txt5.classList.add("op");
        });
        cir5.addEventListener("mouseout", function() {
            txt5.classList.remove("op");
        });

        cir6.addEventListener("mouseover", function() {
            txt6.classList.add("op");
        });
        cir6.addEventListener("mouseout", function() {
            txt6.classList.remove("op");
        });

        cir7.addEventListener("mouseover", function() {
            txt7.classList.add("op");
        });
        cir7.addEventListener("mouseout", function() {
            txt7.classList.remove("op");
        });

        cir8.addEventListener("mouseover", function() {
            txt8.classList.add("op");
        });
        cir8.addEventListener("mouseout", function() {
            txt8.classList.remove("op");
        });

        cir9.addEventListener("mouseover", function() {
            txt9.classList.add("op");
        });
        cir9.addEventListener("mouseout", function() {
            txt9.classList.remove("op");
        });

        cir10.addEventListener("mouseover", function() {
            txt10.classList.add("op");
        });
        cir10.addEventListener("mouseout", function() {
            txt10.classList.remove("op");
        });

    //스크롤에 따른 색상

    // var colors = [
    //     '#6086a2',
    //     '#1d537b',
    //     '#143a56',
    //     '#0b2131',
    //     '#051018',
    // ]
        
const pro_bg = document.querySelectorAll(".probg");

window.addEventListener("scroll", () => {
    let currentSection = "";
    
    pro_bg.forEach(section => {
        const sectionBG = window.scrollY + section.getBoundingClientRect().top - 1;

        if(window.scrollY >= sectionBG) {
            currentSection = section.getAttribute("id");
        }

        if (currentSection == "bg1") {
            document.body.style.background= "#1d537b";
        } else if(currentSection == "bg2") {
            document.body.style.background = "#143a56";
        } else if(currentSection == "bg3") {
            document.body.style.background = "#0b2131";
        } else if(currentSection == "bg4") {
            document.body.style.background = "#051018";
        } else {
            document.body.style.background = "#6086a2";
        } 
    });
});

    //아이콘 링크연결
    document.querySelector('.btn-git').addEventListener('click', e => {
        window.open('https://github.com/LeeMITO');
    });
    document.querySelector('.btn-email').addEventListener('click', e => {
        window.open('mailto:cphigh05@gmail.com');
    });

    // EmailJS
    const $name = document.getElementById('name');
    const $email = document.getElementById('email');
    const $message = document.getElementById('message');
    let $disabled = true;

    $email.addEventListener('change', (e) => {
        let pattern = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        console.log(pattern.test(e.target.value));

        if (pattern.test(e.target.value)) {
            $disabled = false;
        } else {
            $disabled = true;
        }
    }, false);

    const myForm = document.getElementById('myForm');
    const send_Mail = e => {
        e.preventDefault();
        if ($disabled == false) {
            emailjs.init("oiG6f1Grno-m_6Sgq");
            let params = {
                name: $name.value,
                email: $email.value,
                message: $message.value
            };

            emailjs.send('service_wkiqev4', 'template_jce5jmj', params)
                .then(function (res) {
                    alert('메일 전송 감사합니다. 빠른 시일 내에 확인 후 회신드리겠습니다.');
                    $name.value = '';
                    $email.value = '';
                    $message.value = '';
                }, function (err) {
                    alert('오류가 발생했습니다. 다시 시도해주시기 바랍니다.')
                });
        }
    } // sendMail

    myForm.addEventListener('submit', send_Mail, false);
}


$(function () {
    AOS.init({
        duration: 1000,
        easing: 'linear',
        once: false
    });

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
            $('.circles').addClass('spin');
        } else {
            $('.circles').removeClass('spin');
        }

        if ($(this).scrollTop() > 700) {
            $('.circle1').addClass('scale');
        }
        if ($(this).scrollTop() > 1500) {
            $('.circle2').addClass('scale');
        }
        if ($(this).scrollTop() > 2200) {
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

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 2000) {
            $('.top-plane').addClass('op');
        } else {
            $('.top-plane').removeClass('op');
        }
    });
});













