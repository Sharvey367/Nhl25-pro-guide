/* Design de l'interface utilisateur modernisée */

// Nouvelle palette de couleurs
const colorPalette = {
  primary: '#2a4d7f',       // Bleu foncé - couleur principale
  secondary: '#4a90e2',     // Bleu clair - accents et boutons
  accent: '#2ecc71',        // Vert - pour les éléments de succès et les mises en évidence
  warning: '#f39c12',       // Orange - pour les avertissements
  danger: '#e74c3c',        // Rouge - pour les erreurs
  dark: '#0f1c2e',          // Bleu très foncé - arrière-plans
  light: '#b8c7dc',         // Bleu très clair - texte secondaire
  white: '#ffffff',         // Blanc - texte principal
  background: '#121f2e',    // Fond principal du site
  cardBg: '#1e3a5f',        // Fond des cartes et sections
  gradient1: 'linear-gradient(to right, #2a4d7f, #1a3056)', // Dégradé pour les en-têtes
  gradient2: 'linear-gradient(to bottom, #1e3a5f, #0f1c2e)' // Dégradé pour les cartes
};

// Structure de la navigation principale
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

// Styles CSS pour la navigation
const navigationStyles = `
.main-nav {
  background-color: ${colorPalette.dark};
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
  color: ${colorPalette.white};
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
  color: ${colorPalette.light};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link i {
  font-size: 18px;
  margin-bottom: 4px;
}

.nav-link:hover {
  color: ${colorPalette.white};
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  color: ${colorPalette.white};
  background-color: ${colorPalette.primary};
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
  border: 1px solid ${colorPalette.secondary};
  color: ${colorPalette.secondary};
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
  color: ${colorPalette.white};
  font-size: 24px;
  cursor: pointer;
}

.mobile-nav {
  display: none;
  background-color: ${colorPalette.dark};
  padding: 20px;
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
}
`;

// Structure de l'en-tête de page
const pageHeader = `
<header class="page-header">
  <div class="header-content">
    <h1 class="page-title">{{pageTitle}}</h1>
    <p class="page-description">{{pageDescription}}</p>
  </div>
  <div class="header-meta">
    <div class="last-update">
      <i class="fas fa-clock"></i>
      <span>Dernière mise à jour: {{lastUpdate}}</span>
    </div>
    <div class="share-buttons">
      <button class="share-button">
        <i class="fas fa-share-alt"></i>
        <span>Partager</span>
      </button>
    </div>
  </div>
</header>
`;

// Styles CSS pour l'en-tête de page
const pageHeaderStyles = `
.page-header {
  background: ${colorPalette.gradient1};
  padding: 40px 20px;
  margin-bottom: 30px;
  border-bottom: 3px solid ${colorPalette.secondary};
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.page-title {
  color: ${colorPalette.white};
  font-size: 36px;
  margin: 0 0 16px 0;
  font-weight: 700;
}

.page-description {
  color: ${colorPalette.light};
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
}

.header-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 24px auto 0;
}

.last-update {
  color: ${colorPalette.light};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.share-button {
  background-color: ${colorPalette.secondary};
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.share-button:hover {
  background-color: #3a80d2;
}

/* Responsive design */
@media (max-width: 768px) {
  .page-title {
    font-size: 28px;
  }
  
  .page-description {
    font-size: 16px;
  }
  
  .header-meta {
    flex-direction: column;
    gap: 16px;
  }
}
`;

// Structure de base pour les sections de contenu
const contentSection = `
<section class="content-section">
  <div class="section-header">
    <h2 class="section-title">{{sectionTitle}}</h2>
    <div class="section-actions">
      <button class="section-toggle">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  </div>
  
  <div class="section-content">
    {{sectionContent}}
  </div>
</section>
`;

// Styles CSS pour les sections de contenu
const contentSectionStyles = `
.content-section {
  background: ${colorPalette.gradient2};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  overflow: hidden;
}

.section-header {
  background: ${colorPalette.gradient1};
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${colorPalette.secondary};
}

.section-title {
  color: ${colorPalette.white};
  font-size: 24px;
  margin: 0;
  font-weight: 600;
}

.section-actions {
  display: flex;
  gap: 12px;
}

.section-toggle {
  background: none;
  border: none;
  color: ${colorPalette.white};
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.section-toggle.collapsed {
  transform: rotate(-90deg);
}

.section-content {
  padding: 24px;
  color: ${colorPalette.light};
  line-height: 1.6;
}

.section-content p {
  margin: 0 0 16px 0;
}

.section-content h3 {
  color: ${colorPalette.white};
  font-size: 20px;
  margin: 24px 0 16px 0;
}

.section-content ul, .section-content ol {
  margin: 16px 0;
  padding-left: 24px;
}

.section-content li {
  margin-bottom: 8px;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 20px;
  }
  
  .section-content {
    padding: 16px;
  }
}
`;

// Structure du pied de page
const footer = `
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
`;

// Styles CSS pour le pied de page
const footerStyles = `
.site-footer {
  background-color: ${colorPalette.dark};
  color: ${colorPalette.light};
  padding: 40px 20px 20px;
  margin-top: 60px;
  border-top: 3px solid ${colorPalette.primary};
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-logo {
  flex: 1;
  min-width: 250px;
}

.footer-logo img {
  height: 50px;
  margin-bottom: 16px;
}

.footer-logo h3 {
  color: ${colorPalette.white};
  font-size: 20px;
  margin: 0 0 8px 0;
}

.footer-logo p {
  margin: 0;
  font-size: 14px;
}

.footer-links {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-section {
  flex: 1;
  min-width: 150px;
}

.footer-section h4 {
  color: ${colorPalette.white};
  font-size: 16px;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: ${colorPalette.light};
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: ${colorPalette.white};
}

.footer-bottom {
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 14px;
}

.footer-bottom p {
  margin: 0 0 8px 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 30px;
  }
}
`;

// Styles globaux
const globalStyles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: ${colorPalette.background};
  color: ${colorPalette.white};
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

a {
  color: ${colorPalette.secondary};
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #3a80d2;
}

button {
  font-family: 'Roboto', sans-serif;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.btn-primary {
  background-color: ${colorPalette.secondary};
  border: none;
  color: white;
}

.btn-primary:hover {
  background-color: #3a80d2;
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid ${colorPalette.secondary};
  color: ${colorPalette.secondary};
}

.btn-secondary:hover {
  background-color: rgba(74, 144, 226, 0.1);
}

.text-center {
  text-align: center;
}

.mb-1 {
  margin-bottom: 8px;
}

.mb-2 {
  margin-bottom: 16px;
}

.mb-3 {
  margin-bottom: 24px;
}

.mb-4 {
  margin-bottom: 32px;
}

.mt-1 {
  margin-top: 8px;
}

.mt-2 {
  margin-top: 16px;
}

.mt-3 {
  margin-top: 24px;
}

.mt-4 {
  margin-top: 32px;
}

/* Animation pour les transitions de page */
.page-transition {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Styles pour les tableaux */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

th {
  background-color: ${colorPalette.primary};
  color: ${colorPalette.white};
  text-align: left;
  padding: 12px 16px;
}

td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

tr:last-child td {
  border-bottom: none;
}

tr:hover td {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  
  table {
    display: block;
    overflow-x: auto;
  }
}
`;

// Exemple de mise en page complète
const fullPageExample = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NHL 25 Pro Guide - Builds Optimaux</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Navigation principale -->
  <nav class="main-nav">
    <!-- Contenu de la navigation -->
  </nav>
  
  <!-- En-tête de page -->
  <header class="page-header">
    <!-- Contenu de l'en-tête -->
  </header>
  
  <main class="container page-transition">
    <!-- Filtres pour les builds -->
    <div class="build-filters">
      <!-- Contenu des filtres -->
    </div>
    
    <!-- Grille de builds -->
    <div class="builds-grid">
      <!-- Cartes de builds -->
    </div>
  </main>
  
  <!-- Pied de page -->
  <footer class="site-footer">
    <!-- Contenu du pied de page -->
  </footer>
  
  <script src="js/script.js"></script>
</body>
</html>
`;
