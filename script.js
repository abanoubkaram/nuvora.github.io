Window.onload=()=>{

    setTimeout(()=>{
    document.getElementById("loader").style.display="none";
    },1500);
    
    gsap.from(".main-headphone",{
    y:250,
    opacity:0,
    duration:1
    });
    
    };
    
    const items=document.querySelectorAll(".item");
    const main=document.getElementById("mainHeadphone");
    const btn=document.getElementById("shopBtn");
    
    items.forEach(item=>{
    
    item.addEventListener("click",()=>{
    
    document.body.style.background=item.dataset.color;
    
    btn.style.background=item.dataset.color;
    
    document.querySelector(".active")
    .classList.remove("active");
    
    item.classList.add("active");
    
    gsap.to(main,{
    x:350,
    y:250,
    scale:.3,
    rotation:-20,
    opacity:0,
    duration:.5,
    
    onComplete:()=>{
    
    main.src=item.dataset.image;
    
    gsap.fromTo(
    main,
    
    {
    y:250,
    opacity:0,
    scale:1.2,
    x:0
    },
    
    {
    y:0,
    opacity:1,
    scale:1,
    duration:.8,
    ease:"power3.out"
    }
    
    );
    
    }
    
    });
    
    });
    
    });
    
    document.addEventListener("mousemove",(e)=>{
    
    const x=(e.clientX/window.innerWidth-.5)*20;
    const y=(e.clientY/window.innerHeight-.5)*20;
    
    gsap.to(".main-headphone",{
    x:x,
    y:y,
    duration:.5
    });
    
    });