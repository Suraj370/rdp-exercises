const accordianHeader = document.querySelectorAll(".accordian-header")


accordianHeader.forEach((accordianHeader) => {
    accordianHeader.addEventListener('click', function(){
        const accordionContent = accordianHeader.parentElement.querySelector(".accordian-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            accordionContent.classList.add('pt-4')
            accordionContent.classList.add('pb-2')
            accordianHeader.querySelector("#refund").classList.add("rotate-180")
            accordianHeader.querySelector("#refund").classList.add("transform")
        }
        else{
        
            accordionContent.style.maxHeight = `0px`;
            accordionContent.classList.remove('pt-4')
            accordionContent.classList.remove('pb-2')
            accordianHeader.querySelector("#refund").classList.remove("rotate-180")
            accordianHeader.querySelector("#refund").classList.remove("transform")
        }
    })
})