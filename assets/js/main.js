const { ref } = Vue
const app = {
    setup() {
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
        //sign
        let sign_event = ref('')
        let sign_name = ref('')
        let sign_phone = ref('')
        let sign_email = ref('')
        let sign_check= ref('')
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        function sign_click() {
            console.log(123)
            if(sign_event.value == '' || sign_name.value == '' || sign_phone.value == '' || sign_email.value == '' || sign_check.value ==''){
                
            }
            else{
                alert(sign_event.value+' '+sign_name.value+' '+sign_phone.value+' '+sign_email.value)
            }
            // if (sign_event.value == ''){
            //     alert('請選擇參與時段')
            // }
            // if (sign_name.value == ''){
            //     alert('請輸入姓名')
            // }
            // if (sign_phone.value == ''){
            //     alert('請輸入手機號碼')
            // }
            // if (sign_email.value == ''){
            //     alert('請輸入email')
            // }
            // if(sign_email.value != ''){
            //     if (!emailRegex.test(sign_email.value)) {
            //         alert('E-mail格式錯誤');
            //         return false
            //     }
            // }
           
          
            // axios.post('',{
            //     event:sign_event,
            //     name:sign_name,
            //     phone:sign_phone,
            //     email:sign_email
            // })
            // .then((res)=>{
            //     console.log(res)
            //     alert("報名成功")
            // })
            // .catch((error)=>{
            //     alert("uf/3y94g4u ")
            // })
            
        }

        //speaker more
        let img = ref('');
        let name = ref('');
        let company = ref('');
        let title = ref('');
        let alt = ref('');
        let experience = ref('');
        let time = ref('');
        let speech_title = ref('');
        let speech_subtitle = ref('');

        const popupIsopen = ref(false)

        function speaker_popup(index) {
            img.value = speaker.value[index].img;
            name.value = speaker.value[index].name;
            company.value = speaker.value[index].company;
            title.value = speaker.value[index].title;
            alt.value = speaker.value[index].alt;
            experience.value = speaker.value[index].experience;
            time.value = speaker.value[index].time;
            speech_title.value = speaker.value[index].speech_title;
            speech_subtitle.value = speaker.value[index].speech_subtitle;

            popupIsopen.value = true;
            document.body.style.overflow = 'hidden'
        }
        function speaker_close() {
            popupIsopen.value = false;
            document.body.style.overflow = 'auto'
        }

        //滾動
        function scrollTo(section) {
            var position = document.querySelector(`.${section}`).offsetTop
            menuIsopen.value = false
            if (section == 'section6' || section == 'section7') {
                position += document.querySelector('.section_bg').offsetTop
            }
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            })
            console.log(position)
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
        });
        //more btn
        const scheduleIsopen = ref(false)
        function schedule_btn() {
            scheduleIsopen.value = !scheduleIsopen.value
            if (!scheduleIsopen.value) {
                window.scrollTo({
                    top: document.querySelector('.section_bg').offsetTop,
                    behavior: 'smooth'
                })
            }
        }
        const noticeIsopen = ref(false)
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
        const menuIsopen = ref(false)
        return {
            sign_click, sign_event, sign_name, sign_phone, sign_email,sign_check,
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
    /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        },
        // when window width is >= 1200px
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
    /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
        }
    }
});


