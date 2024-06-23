// Script to fill all navbar classes in other pages with navbar from navbar.html
const nav = document.querySelector('.navbar')
fetch('/navbar.html')
      .then(res=>res.text())
      .then(data=>{
        nav.innerHTML=data
      })
