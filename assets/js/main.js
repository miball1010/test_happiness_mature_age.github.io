const { ref } = Vue
const app = {
    setup() {
        //抓資料
        const issue = ref([])
        const speaker = ref([])
        const life = ref([])
        fetch('assets/js/data.json')
            .then(res => res.json())
            .then(data => {
                issue.value = data.issue
                speaker.value = data.speaker
                life.value = data.life
            })

        //報名
        let sign_event = ref('')
        let sign_name = ref('')
        let sign_gender = ref('先生')
        let sign_phone = ref('')
        let sign_email = ref('')
        let sign_agree = ref('')
        var mobileRegex = /^09\d{8}$/;
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        function sign_click(event) {
            if (sign_event.value == '' || sign_name.value == '' || sign_gender.value == '' || sign_phone.value == '' || sign_email.value == '' || sign_agree.value == '') {
                // event.preventDefault()
            }
            else {
                if (!mobileRegex.test(sign_phone.value)) {
                    event.preventDefault()
                    alert('手機號碼格式錯誤')

                }
                else if (!emailRegex.test(sign_email.value)) {
                    event.preventDefault()
                    alert('E-mail格式錯誤')
                }
                else {
                    //alert(sign_event.value+' '+sign_name.value+' '+sign_gender.value+' '+sign_phone.value+' '+sign_email.value+' '+sign_agree.value)

                    axios.post('https://events-cherry.businesstoday.com.tw/backend/happiness_mature_age_2023/sign_up', {
                        Sign_up_type: sign_event.value,
                        Name: sign_name.value,
                        Gender: sign_gender.value,
                        Cell_phone: sign_phone.value,
                        Email: sign_email.value,
                        Is_agree: 1
                    })
                        .then((res) => {
                            event.preventDefault()
                            console.log(res.data);
                            if (res.data.bIsSignUpSuccess == 0) {
                                alert(res.data.sError)
                            }
                            else {
                                alert("報名成功")
                            }

                        })
                        .catch((error) => {
                            event.preventDefault()
                            console.log(error)
                            alert("報名失敗，請重新試一次")

                        })
                }
            }
        }

        //滾動
        function scrollTo(section) {
            var position = document.querySelector(`.${section}`).offsetTop
            if (window.innerWidth < 541) {
                position -= 20
            }
            menuIsopen.value = false
            if (section == 'section6' || section == 'section7') {
                position += document.querySelector('.section_bg').offsetTop
            }
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            })
            //console.log(position)
        }

        const isScroll = ref(false)
        window.addEventListener("scroll", () => {
            var top = window.scrollY;
            if (top >= 360) {
                isScroll.value = true
            }
            else {
                isScroll.value = false
            }
        })

        //利用T F 判斷按鈕是否被按
        const menuIsopen = ref(false)
        const scheduleIsopen = ref(false)
        const noticeIsopen = ref(false)
        const popupIsopen = ref(false)

        function schedule_btn() {
            scheduleIsopen.value = !scheduleIsopen.value
            if (!scheduleIsopen.value) {
                window.scrollTo({
                    top: document.querySelector('.section_bg').offsetTop,
                    behavior: 'smooth'
                })
            }
        }

        function notice_btn() {
            noticeIsopen.value = !noticeIsopen.value
            if (!noticeIsopen.value) {
                window.scrollTo({
                    top: document.querySelector('.section7').offsetTop + document.querySelector('.section_bg').offsetTop,
                    behavior: 'smooth'
                })
            } else {
                console.log((document.querySelector('.title').offsetHeight))
                window.scrollTo({
                    top: document.querySelector('.section7').offsetTop + document.querySelector('.section_bg').offsetTop + (document.querySelector('.sign_top').offsetHeight) + (document.querySelector('.title').offsetHeight) * 3,
                    behavior: 'smooth'
                })
            }
        }

        let img = ref('');
        let name = ref('');
        let company = ref('');
        let title = ref('');
        let alt = ref('');
        let experience = ref('');
        let time = ref('');
        let speech_title = ref('');
        let speech_subtitle = ref('');

        function speaker_popup(id) {
            let nowSpeaker = speaker.value.find(speaker => speaker.id === id);
            console.log(id)
            img.value = nowSpeaker.img;
            name.value = nowSpeaker.name;
            company.value = nowSpeaker.company;
            title.value = nowSpeaker.title;
            alt.value = nowSpeaker.alt;
            experience.value = nowSpeaker.experience;
            time.value = nowSpeaker.time;
            speech_title.value = nowSpeaker.speech_title;
            speech_subtitle.value = nowSpeaker.speech_subtitle;

            popupIsopen.value = true;
            document.body.style.overflow = 'hidden'
        }
        function speaker_close() {
            popupIsopen.value = false;
            document.body.style.overflow = 'auto'
        }

        return {
            sign_click, sign_event, sign_name, sign_gender, sign_phone, sign_email, sign_agree,
            scrollTo, isScroll,
            speaker_popup, img, name, company, title, alt, experience, time, speech_title, speech_subtitle, speaker_close, popupIsopen,
            schedule_btn, scheduleIsopen,
            notice_btn, noticeIsopen,
            menuIsopen,
            issue, speaker, life
        }
    }
}
Vue.createApp(app).mount("#app")

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination1",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1"
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2"
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});


