const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
     
      let now = new Date().getTime();
      if (now - prev > delay) {
          prev = now;
          return func(...args);
      }
  }
}
document.querySelector("#center").addEventListener("mousemove",
  throttleFunction((details) => {
      var div = document.createElement("div");
      div.classList.add('imagediv');
      div.style.left =details.clientX +'px';
      div.style.top= details.clientY +'px';
      var img = document.createElement("img");
      img.setAttribute("src" , "https://imgs.search.brave.com/GtByrduGyaiER3r0M-2WcovHB6QfLOVG2ep1R1ISqGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/YWlzeS1maWVsZC1s/YW5kc2NhcGUtd2Fs/bHBhcGVyc18yMy0y/MTUwMjg3ODQxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn");
      div.appendChild(img);
      document.body.appendChild(div);

      
      gsap.to(img , {
        y:"0" , 
        ease : power1 ,
       duration :0.2

    });
    
    gsap.to(img , {
        y:"100%",
        delay:.3,
         ease : power2 , 

    });


      setTimeout(function(){
          div.remove();
      },2000)
  }, 400));
