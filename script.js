const hamburger = document.getElementById('hamburger');
      const closeIcon = document.getElementById('closeIcon');
      const navMenu = document.getElementById('navMenu');
      
      // فتح القائمة
      hamburger.addEventListener('click', function() {
        navMenu.classList.add('active');
        hamburger.classList.add('hide');
        closeIcon.classList.add('active');
      });
      
      // إغلاق القائمة
      closeIcon.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('hide');
        closeIcon.classList.remove('active');
      });
      
      // إغلاق القائمة عند الضغط على أي رابط
      const navLinks = navMenu.querySelectorAll('a');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active');
          hamburger.classList.remove('hide');
          closeIcon.classList.remove('active');
        });
      });