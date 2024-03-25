

function goToSlide(index,id){
    let sectionList = document.querySelectorAll(".section");
    let section = sectionList.item(id);
    let slideWidht = section.querySelector(".slide").clientWidth;
    section.querySelector(".slider_content").scrollTo(slideWidht*index,0);
}