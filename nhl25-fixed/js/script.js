// Script principal pour le site NHL 25 Pro Guide

// Définition des sous-menus pour la navigation secondaire
const subMenus = {
  builds: `
    <a href="builds.html" class="sub-nav-link active">Vue d'ensemble</a>
    <a href="builds-forward.html" class="sub-nav-link">Attaquants</a>
    <a href="builds-defense.html" class="sub-nav-link">Défenseurs</a>
    <a href="builds-goalie.html" class="sub-nav-link">Gardiens</a>
    <a href="builds-compare.html" class="sub-nav-link">Comparaison</a>
  `,
  positioning: `
    <a href="positioning.html" class="sub-nav-link active">Vue d'ensemble</a>
    <a href="tactical-systems.html" class="sub-nav-link">Systèmes Dog Fox Hawk</a>
    <a href="positioning-forward.html" class="sub-nav-link">Positionnement Attaquants</a>
    <a href="positioning-defense.html" class="sub-nav-link">Positionnement Défenseurs</a>
    <a href="positioning-goalie.html" class="sub-nav-link">Positionnement Gardiens</a>
  `,
  techniques: `
    <a href="techniques.html" class="sub-nav-link active">Vue d'ensemble</a>
    <a href="l2-mechanics-advanced.html" class="sub-nav-link">Mécaniques L2/LT Avancées</a>
    <a href="gliding-techniques.html" class="sub-nav-link">Techniques de Gliding</a>
    <a href="advanced-shooting.html" class="sub-nav-link">Tirs Avancés</a>
    <a href="defensive-techniques.html" class="sub-nav-link">Techniques Défensives</a>
  `,
  coach: `
    <a href="coach.html" class="sub-nav-link active">Vue d'ensemble</a>
    <a href="coach-faq.html" class="sub-nav-link">FAQ</a>
    <a href="coach-common-mistakes.html" class="sub-nav-link">Erreurs Communes</a>
    <a href="coach-videos.html" class="sub-nav-link">Vidéos d'Analyse</a>
    <a href="coach-glossary.html" class="sub-nav-link">Glossaire</a>
  `
};

// Fonction pour initialiser la navigation
function initNavigation() {
  // Déterminer la page active
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  // Mettre à jour la classe active dans la navigation principale
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (currentPage === href || 
        (currentPage.includes('builds') && href === 'builds.html') ||
        (currentPage.includes('positioning') && href === 'positioning.html') ||
        (currentPage.includes('techniques') && href === 'techniques.html') ||
        (currentPage.includes('coach') && href === 'coach.html')) {
      link.classList.add('active');
    }
  });
  
  // Déterminer quelle section secondaire afficher
  let secondaryNavContent = '';
  if (currentPage.includes('builds')) {
    secondaryNavContent = subMenus.builds;
  } else if (currentPage.includes('positioning') || currentPage.includes('tactical-systems')) {
    secondaryNavContent = subMenus.positioning;
  } else if (currentPage.includes('techniques') || currentPage.includes('l2-mechanics') || currentPage.includes('gliding') || currentPage.includes('shooting')) {
    secondaryNavContent = subMenus.techniques;
  } else if (currentPage.includes('coach')) {
    secondaryNavContent = subMenus.coach;
  }
  
  // Afficher la navigation secondaire si nécessaire
  if (secondaryNavContent) {
    const secondaryNav = document.querySelector('.secondary-nav-container');
    if (secondaryNav) {
      secondaryNav.innerHTML = secondaryNavContent;
      
      // Mettre à jour la classe active dans la navigation secondaire
      document.querySelectorAll('.sub-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (currentPage === href) {
          link.classList.add('active');
        }
      });
    }
  } else {
    // Masquer la navigation secondaire si elle n'est pas nécessaire
    const secondaryNav = document.querySelector('.secondary-nav');
    if (secondaryNav) {
      secondaryNav.style.display = 'none';
    }
  }
  
  // Gérer le menu mobile
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  }
  
  // Gérer le changement de langue
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      const currentLang = document.querySelector('.current-lang').textContent;
      document.querySelector('.current-lang').textContent = currentLang === 'FR' ? 'EN' : 'FR';
      
      // Basculer entre les classes de langue
      document.body.classList.toggle('lang-fr');
      document.body.classList.toggle('lang-en');
      
      // Basculer la visibilité des éléments de langue
      document.querySelectorAll('.lang-fr, .lang-en').forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
      });
    });
  }
}

// Fonction pour initialiser les diagrammes interactifs
function initDiagrams() {
  const diagramCanvas = document.getElementById('hockey-diagram');
  if (!diagramCanvas) return;
  
  const ctx = diagramCanvas.getContext('2d');
  
  // Configuration du diagramme
  const diagramConfig = {
    width: 600,
    height: 400,
    rinkColor: '#e0f0ff',
    lineColor: '#3a80d2',
    playerRadius: 15,
    playerColors: {
      dog: '#e74c3c',    // Rouge pour Dog (Ailier Gauche)
      fox: '#f39c12',    // Orange pour Fox (Centre)
      hawk: '#2ecc71',   // Vert pour Hawk (Ailier Droit)
      defense: '#3498db', // Bleu pour les défenseurs
      opponent: '#95a5a6' // Gris pour les adversaires
    },
    animationSpeed: 1000, // Durée de l'animation en ms
  };
  
  // Positions des joueurs pour différentes zones et formations
  const playerPositions = {
    offensive: {
      initial: {
        dog: { x: 150, y: 100 },
        fox: { x: 300, y: 150 },
        hawk: { x: 450, y: 100 },
        defense1: { x: 200, y: 300 },
        defense2: { x: 400, y: 300 },
        opponent1: { x: 250, y: 200 },
        opponent2: { x: 350, y: 200 }
      },
      animation: {
        dog: { x: 200, y: 150 },
        fox: { x: 300, y: 200 },
        hawk: { x: 400, y: 150 },
        defense1: { x: 200, y: 300 },
        defense2: { x: 400, y: 300 },
        opponent1: { x: 250, y: 250 },
        opponent2: { x: 350, y: 250 }
      }
    },
    neutral: {
      '1-2-2': {
        initial: {
          dog: { x: 150, y: 100 },
          fox: { x: 250, y: 200 },
          hawk: { x: 350, y: 200 },
          defense1: { x: 200, y: 300 },
          defense2: { x: 400, y: 300 },
          opponent1: { x: 300, y: 100 },
          opponent2: { x: 300, y: 150 }
        },
        animation: {
          dog: { x: 200, y: 100 },
          fox: { x: 250, y: 200 },
          hawk: { x: 350, y: 200 },
          defense1: { x: 200, y: 300 },
          defense2: { x: 400, y: 300 },
          opponent1: { x: 250, y: 150 },
          opponent2: { x: 350, y: 150 }
        }
      },
      '1-3-1': {
        initial: {
          dog: { x: 150, y: 100 },
          fox: { x: 150, y: 200 },
          hawk: { x: 450, y: 200 },
          defense1: { x: 300, y: 200 },
          defense2: { x: 300, y: 300 },
          opponent1: { x: 300, y: 100 },
          opponent2: { x: 300, y: 150 }
        },
        animation: {
          dog: { x: 200, y: 100 },
          fox: { x: 150, y: 200 },
          hawk: { x: 450, y: 200 },
          defense1: { x: 300, y: 200 },
          defense2: { x: 300, y: 300 },
          opponent1: { x: 250, y: 150 },
          opponent2: { x: 350, y: 150 }
        }
      },
      '2-1-2': {
        initial: {
          dog: { x: 150, y: 100 },
          fox: { x: 450, y: 100 },
          hawk: { x: 300, y: 200 },
          defense1: { x: 200, y: 300 },
          defense2: { x: 400, y: 300 },
          opponent1: { x: 300, y: 100 },
          opponent2: { x: 300, y: 150 }
        },
        animation: {
          dog: { x: 200, y: 100 },
          fox: { x: 400, y: 100 },
          hawk: { x: 300, y: 200 },
          defense1: { x: 200, y: 300 },
          defense2: { x: 400, y: 300 },
          opponent1: { x: 250, y: 150 },
          opponent2: { x: 350, y: 150 }
        }
      }
    }
  };
  
  // État actuel du diagramme
  let currentState = {
    zone: 'offensive',
    formation: '1-2-2',
    animating: false
  };
  
  // Fonction pour dessiner la patinoire
  function drawRink() {
    // Fond de la patinoire
    ctx.fillStyle = diagramConfig.rinkColor;
    ctx.fillRect(0, 0, diagramCanvas.width, diagramCanvas.height);
    
    // Lignes de la patinoire
    ctx.strokeStyle = diagramConfig.lineColor;
    ctx.lineWidth = 2;
    
    // Ligne centrale
    ctx.beginPath();
    ctx.moveTo(diagramCanvas.width / 2, 0);
    ctx.lineTo(diagramCanvas.width / 2, diagramCanvas.height);
    ctx.stroke();
    
    // Cercle central
    ctx.beginPath();
    ctx.arc(diagramCanvas.width / 2, diagramCanvas.height / 2, 50, 0, Math.PI * 2);
    ctx.stroke();
    
    // Lignes bleues
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(diagramCanvas.width / 3, 0);
    ctx.lineTo(diagramCanvas.width / 3, diagramCanvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(diagramCanvas.width * 2 / 3, 0);
    ctx.lineTo(diagramCanvas.width * 2 / 3, diagramCanvas.height);
    ctx.stroke();
    
    // Zones de but
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(50, diagramCanvas.height / 2, 30, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(diagramCanvas.width - 50, diagramCanvas.height / 2, 30, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Fonction pour dessiner un joueur
  function drawPlayer(x, y, color, label) {
    // Cercle du joueur
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, diagramConfig.playerRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Bordure du joueur
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, diagramConfig.playerRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Étiquette du joueur
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
  }
  
  // Fonction pour dessiner tous les joueurs
  function drawPlayers(positions) {
    drawPlayer(positions.dog.x, positions.dog.y, diagramConfig.playerColors.dog, 'D');
    drawPlayer(positions.fox.x, positions.fox.y, diagramConfig.playerColors.fox, 'F');
    drawPlayer(positions.hawk.x, positions.hawk.y, diagramConfig.playerColors.hawk, 'H');
    drawPlayer(positions.defense1.x, positions.defense1.y, diagramConfig.playerColors.defense, 'D1');
    drawPlayer(positions.defense2.x, positions.defense2.y, diagramConfig.playerColors.defense, 'D2');
    drawPlayer(positions.opponent1.x, positions.opponent1.y, diagramConfig.playerColors.opponent, 'O1');
    drawPlayer(positions.opponent2.x, positions.opponent2.y, diagramConfig.playerColors.opponent, 'O2');
  }
  
  // Fonction pour animer le mouvement des joueurs
  function animatePlayers() {
    if (currentState.animating) return;
    
    currentState.animating = true;
    
    let startPositions;
    let endPositions;
    
    if (currentState.zone === 'offensive') {
      startPositions = playerPositions.offensive.initial;
      endPositions = playerPositions.offensive.animation;
    } else {
      startPositions = playerPositions.neutral[currentState.formation].initial;
      endPositions = playerPositions.neutral[currentState.formation].animation;
    }
    
    const startTime = Date.now();
    
    function animate() {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / diagramConfig.animationSpeed, 1);
      
      // Calculer les positions intermédiaires
      const currentPositions = {
        dog: {
          x: startPositions.dog.x + (endPositions.dog.x - startPositions.dog.x) * progress,
          y: startPositions.dog.y + (endPositions.dog.y - startPositions.dog.y) * progress
        },
        fox: {
          x: startPositions.fox.x + (endPositions.fox.x - startPositions.fox.x) * progress,
          y: startPositions.fox.y + (endPositions.fox.y - startPositions.fox.y) * progress
        },
        hawk: {
          x: startPositions.hawk.x + (endPositions.hawk.x - startPositions.hawk.x) * progress,
          y: startPositions.hawk.y + (endPositions.hawk.y - startPositions.hawk.y) * progress
        },
        defense1: {
          x: startPositions.defense1.x + (endPositions.defense1.x - startPositions.defense1.x) * progress,
          y: startPositions.defense1.y + (endPositions.defense1.y - startPositions.defense1.y) * progress
        },
        defense2: {
          x: startPositions.defense2.x + (endPositions.defense2.x - startPositions.defense2.x) * progress,
          y: startPositions.defense2.y + (endPositions.defense2.y - startPositions.defense2.y) * progress
        },
        opponent1: {
          x: startPositions.opponent1.x + (endPositions.opponent1.x - startPositions.opponent1.x) * progress,
          y: startPositions.opponent1.y + (endPositions.opponent1.y - startPositions.opponent1.y) * progress
        },
        opponent2: {
          x: startPositions.opponent2.x + (endPositions.opponent2.x - startPositions.opponent2.x) * progress,
          y: startPositions.opponent2.y + (endPositions.opponent2.y - startPositions.opponent2.y) * progress
        }
      };
      
      // Redessiner la patinoire et les joueurs
      ctx.clearRect(0, 0, diagramCanvas.width, diagramCanvas.height);
      drawRink();
      drawPlayers(currentPositions);
      
      // Continuer l'animation si nécessaire
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        currentState.animating = false;
      }
    }
    
    animate();
  }
  
  // Fonction pour réinitialiser le diagramme
  function resetDiagram() {
    ctx.clearRect(0, 0, diagramCanvas.width, diagramCanvas.height);
    drawRink();
    
    let positions;
    if (currentState.zone === 'offensive') {
      positions = playerPositions.offensive.initial;
    } else {
      positions = playerPositions.neutral[currentState.formation].initial;
    }
    
    drawPlayers(positions);
  }
  
  // Initialisation du diagramme
  resetDiagram();
  
  // Gestionnaires d'événements
  document.querySelectorAll('.zone-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Mettre à jour l'état actif des boutons
      document.querySelectorAll('.zone-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Mettre à jour la zone actuelle
      currentState.zone = this.dataset.zone;
      
      // Mettre à jour le titre
      document.querySelector('.zone-name').textContent = currentState.zone === 'offensive' ? 'Zone Offensive' : 'Zone Neutre';
      
      // Afficher/masquer le sélecteur de formation
      document.querySelector('.formation-selector').style.display = currentState.zone === 'neutral' ? 'block' : 'none';
      
      // Mettre à jour les descriptions
      document.querySelectorAll('.zone-description').forEach(desc => desc.classList.remove('active'));
      document.querySelector('.' + currentState.zone + '-zone').classList.add('active');
      
      // Réinitialiser le diagramme
      resetDiagram();
    });
  });
  
  const formationSelect = document.getElementById('formation-select');
  if (formationSelect) {
    formationSelect.addEventListener('change', function() {
      currentState.formation = this.value;
      resetDiagram();
    });
  }
  
  const playAnimation = document.getElementById('play-animation');
  if (playAnimation) {
    playAnimation.addEventListener('click', animatePlayers);
  }
  
  const resetAnimation = document.getElementById('reset-animation');
  if (resetAnimation) {
    resetAnimation.addEventListener('click', resetDiagram);
  }
  
  // Afficher/masquer le sélecteur de formation selon la zone initiale
  const formationSelector = document.querySelector('.formation-selector');
  if (formationSelector) {
    formationSelector.style.display = currentState.zone === 'neutral' ? 'block' : 'none';
  }
}

// Initialiser les fonctionnalités lorsque la page est chargée
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser la navigation
  initNavigation();
  
  // Initialiser les diagrammes interactifs
  initDiagrams();
  
  // Définir le français comme langue par défaut
  document.body.classList.add('lang-fr');
});
