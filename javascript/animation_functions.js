function animate0(){
        d3.select('#plane-image')
          .attr('src','../assets/af447.jpg')
          .style('max-width','100%')
          .style('max-height','100%')

        d3.select('#play-button')
          .style('opacity',0)
        d3.select('#restart-button')
          .style('opacity',0)
     }
const noseUpDemo = function (statusObject){
         const tl1 = gsap.timeline(statusObject)
             tl1.to("#grad", 3, {attr:{"y2":"30%"}},0)
             tl1.to(".pitch-angles", 3,{y:70},0)
             tl1.set('.pitch-angles',{clearProps:"all"})
             tl1.to('#grad',3, {attr:{"y2":"0%"}})
     }
     
const noseDownDemo = function (statusObject){
        const tl2 = gsap.timeline(statusObject)
             tl2.to("#grad", 3, {attr:{"y2":"-30%"}},0)
             tl2.to(".pitch-angles", 3,{y:-70},0)
             tl2.set('.pitch-angles',{clearProps:"all"})
             tl2.to('#grad',3, {attr:{"y2":"0%"}})
     }
function rotateLeft(statusObject){
         const tl3 = gsap.timeline(statusObject)
         tl3.to('#attitude-circle',{duration: 3, rotation: -20, transformOrigin:"50%,50%"},0)
         tl3.to('.pitch-angles',{duration: 3, rotation: -20, transformOrigin:"50%,50%"},0)
         tl3.set('#attitude-circle',{rotation: 0})
         tl3.set('.pitch-angles',{rotation: 0})
     }
function rotateRight(statusObject){
        const tl4 = gsap.timeline(statusObject)
        tl4.to('#attitude-circle',{duration: 3, rotation: 20, transformOrigin:"50%,50%"},0)
        tl4.to('.pitch-angles',{duration: 3, rotation: 20, transformOrigin:"50%,50%"},0)
        tl4.set('#attitude-circle',{rotation: 0})
        tl4.set('.pitch-angles',{rotation: 0})
    }

export {animate0,noseUpDemo,noseDownDemo,rotateLeft,rotateRight}