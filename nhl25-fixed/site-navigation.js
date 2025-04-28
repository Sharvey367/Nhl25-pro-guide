/* Navigation améliorée pour le site NHL 25 Pro Guide */

// Structure HTML pour la navigation principale
const mainNavigation = `
<nav class="main-nav">
  <div class="nav-container">
    <div class="logo">
      <a href="index.html">
        <img src="images/logo.png" alt="NHL 25 Pro Guide">
        <span>NHL 25 Pro Guide</span>
      </a>
    </div>
    
    <div class="nav-links">
      <a href="index.html" class="nav-link">
        <i class="fas fa-home"></i>
        <span>Accueil</span>
      </a>
      <a href="builds.html" class="nav-link">
        <i class="fas fa-user-cog"></i>
        <span>Builds Optimaux</span>
      </a>
      <a href="positioning.html" class="nav-link">
        <i class="fas fa-hockey-puck"></i>
        <span>Positionnement</span>
      </a>
      <a href="techniques.html" class="nav-link">
        <i class="fas fa-bolt"></i>
        <span>Techniques Avancées</span>
      </a>
      <a href="coach.html" class="nav-link">
        <i class="fas fa-chalkboard-teacher"></i>
        <span>Coach Corner</span>
      </a>
    </div>
    
    <div class="nav-actions">
      <button class="lang-toggle">
        <span class="current-lang">FR</span>
        <i class="fas fa-globe"></i>
      </button>
      <button class="mobile-menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
  
  <div class="mobile-nav">
    <!-- Version mobile du menu, s'affiche lorsque le bouton hamburger est cliqué -->
  </div>
</nav>
`;

// Structure HTML pour la navigation secondaire (sous-menu)
const secondaryNavigation = `
<div class="secondary-nav">
  <div class="container">
    <div class="secondary-nav-container">
      <!-- Le contenu de cette section sera généré dynamiquement en fonction de la page active -->
    </div>
  </div>
</div>
`;

// Configuration des sous-menus pour chaque section principale
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

// Styles CSS pour la navigation principale et secondaire
const navigationStyles = `
/* Navigation principale */
.main-nav {
  background-color: #0f1c2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.logo img {
  height: 40px;
  margin-right: 12px;
}

.logo span {
  font-size: 20px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  color: #b8c7dc;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link i {
  font-size: 18px;
  margin-bottom: 4px;
}

.nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  color: #ffffff;
  background-color: #2a4d7f;
}

.nav-actions {
  display: flex;
  gap: 16px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: 1px solid #4a90e2;
  color: #4a90e2;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-toggle:hover {
  background-color: rgba(74, 144, 226, 0.1);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}

.mobile-nav {
  display: none;
  background-color: #0f1c2e;
  padding: 20px;
}

/* Navigation secondaire */
.secondary-nav {
  background-color: #1e3a5f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.secondary-nav-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 10px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.secondary-nav-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.sub-nav-link {
  display: inline-block;
  padding: 12px 16px;
  color: #b8c7dc;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.sub-nav-link:hover {
  color: #ffffff;
}

.sub-nav-link.active {
  color: #ffffff;
  border-bottom: 3px solid #4a90e2;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .mobile-nav.active {
    display: block;
  }
  
  .mobile-nav .nav-link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .mobile-nav .nav-link i {
    margin-right: 12px;
    margin-bottom: 0;
  }
  
  .secondary-nav-container {
    justify-content: flex-start;
  }
}
`;

// JavaScript pour gérer la navigation
const navigationScript = `
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

// Initialiser la navigation lorsque la page est chargée
document.addEventListener('DOMContentLoaded', initNavigation);
`;

// Structure HTML pour la page des techniques avancées (page d'accueil des techniques)
const techniquesPageHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NHL 25 Pro Guide - Techniques Avancées</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .technique-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      margin: 30px 0;
    }
    
    .technique-card {
      background: linear-gradient(to bottom, #1e3a5f, #0f1c2e);
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .technique-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
    }
    
    .technique-card-image {
      height: 180px;
      background-size: cover;
      background-position: center;
      position: relative;
    }
    
    .technique-card-image::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: linear-gradient(to top, rgba(14, 28, 46, 0.9), transparent);
    }
    
    .technique-card-content {
      padding: 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .technique-card-title {
      color: #ffffff;
      font-size: 20px;
      margin: 0 0 12px 0;
    }
    
    .technique-card-description {
      color: #b8c7dc;
      line-height: 1.6;
      margin-bottom: 16px;
      flex-grow: 1;
    }
    
    .technique-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    
    .difficulty-tag {
      padding: 4px 10px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 12px;
      color: white;
    }
    
    .difficulty-beginner {
      background-color: #2ecc71;
    }
    
    .difficulty-intermediate {
      background-color: #f39c12;
    }
    
    .difficulty-advanced {
      background-color: #e74c3c;
    }
    
    .technique-card-link {
      color: #4a90e2;
      text-decoration: none;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s ease;
    }
    
    .technique-card-link:hover {
      color: #3a80d2;
    }
    
    @media (max-width: 768px) {
      .technique-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation principale -->
  <nav class="main-nav">
    <div class="nav-container">
      <div class="logo">
        <a href="index.html">
          <img src="images/logo.png" alt="NHL 25 Pro Guide">
          <span>NHL 25 Pro Guide</span>
        </a>
      </div>
      
      <div class="nav-links">
        <a href="index.html" class="nav-link">
          <i class="fas fa-home"></i>
          <span>Accueil</span>
        </a>
        <a href="builds.html" class="nav-link">
          <i class="fas fa-user-cog"></i>
          <span>Builds Optimaux</span>
        </a>
        <a href="positioning.html" class="nav-link">
          <i class="fas fa-hockey-puck"></i>
          <span>Positionnement</span>
        </a>
        <a href="techniques.html" class="nav-link active">
          <i class="fas fa-bolt"></i>
          <span>Techniques Avancées</span>
        </a>
        <a href="coach.html" class="nav-link">
          <i class="fas fa-chalkboard-teacher"></i>
          <span>Coach Corner</span>
        </a>
      </div>
      
      <div class="nav-actions">
        <button class="lang-toggle">
          <span class="current-lang">FR</span>
          <i class="fas fa-globe"></i>
        </button>
        <button class="mobile-menu-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
  
  <!-- Navigation secondaire -->
  <div class="secondary-nav">
    <div class="container">
      <div class="secondary-nav-container">
        <a href="techniques.html" class="sub-nav-link active">Vue d'ensemble</a>
        <a href="l2-mechanics-advanced.html" class="sub-nav-link">Mécaniques L2/LT Avancées</a>
        <a href="gliding-techniques.html" class="sub-nav-link">Techniques de Gliding</a>
        <a href="advanced-shooting.html" class="sub-nav-link">Tirs Avancés</a>
        <a href="defensive-techniques.html" class="sub-nav-link">Techniques Défensives</a>
      </div>
    </div>
  </div>
  
  <!-- En-tête de page -->
  <header class="page-header">
    <div class="header-content">
      <h1 class="page-title">Techniques Avancées</h1>
      <p class="page-description">Maîtrisez les techniques qui feront la différence dans vos matchs EASHL 6vs6 contre des adversaires humains.</p>
    </div>
    <div class="header-meta">
      <div class="last-update">
        <i class="fas fa-clock"></i>
        <span>Dernière mise à jour: Avril 2025</span>
      </div>
    </div>
  </header>
  
  <main class="container page-transition">
    <section class="content-section">
      <div class="section-header">
        <h2 class="section-title">Techniques Essentielles</h2>
      </div>
      
      <div class="section-content">
        <p>Découvrez les techniques avancées qui vous permettront de dominer en EASHL 6vs6. Ces techniques ont été analysées et validées par des joueurs de haut niveau et sont particulièrement efficaces contre des adversaires humains.</p>
        
        <div class="technique-grid">
          <div class="technique-card">
            <div class="technique-card-image" style="background-image: url('images/l2-mechanics.jpg');"></div>
            <div class="technique-card-content">
              <h3 class="technique-card-title">Mécaniques L2/LT Avancées</h3>
              <p class="technique-card-description">Maîtrisez l'art de la protection de rondelle et du contrôle de vision avec une analyse frame par frame des techniques L2/LT les plus efficaces.</p>
              <div class="technique-card-footer">
                <span class="difficulty-tag difficulty-advanced">Avancé</span>
                <a href="l2-mechanics-advanced.html" class="technique-card-link">
                  Découvrir <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="technique-card">
            <div class="technique-card-image" style="background-image: url('images/gliding.jpg');"></div>
            <div class="technique-card-content">
              <h3 class="technique-card-title">Techniques de Gliding</h3>
              <p class="technique-card-description">Apprenez quand et comment utiliser le gliding versus le sprint pour optimiser vos déplacements et maintenir un contrôle parfait sur la glace.</p>
              <div class="technique-card-footer">
                <span class="difficulty-tag difficulty-intermediate">Intermédiaire</span>
                <a href="gliding-techniques.html" class="technique-card-link">
                  Découvrir <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="technique-card">
            <div class="technique-card-image" style="background-image: url('images/shooting.jpg');"></div>
            <div class="technique-card-content">
              <h3 class="technique-card-title">Tirs Avancés</h3>
              <p class="technique-card-description">Découvrez les techniques de tir spécialisées qui sont particulièrement efficaces contre des gardiens humains en EASHL 6vs6.</p>
              <div class="technique-card-footer">
                <span class="difficulty-tag difficulty-intermediate">Intermédiaire</span>
                <a href="advanced-shooting.html" class="technique-card-link">
                  Découvrir <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="technique-card">
            <div class="technique-card-image" style="background-image: url('images/defense.jpg');"></div>
            <div class="technique-card-content">
              <h3 class="technique-card-title">Techniques Défensives</h3>
              <p class="technique-card-description">Maîtrisez les techniques défensives avancées pour contrer efficacement les attaquants humains et récupérer la rondelle.</p>
              <div class="technique-card-footer">
                <span class="difficulty-tag difficulty-intermediate">Intermédiaire</span>
                <a href="defensive-techniques.html" class="technique-card-link">
                  Découvrir <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="content-section">
      <div class="section-header">
        <h2 class="section-title">Progression d'Apprentissage</h2>
      </div>
      
      <div class="section-content">
        <p>Pour maîtriser efficacement les techniques avancées, nous recommandons la progression d'apprentissage suivante :</p>
        
        <ol>
          <li><strong>Niveau Débutant</strong> : Commencez par les techniques de gliding de base pour améliorer votre mobilité et votre contrôle sur la glace.</li>
          <li><strong>Niveau Intermédiaire</strong> : Passez ensuite aux techniques de tir avancées et aux techniques défensives pour améliorer votre efficacité offensive et défensive.</li>
          <li><strong>Niveau Avancé</strong> : Terminez par les mécaniques L2/LT avancées qui demandent une excellente maîtrise des contrôles et un bon sens du timing.</li>
        </ol>
        
        <p>Consacrez au moins 15-20 minutes d'entraînement à chaque technique avant vos sessions de jeu pour développer votre mémoire musculaire. La maîtrise de ces techniques demande de la pratique régulière et consciente.</p>
      </div>
    </section>
  </main>
  
  <!-- Pied de page -->
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="images/logo.png" alt="NHL 25 Pro Guide">
        <h3>NHL 25 Pro Guide</h3>
        <p>Guide complet pour dominer en EASHL 6v6</p>
      </div>
      
      <div class="footer-links">
        <div class="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="builds.html">Builds Optimaux</a></li>
            <li><a href="positioning.html">Positionnement</a></li>
            <li><a href="techniques.html">Techniques Avancées</a></li>
            <li><a href="coach.html">Coach Corner</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Ressources</h4>
          <ul>
            <li><a href="#">Vidéos d'analyse</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Glossaire</a></li>
            <li><a href="#">Mises à jour</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Communauté</h4>
          <ul>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Twitch</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 NHL 25 Pro Guide. Tous droits réservés.</p>
      <p>Ce site n'est pas affilié à EA Sports ou à la LNH.</p>
    </div>
  </footer>
  
  <script src="js/script.js"></script>
</body>
</html>
`;

// Exemple de mise en œuvre de la navigation dans une page
const navigationImplementationExample = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NHL 25 Pro Guide</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Navigation principale -->
  ${mainNavigation}
  
  <!-- Navigation secondaire (si nécessaire) -->
  ${secondaryNavigation}
  
  <!-- Contenu de la page -->
  <main class="container">
    <!-- Contenu spécifique à la page -->
  </main>
  
  <!-- Pied de page -->
  <footer class="site-footer">
    <!-- Contenu du pied de page -->
  </footer>
  
  <script>
    // Définition des sous-menus
    const subMenus = {
      builds: \`${subMenus.builds}\`,
      positioning: \`${subMenus.positioning}\`,
      techniques: \`${subMenus.techniques}\`,
      coach: \`${subMenus.coach}\`
    };
    
    // Code JavaScript pour la navigation
    ${navigationScript}
  </script>
</body>
</html>
`;
