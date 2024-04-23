
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

gsap.to('#plane', {
  scrollTrigger: {
    trigger: "#our-team",
    start: "150% 25%",
    end: "+=500",
    scrub: 0.5, // Smoothly animate on scroll
  },
  ease: 'power1.inOut',
  // rotate: '10deg',
  motionPath: {
    path: '#plane-path',
    align: '#plane-path',
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});

gsap.to("#plane-svg-1", {
  duration: 2,
  repeat: -1,
  yoyo: true,
  rotation: -15,
  transformOrigin: "bottom right",
  ease: "power1.inOut"
});

gsap.to("#plane-svg-2", {
  duration: 3,
  repeat: -1,
  yoyo: true,
  rotation: 190,
  transformOrigin: "bottom right",
  ease: "back.inOut(1.7)"
});

const listElements = gsap.utils.toArray(".card-container");
if (listElements.length > 0) {
  gsap.set('.card-container', {
    autoAlpha: 0,
    xPercent: "+=" + 150,
  });

  ScrollTrigger.create({
    trigger: "#our-partners",
    start: "top 10%",
    end: "+=2100",
    pin: "#our-partners",
    anticipatePin: 0.5,
    scrub: true
  });

  const stepsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.card-container',
      start: 'top 90%',
      end: "+=2100",
      scrub: 1
    }
  });

  stepsTimeline.to(listElements, {
    autoAlpha: 1,
    xPercent: 0,
    duration: 1,
    stagger: 1,
    delay: 1,
  });
}

gsap.fromTo("#tree-svg-1",
  {
    duration: 2,
    repeat: -1,
    yoyo: true,
    rotation: -15,
    transformOrigin: "bottom center",
    ease: "power1.inOut"
  }, {
  duration: 2,
  repeat: -1,
  yoyo: true,
  rotation: 5,
  transformOrigin: "bottom center",
  ease: "power1.inOut"
});

gsap.fromTo("#tree-svg-2",
  {
    duration: 3,
    repeat: -1,
    yoyo: true,
    rotation: 190,
    transformOrigin: "bottom center",
    ease: "power1.inOut"
  }, {
  duration: 3,
  repeat: -1,
  yoyo: true,
  rotation: 175,
  transformOrigin: "bottom center",
  ease: "power1.inOut"
});

gsap.fromTo("#tree-svg-3",
  {
    duration: 4,
    repeat: -1,
    yoyo: true,
    rotation: -5,
    transformOrigin: "bottom center",
    ease: "power1.inOut"
  }, {
  duration: 4,
  repeat: -1,
  yoyo: true,
  rotation: 5,
  transformOrigin: "bottom center",
  ease: "power1.inOut"
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const memberList = gsap.utils.toArray(".image-bubble");
if (memberList.length > 0) {
  gsap.set('.image-bubble', {
    autoAlpha: 0,
    yPercent: -100
  });
  const stepsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#our-team .section-title",
      toggleActions: "restart none none none",
      start: "top 50%",
      end: "+=100",
      toggleActions: "restart none none none",
    }
  });
  let shuffledMembers = shuffleArray(memberList);
  stepsTimeline.to(shuffledMembers, {
    autoAlpha: 1,
    yPercent: 0,
    duration: 0.75,
    stagger: 0.1,
    ease: "bounce.out",
  })
}

const offerCards = gsap.utils.toArray('.offer-card');

if (offerCards.length > 0) {
  const fadeTimeline = gsap.timeline({ repeat: -1, stagger: 1 });

  offerCards.forEach((offerCard, index) => {
    // Set initial opacity based on index
    gsap.set(offerCard, { autoAlpha: index === 0 ? 1 : 0 });

    // Add fade out and fade in animations
    fadeTimeline.to(offerCard, { autoAlpha: 0, duration: 4 })
      .to(offerCards[(index + 1) % offerCards.length], { autoAlpha: 1, duration: 2 }, "-=3.5");
  });

  // if (offerCards.length > 0) {
  //   const fadeTimeline = gsap.timeline({ repeat: -1 }); // Loop indefinitely

  //   // Initial state: Set all elements to opacity 0 except the first
  //   fadeTimeline.set(offerCards, { opacity: 0 });
  //   fadeTimeline.set(offerCards[0], { opacity: 1 }); // Make the first element visible

  //   // Fade loop for subsequent elements
  //   offerCards.forEach((card, index) => {
  //     const prevCard = index > 0 ? offerCards[index - 1] : offerCards[offerCards.length - 1]; // Handle first iteration and wrapping

  //     fadeTimeline
  //       .to(prevCard, { opacity: 0, duration: 1 }, `+=1`) // Fade out previous element
  //       .to(card, { opacity: 1, duration: 1 }, `-=1`); // Fade in current element
  //   });


  // }
}

