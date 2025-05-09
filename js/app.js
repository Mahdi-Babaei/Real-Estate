const $ = document
const tabsDivElem = $.querySelectorAll(".tabsDiv")
const browsePropertiesBtn = $.querySelectorAll("#browsePropertiesBtn")
const firstSecTabs = $.querySelectorAll("#firstSecTabs")
const propertiesContainer = $.querySelectorAll("#properties-container div")
const testimonialsWrapper = $.querySelectorAll("#testimonialsWrapper div")


// HeroSection tab switch
tabsDivElem.forEach(div => {
    div.addEventListener("click" , (e) => {
        e.preventDefault()
        
        tabsDivElem.forEach(div => div.classList.remove("heroActiveTab"))
        div.classList.add("heroActiveTab")
    })
})


// Browse Properties Button
const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
});

browsePropertiesBtn.forEach(btn => {
  btn.addEventListener("click" , (e) => {
    e.preventDefault()
    Toast.fire({
      icon: "error",
      title: "There is no available properties right now"
    });
})
})

// First Section Tab switching
firstSecTabs.forEach(div => {
    div.addEventListener("click" , () => {
        firstSecTabs.forEach(div => div.classList.remove("firstSecActiveTab"))
        div.classList.add("firstSecActiveTab")
    })
})


// Properties Box Generator
propertiesContainer.forEach(div => {
    div.className = 'relative rounded-lg border-[1.5px] border-[#F0EFFB] cursor-pointer bg-white inline-block hover:shadow-xl transition-all swiper-slide'
    div.insertAdjacentHTML("beforeend" , `
                    <img src="./images/sections/${div.dataset.img}.png" alt="home" class="rounded-t-lg w-full">
                    <!-- Popular Badge Start -->
                    ${isPopular(div.dataset.popular)}
                    <!-- Popular Badge End -->
                    <div class="px-5 py-5 flex flex-col gap-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <h4 class="text-lightPurple font-bold text-2xl/[150%] pr-1">${div.dataset.price}</h4>
                                <span class="text-sm/[140%] text-lightGray">/month</span>
                            </div>
                            <div class="flex items-center justify-center rounded-full h-12 w-12 border border-lightPink">
                                <i class="fa-regular fa-heart fa-xl text-lightPurple"></i>
                            </div>
                        </div>
                        <h2 class="text-2xl/[150%] font-bold text-mainColor">${div.dataset.name}</h2>
                        <h5 class="text-base/[150%] text-lightGray border-b border-[#F0EFFB] pb-3">${div.dataset.address}</h5>
                        <div class="flex gap-x-3">
                            <div>
                                <i class="fa-solid fa-bed text-lightPurple pr-1"></i>
                                <span>${div.dataset.beds} ${window.innerWidth >= 768 ? 'Beds' : ''}</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-bath text-lightPurple pr-1"></i>
                                <span>${div.dataset.bathrooms} ${window.innerWidth >= 768 ? 'Bathrooms' : ''}</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-expand text-lightPurple pr-1"></i>
                                <span>${div.dataset.area} m²</span>
                            </div>
                        </div>
                    </div>
      `)

})

function isPopular (status) {
    if (status === "true") {
      return `    <div class="absolute -left-[15px] -mt-5">
                        <div class="flex w-fit items-center justify-center py-2 px-3 gap-x-2 bg-lightPurple text-white font-jakarta font-bold rounded-t-lg rounded-br-lg">
                            <i class="fa-solid fa-star"></i>
                            <span>POPULAR</span>
                        </div>
                        <div id="triangle"></div>
                    </div>`
    } else {
      return ` `
    }
}

window.onresize = () => {
    if (window.innerWidth >= 768) {
        $.querySelector("#swiperContainer").className = 'hidden'
    } else {
        $.querySelector("#swiperContainer").className = 'swiper mySwiper'
    }


    // for text changes in cards
    if (window.innerWidth === 768) {
        location.reload()
    } 
    if (window.innerWidth < 768) {
        Toast.fire({
            icon: "info",
            title: "Reload page after resizing the window for better experience"
          });
    }
}

window.onload = () => {
    if (window.innerWidth >= 768) {
        $.querySelector("#swiperContainer").className = 'hidden'
    } else {
        $.querySelector("#swiperContainer").className = 'swiper mySwiper'
    }
}

// Testimonials Generator
testimonialsWrapper.forEach(dataDiv => {
    let warpperDiv = $.createElement("div")
    warpperDiv.className = 'swiper-slide'
    warpperDiv.insertAdjacentHTML("beforeend" , `
                            <div class="flex flex-col gap-y-10 pt-16 items-center">
                                <p class="w-full lg:w-2/3 text-xl/[160%]">${dataDiv.dataset.comment}</p>
                                <div class="flex items-center justify-center gap-x-3">
                                    <img src="./images/profiles/${dataDiv.dataset.profile}.png" alt="" class="rounded-full w-16 h-16 border-2 border-lightPink p-1 object-cover">
                                    <div class="flex items-center gap-x-1">
                                        <h4 class="font-bold">${dataDiv.dataset.name},</h4>
                                        <span class="text-lightGray font-normal">${dataDiv.dataset.rule}</span>
                                    </div>
                                </div>
                            </div>
        `)
    $.querySelector("#testimonialsWrapper").append(warpperDiv)

})