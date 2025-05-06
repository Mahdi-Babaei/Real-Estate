const $ = document
const tabsDivElem = $.querySelectorAll(".tabsDiv")
const browsePropertiesBtn = $.querySelectorAll("#browsePropertiesBtn")
const firstSecTabs = $.querySelectorAll("#firstSecTabs")

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