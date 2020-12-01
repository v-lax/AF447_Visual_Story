class animations{
     animate0(){
        d3.select('#plane-image')
          .attr('src','../assets/af447.jpg')
          .style('max-width','100%')
          .style('max-height','100%')

        d3.select('#play-button')
          .style('opacity',0)
        d3.select('#restart-button')
          .style('opacity',0)
     }
     noseUpDemo(){
         var tl = gsap.timeline()
             tl.to("#grad", 3, {attr:{"y2":"30%"}},0)
             tl.to(".pitch-angles", 3,{y:70},0)
             tl.set('.pitch-angles',{clearProps:"all"})
             tl.to('#grad',3, {attr:{"y2":"0%"}})
     }
     noseDownDemo(){
        var tl = gsap.timeline()
             tl.to("#grad", 3, {attr:{"y2":"-30%"}},0)
             tl.to(".pitch-angles", 3,{y:-70},0)
             tl.set('.pitch-angles',{clearProps:"all"})
             tl.to('#grad',3, {attr:{"y2":"0%"}})
     }

     rotateLeft(){
         var tl = gsap.timeline()
         tl.to('#attitude-circle',{duration: 3, rotation: -20, transformOrigin:"50%,50%"},0)
         tl.to('.pitch-angles',{duration: 3, rotation: -20, transformOrigin:"50%,50%"},0)
         tl.set('#attitude-circle',{rotation: 0})
         tl.set('.pitch-angles',{rotation: 0})
     }
     rotateRight(){
        var tl = gsap.timeline()
        tl.to('#attitude-circle',{duration: 3, rotation: 20, transformOrigin:"50%,50%"},0)
        tl.to('.pitch-angles',{duration: 3, rotation: 20, transformOrigin:"50%,50%"},0)
        tl.set('#attitude-circle',{rotation: 0})
        tl.set('.pitch-angles',{rotation: 0})
    }

}

export {animations}