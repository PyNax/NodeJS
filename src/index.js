var img = document.querySelector('img');


img.addEventListener('click', _ => {
    var all = document.getElementsByClassName('message');

    while (all.length != 0) {
        all = document.getElementsByClassName('message');
        console.log(all.length)
        for (var i=0;i<all.length;i++){
            all[i].remove();
        }
    }

    async function a() {
        setInterval(()=>{
            img.style = 'width : 100vw';
        },100)

        setInterval(()=>{
            img.style = 'width : 0vw';
        },200)

        
    }
    a()
    
})