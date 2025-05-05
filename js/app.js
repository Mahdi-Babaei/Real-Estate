const $ = document
const tabsDivElem = $.querySelectorAll(".tabsDiv")
const browsePropertiesBtn = $.querySelector("#browsePropertiesBtn")

// HeroSection tab switch
tabsDivElem.forEach(div => {
    div.addEventListener("click" , (e) => {
        e.preventDefault()
        
        tabsDivElem.forEach(div => div.classList.remove("activeTab"))
        div.classList.add("activeTab")
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

browsePropertiesBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    Toast.fire({
      icon: "error",
      title: "There is no available properties right now"
    });
})