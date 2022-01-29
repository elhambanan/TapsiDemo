// const toggler = document.querySelector(".nav__toggler");
// toggler.addEventListener("click", e =>

// toggler.classList.toggle("nav__expanded"));


// accorion
const accordionHeader = document.querySelector(".accordion__header");
const accordionContent = document.querySelector(".accordion__content");
console.log(accordionHeader)
console.log(accordionContent)
accordionHeader.addEventListener("click", e => {
    accordionContent.classList.toggle("accordion__expanded")
})

