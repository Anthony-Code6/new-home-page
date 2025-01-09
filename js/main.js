const sidebar = document.getElementById('sidebar-menu')
const overlay = document.getElementById('overlay')

// Menu
const menu = document.getElementById('menu')

menu.addEventListener('click', function (e) {
    e.preventDefault()

    if (sidebar.classList == '') {
        sidebar.classList.add('show')
        overlay.style.display='block'
    }
})


// Close
const close = document.getElementById('close')

close.addEventListener('click', function (e) {
    e.preventDefault()

    if (sidebar.classList != '') {
        sidebar.classList.remove('show')
        overlay.style.display='none'
    }
})


window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if(windowWidth > 666){
        sidebar.classList.remove('show')
        overlay.style.display='none'
    }
});