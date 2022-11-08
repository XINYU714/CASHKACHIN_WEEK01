//section-1
document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  var eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
  console.log("success");
}

gsap.registerPlugin(ScrollTrigger, TextPlugin);
const typing1 = "區區修煉已經無法滿足了嗎？";
const typing2 = "還有比賽等著你！";
gsap.to(".typing1", {
  text: typing1,
  duration: 2,
  scrollTrigger: {
    trigger: ".contest",
    toggleActions: "play pause resume reset",
    markers: true,
  },
});
gsap.to(".typing2", {
  text: typing2,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: ".contest",
    toggleActions: "play pause resume reset",
    markers: true,
  },
});

////section-2
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.utils.toArray(".popup").forEach((element) => {
  hide(element);
  ScrollTrigger.create({
    trigger: element,
    onEnter: function () {
      animated(element);
    },
    onEnterBack: function () {
      animated(element);
    },
    onLeave: function () {
      hide(element);
    },
  });
});

function animated(element) {
  gsap.fromTo(
    element,
    { scale: 0, opacity: 0, visibility: "hidden" },
    {
      duration: 1.5,
      scale: 1,
      delay: 0.2,
      visibility: "visible",
      opacity: "1",
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    }
  );
}

function hide(element) {
  gsap.set(element, { scale: 0, opacity: 0, visibility: "hidden" });
}

gsap.to(".rotate", {
  rotate: "360%",
  ease: "none",
  duration: 6,
  repeat: -1,
});

// section 3
const timeLineRunning = gsap.timeline({
  scrollTrigger: {
    trigger: ".running",
    start: "top 85%",
    end: "top -1%",
    scrub: true,
  },
});

timeLineRunning.to(".running", {
  xPercent: "50",
});
