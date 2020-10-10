        let button_top = document.querySelector('#button_top')
        button_top.style.display = "none";// Affiche le boutton

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 220) {  // Quand on est à 200 pixels du haut de page,
                button_top.style.display = "block";// Affiche le boutton
          }
          else if (window.pageYOffset < 220) {  // Quand on est à 200 pixels du haut de page,
            button_top.style.display = "none"; // N'affiche pas le boutton
      }
    });
