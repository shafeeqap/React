document.addEventListener("DOMContentLoaded", ()=>{
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalbtn = document.querySelector('.close')

    openModalBtn.onclick = function(){
        modal.style.display = "block";
    }

    closeModalbtn.onclick = function(){
        modal.style.display = "none"
    }

    // This function handles clicks on the webpage to close a modal when the user clicks outside of it. 
    
    window.onclick = function(e){
        if(e.target===modal){
            modal.style.display = "none"
        }
    }

})