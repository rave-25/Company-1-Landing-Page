const head = document.querySelector('.headerArea')
fetch('../inc/header.html')
.then(res=>res.text())
.then(data=>{
    head.innerHTML=data
})