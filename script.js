  //script for animate landing page
  gsap.from("header img", { duration: 1, opacity: 0, scale: 0.5 });
  gsap.from("article img", { duration: 1, opacity: 0, scale: 0.5 });
  gsap.from("header aside", { duration: 1, opacity: 0, x: -50 });
  gsap.from("section:first-child article", { duration: 1, opacity: 0, y: 50, stagger: 0.2 });
  gsap.from("section:nth-child(2) article", { duration: 1, opacity: 0, y: 50, stagger: 0.2 });
  gsap.from("section:nth-child(3) article", { duration: 1, opacity: 0, y: 50, stagger: 0.2 });

  //script for hamburger navbar
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  const bars = document.querySelectorAll('.bar');

  menuIcon.addEventListener('click', () => {
      bars.forEach((bar) => {
          bar.classList.toggle('active');
          menu.classList.toggle('active');
      });
  });

  //script for likes
  const likeIcon = document.getElementById('like-icon');
  const likeCount = document.getElementById('like-count');

  let isLiked = false;
  let likeCountValue = 100;

  likeIcon.addEventListener('click', () => {
      if (isLiked) {
          likeIcon.classList.remove('active');
          likeCountValue--;
      } else {
          likeIcon.classList.add('active');
          likeCountValue++;
      }

      likeCount.textContent = likeCountValue;
      isLiked = !isLiked;
  });