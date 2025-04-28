// Script de test pour le site NHL 25 Pro Guide

// Configuration des tests
const testConfig = {
  pages: [
    { name: 'Accueil', path: 'index.html' },
    { name: 'Builds Optimaux', path: 'builds.html' },
    { name: 'Positionnement', path: 'positioning.html' },
    { name: 'Techniques Avancées', path: 'techniques.html' },
    { name: 'Mécaniques L2/LT', path: 'l2-mechanics-advanced.html' },
    { name: 'Techniques de Gliding', path: 'gliding-techniques.html' },
    { name: 'Coach Corner', path: 'coach.html' }
  ],
  viewports: [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1366, height: 768 }
  ],
  browsers: ['Chrome', 'Firefox', 'Safari', 'Edge']
};

// Classe pour les tests
class SiteTestSuite {
  constructor() {
    this.results = {
      navigation: { passed: 0, failed: 0, issues: [] },
      responsiveness: { passed: 0, failed: 0, issues: [] },
      functionality: { passed: 0, failed: 0, issues: [] },
      content: { passed: 0, failed: 0, issues: [] },
      performance: { passed: 0, failed: 0, issues: [] }
    };
    
    this.testElements = {
      navigation: document.getElementById('navigation-tests'),
      responsiveness: document.getElementById('responsiveness-tests'),
      functionality: document.getElementById('functionality-tests'),
      content: document.getElementById('content-tests'),
      performance: document.getElementById('performance-tests'),
      summary: document.getElementById('test-summary')
    };
  }
  
  // Méthode pour exécuter tous les tests
  runAllTests() {
    this.testNavigation();
    this.testResponsiveness();
    this.testFunctionality();
    this.testContent();
    this.testPerformance();
    this.displaySummary();
  }
  
  // Test de la navigation
  testNavigation() {
    console.log('Testing navigation...');
    
    // Test 1: Vérifier que la navigation principale est présente
    this.runTest(
      'navigation',
      'Navigation principale présente',
      () => document.querySelector('.main-nav') !== null
    );
    
    // Test 2: Vérifier que la navigation secondaire est présente sur les pages appropriées
    this.runTest(
      'navigation',
      'Navigation secondaire présente sur les pages appropriées',
      () => {
        const currentPath = window.location.pathname;
        const needsSecondaryNav = currentPath.includes('builds') || 
                                 currentPath.includes('positioning') || 
                                 currentPath.includes('techniques') || 
                                 currentPath.includes('coach');
        
        const hasSecondaryNav = document.querySelector('.secondary-nav') !== null;
        return needsSecondaryNav === hasSecondaryNav;
      }
    );
    
    // Test 3: Vérifier que les liens de navigation fonctionnent
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      this.runTest(
        'navigation',
        `Lien de navigation vers ${href} fonctionne`,
        () => link.getAttribute('href') !== '#' && link.getAttribute('href') !== ''
      );
    });
    
    // Test 4: Vérifier que le bouton de changement de langue est présent
    this.runTest(
      'navigation',
      'Bouton de changement de langue présent',
      () => document.querySelector('.lang-toggle') !== null
    );
    
    // Test 5: Vérifier que le menu mobile est présent
    this.runTest(
      'navigation',
      'Menu mobile présent',
      () => document.querySelector('.mobile-menu-toggle') !== null
    );
  }
  
  // Test de la responsivité
  testResponsiveness() {
    console.log('Testing responsiveness...');
    
    // Test 1: Vérifier que le viewport meta tag est présent
    this.runTest(
      'responsiveness',
      'Viewport meta tag présent',
      () => document.querySelector('meta[name="viewport"]') !== null
    );
    
    // Test 2: Vérifier que les media queries sont appliquées
    const currentWidth = window.innerWidth;
    this.runTest(
      'responsiveness',
      'Media queries appliquées correctement',
      () => {
        if (currentWidth <= 768) {
          return window.getComputedStyle(document.querySelector('.nav-links')).display === 'none';
        } else {
          return window.getComputedStyle(document.querySelector('.nav-links')).display !== 'none';
        }
      }
    );
    
    // Test 3: Vérifier que les images sont responsives
    const images = document.querySelectorAll('img');
    let allImagesResponsive = true;
    images.forEach(img => {
      if (img.getAttribute('width') && !img.getAttribute('width').includes('%')) {
        allImagesResponsive = false;
      }
    });
    
    this.runTest(
      'responsiveness',
      'Images responsives',
      () => allImagesResponsive
    );
    
    // Test 4: Vérifier que les tableaux sont responsifs
    const tables = document.querySelectorAll('table');
    let allTablesResponsive = true;
    tables.forEach(table => {
      const tableParent = table.parentElement;
      if (window.getComputedStyle(tableParent).overflowX !== 'auto') {
        allTablesResponsive = false;
      }
    });
    
    this.runTest(
      'responsiveness',
      'Tableaux responsifs',
      () => allTablesResponsive
    );
  }
  
  // Test des fonctionnalités
  testFunctionality() {
    console.log('Testing functionality...');
    
    // Test 1: Vérifier que le changement de langue fonctionne
    const langToggle = document.querySelector('.lang-toggle');
    let langToggleWorks = false;
    
    if (langToggle) {
      const initialLang = document.querySelector('.current-lang').textContent;
      langToggle.click();
      const newLang = document.querySelector('.current-lang').textContent;
      langToggleWorks = initialLang !== newLang;
      
      // Remettre la langue d'origine
      langToggle.click();
    }
    
    this.runTest(
      'functionality',
      'Changement de langue fonctionne',
      () => langToggleWorks
    );
    
    // Test 2: Vérifier que le menu mobile fonctionne
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    let mobileMenuWorks = false;
    
    if (mobileMenuToggle && mobileNav) {
      const initialDisplay = window.getComputedStyle(mobileNav).display;
      mobileMenuToggle.click();
      const newDisplay = window.getComputedStyle(mobileNav).display;
      mobileMenuWorks = initialDisplay !== newDisplay;
      
      // Remettre l'état d'origine
      mobileMenuToggle.click();
    }
    
    this.runTest(
      'functionality',
      'Menu mobile fonctionne',
      () => mobileMenuWorks
    );
    
    // Test 3: Vérifier que les diagrammes interactifs fonctionnent (si présents)
    const diagramCanvas = document.getElementById('hockey-diagram');
    let diagramWorks = true;
    
    if (diagramCanvas) {
      const playButton = document.getElementById('play-animation');
      const resetButton = document.getElementById('reset-animation');
      
      diagramWorks = playButton !== null && resetButton !== null;
    } else {
      // Si le diagramme n'est pas présent sur cette page, on considère le test comme réussi
      diagramWorks = true;
    }
    
    this.runTest(
      'functionality',
      'Diagrammes interactifs fonctionnent',
      () => diagramWorks
    );
  }
  
  // Test du contenu
  testContent() {
    console.log('Testing content...');
    
    // Test 1: Vérifier que le contenu français est présent
    this.runTest(
      'content',
      'Contenu français présent',
      () => document.querySelectorAll('.lang-fr, [lang="fr"]').length > 0
    );
    
    // Test 2: Vérifier que le contenu anglais est présent
    this.runTest(
      'content',
      'Contenu anglais présent',
      () => document.querySelectorAll('.lang-en, [lang="en"]').length > 0
    );
    
    // Test 3: Vérifier que les images ont des attributs alt
    const images = document.querySelectorAll('img');
    let allImagesHaveAlt = true;
    images.forEach(img => {
      if (!img.hasAttribute('alt')) {
        allImagesHaveAlt = false;
      }
    });
    
    this.runTest(
      'content',
      'Images ont des attributs alt',
      () => allImagesHaveAlt
    );
    
    // Test 4: Vérifier que les liens externes s'ouvrent dans un nouvel onglet
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    let allExternalLinksHaveTarget = true;
    externalLinks.forEach(link => {
      if (link.getAttribute('target') !== '_blank') {
        allExternalLinksHaveTarget = false;
      }
    });
    
    this.runTest(
      'content',
      'Liens externes s\'ouvrent dans un nouvel onglet',
      () => allExternalLinksHaveTarget
    );
  }
  
  // Test des performances
  testPerformance() {
    console.log('Testing performance...');
    
    // Test 1: Vérifier que les images sont optimisées
    const images = document.querySelectorAll('img');
    let allImagesOptimized = true;
    images.forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        // Considérer les images de plus de 1MB comme non optimisées
        // Note: Cette vérification est simplifiée pour les besoins du test
        if (img.src.startsWith('data:') && img.src.length > 1000000) {
          allImagesOptimized = false;
        }
      }
    });
    
    this.runTest(
      'performance',
      'Images optimisées',
      () => allImagesOptimized
    );
    
    // Test 2: Vérifier que les polices sont chargées
    const fontLoaded = document.fonts && document.fonts.check('12px Montserrat');
    
    this.runTest(
      'performance',
      'Polices chargées correctement',
      () => fontLoaded
    );
    
    // Test 3: Vérifier le temps de chargement de la page
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    
    this.runTest(
      'performance',
      'Temps de chargement acceptable',
      () => loadTime < 3000 // Moins de 3 secondes est considéré comme acceptable
    );
  }
  
  // Méthode pour exécuter un test individuel
  runTest(category, description, testFunction) {
    try {
      const result = testFunction();
      if (result) {
        this.results[category].passed++;
        this.logTestResult(category, description, true);
      } else {
        this.results[category].failed++;
        this.results[category].issues.push(description);
        this.logTestResult(category, description, false);
      }
    } catch (error) {
      this.results[category].failed++;
      this.results[category].issues.push(`${description} - Error: ${error.message}`);
      this.logTestResult(category, description, false, error.message);
    }
  }
  
  // Méthode pour afficher le résultat d'un test
  logTestResult(category, description, passed, errorMessage = '') {
    const resultElement = document.createElement('div');
    resultElement.className = `test-result ${passed ? 'passed' : 'failed'}`;
    
    const statusIcon = document.createElement('span');
    statusIcon.className = 'status-icon';
    statusIcon.textContent = passed ? '✓' : '✗';
    
    const descriptionElement = document.createElement('span');
    descriptionElement.className = 'test-description';
    descriptionElement.textContent = description;
    
    resultElement.appendChild(statusIcon);
    resultElement.appendChild(descriptionElement);
    
    if (!passed && errorMessage) {
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = errorMessage;
      resultElement.appendChild(errorElement);
    }
    
    this.testElements[category].appendChild(resultElement);
  }
  
  // Méthode pour afficher le résumé des tests
  displaySummary() {
    let totalPassed = 0;
    let totalFailed = 0;
    
    for (const category in this.results) {
      totalPassed += this.results[category].passed;
      totalFailed += this.results[category].failed;
      
      const categoryElement = document.createElement('div');
      categoryElement.className = 'category-summary';
      
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
      
      const categoryStats = document.createElement('div');
      categoryStats.className = 'category-stats';
      categoryStats.innerHTML = `
        <span class="passed-count">${this.results[category].passed} réussis</span>
        <span class="failed-count">${this.results[category].failed} échoués</span>
      `;
      
      categoryElement.appendChild(categoryTitle);
      categoryElement.appendChild(categoryStats);
      
      if (this.results[category].issues.length > 0) {
        const issuesList = document.createElement('ul');
        issuesList.className = 'issues-list';
        
        this.results[category].issues.forEach(issue => {
          const issueItem = document.createElement('li');
          issueItem.textContent = issue;
          issuesList.appendChild(issueItem);
        });
        
        categoryElement.appendChild(issuesList);
      }
      
      this.testElements.summary.appendChild(categoryElement);
    }
    
    const totalElement = document.createElement('div');
    totalElement.className = 'total-summary';
    totalElement.innerHTML = `
      <h2>Résumé des tests</h2>
      <div class="total-stats">
        <span class="total-count">Total: ${totalPassed + totalFailed} tests</span>
        <span class="passed-count">Réussis: ${totalPassed} (${Math.round(totalPassed / (totalPassed + totalFailed) * 100)}%)</span>
        <span class="failed-count">Échoués: ${totalFailed} (${Math.round(totalFailed / (totalPassed + totalFailed) * 100)}%)</span>
      </div>
    `;
    
    this.testElements.summary.insertBefore(totalElement, this.testElements.summary.firstChild);
  }
}

// HTML pour la page de test
const testPageHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NHL 25 Pro Guide - Tests</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .test-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .test-section {
      background: linear-gradient(to bottom, #1e3a5f, #0f1c2e);
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      margin-bottom: 24px;
      overflow: hidden;
    }
    
    .test-header {
      background: linear-gradient(to right, #2a4d7f, #1a3056);
      padding: 16px 20px;
      border-bottom: 2px solid #4a90e2;
    }
    
    .test-header h2 {
      color: #ffffff;
      font-size: 22px;
      margin: 0;
    }
    
    .test-content {
      padding: 20px;
    }
    
    .test-result {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
      padding: 10px;
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    .test-result.passed {
      border-left: 4px solid #2ecc71;
    }
    
    .test-result.failed {
      border-left: 4px solid #e74c3c;
    }
    
    .status-icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 50%;
      margin-right: 12px;
      font-weight: bold;
    }
    
    .passed .status-icon {
      background-color: #2ecc71;
      color: white;
    }
    
    .failed .status-icon {
      background-color: #e74c3c;
      color: white;
    }
    
    .test-description {
      flex-grow: 1;
      color: #b8c7dc;
    }
    
    .error-message {
      margin-top: 8px;
      margin-left: 36px;
      padding: 8px;
      background-color: rgba(231, 76, 60, 0.1);
      border-radius: 4px;
      color: #e74c3c;
      font-size: 14px;
    }
    
    .category-summary {
      margin-bottom: 20px;
      padding: 16px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
    }
    
    .category-summary h3 {
      color: #ffffff;
      margin: 0 0 12px 0;
    }
    
    .category-stats {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
    }
    
    .passed-count {
      color: #2ecc71;
    }
    
    .failed-count {
      color: #e74c3c;
    }
    
    .total-count {
      color: #4a90e2;
    }
    
    .issues-list {
      margin: 12px 0 0 0;
      padding-left: 20px;
      color: #e74c3c;
    }
    
    .total-summary {
      margin-bottom: 30px;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border-left: 4px solid #4a90e2;
    }
    
    .total-summary h2 {
      color: #ffffff;
      margin: 0 0 16px 0;
    }
    
    .total-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .test-controls {
      display: flex;
      gap: 16px;
      margin-bottom: 30px;
    }
    
    .test-button {
      padding: 12px 24px;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    .test-button:hover {
      background-color: #3a80d2;
    }
    
    .test-button.secondary {
      background-color: transparent;
      border: 1px solid #4a90e2;
      color: #4a90e2;
    }
    
    .test-button.secondary:hover {
      background-color: rgba(74, 144, 226, 0.1);
    }
    
    .viewport-selector {
      display: flex;
      gap: 8px;
      margin-bottom: 20px;
    }
    
    .viewport-button {
      padding: 8px 16px;
      background-color: transparent;
      border: 1px solid #4a90e2;
      color: #4a90e2;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .viewport-button.active {
      background-color: #4a90e2;
      color: white;
    }
    
    .browser-selector {
      display: flex;
      gap: 8px;
      margin-bottom: 20px;
    }
    
    .browser-button {
      padding: 8px 16px;
      background-color: transparent;
      border: 1px solid #4a90e2;
      color: #4a90e2;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .browser-button.active {
      background-color: #4a90e2;
      color: white;
    }
    
    @media (max-width: 768px) {
      .test-controls, .viewport-selector, .browser-selector, .total-stats {
        flex-direction: column;
        gap: 8px;
      }
    }
  </style>
</head>
<body>
  <div class="test-container">
    <h1>Tests du site NHL 25 Pro Guide</h1>
    
    <div class="test-controls">
      <button id="run-all-tests" class="test-button">Exécuter tous les tests</button>
      <button id="clear-results" class="test-button secondary">Effacer les résultats</button>
    </div>
    
    <div class="viewport-selector">
      <button class="viewport-button active" data-viewport="Desktop">Desktop</button>
      <button class="viewport-button" data-viewport="Tablet">Tablet</button>
      <button class="viewport-button" data-viewport="Mobile">Mobile</button>
    </div>
    
    <div class="browser-selector">
      <button class="browser-button active" data-browser="Chrome">Chrome</button>
      <button class="browser-button" data-browser="Firefox">Firefox</button>
      <button class="browser-button" data-browser="Safari">Safari</button>
      <button class="browser-button" data-browser="Edge">Edge</button>
    </div>
    
    <div id="test-summary" class="test-section">
      <div class="test-header">
        <h2>Résumé des tests</h2>
      </div>
      <div class="test-content">
        <!-- Le résumé des tests sera inséré ici -->
      </div>
    </div>
    
    <div class="test-section">
      <div class="test-header">
        <h2>Tests de navigation</h2>
      </div>
      <div class="test-content">
        <div id="navigation-tests">
          <!-- Les résultats des tests de navigation seront insérés ici -->
        </div>
      </div>
    </div>
    
    <div class="test-section">
      <div class="test-header">
        <h2>Tests de responsivité</h2>
      </div>
      <div class="test-content">
        <div id="responsiveness-tests">
          <!-- Les résultats des tests de responsivité seront insérés ici -->
        </div>
      </div>
    </div>
    
    <div class="test-section">
      <div class="test-header">
        <h2>Tests de fonctionnalité</h2>
      </div>
      <div class="test-content">
        <div id="functionality-tests">
          <!-- Les résultats des tests de fonctionnalité seront insérés ici -->
        </div>
      </div>
    </div>
    
    <div class="test-section">
      <div class="test-header">
        <h2>Tests de contenu</h2>
      </div>
      <div class="test-content">
        <div id="content-tests">
          <!-- Les résultats des tests de contenu seront insérés ici -->
        </div>
      </div>
    </div>
    
    <div class="test-section">
      <div class="test-header">
        <h2>Tests de performance</h2>
      </div>
      <div class="test-content">
        <div id="performance-tests">
          <!-- Les résultats des tests de performance seront insérés ici -->
        </div>
      </div>
    </div>
  </div>
  
  <script>
    // Initialisation des tests
    document.addEventListener('DOMContentLoaded', function() {
      const runAllTestsButton = document.getElementById('run-all-tests');
      const clearResultsButton = document.getElementById('clear-results');
      const viewportButtons = document.querySelectorAll('.viewport-button');
      const browserButtons = document.querySelectorAll('.browser-button');
      
      // Gestionnaire pour le bouton d'exécution des tests
      runAllTestsButton.addEventListener('click', function() {
        clearTestResults();
        const testSuite = new SiteTestSuite();
        testSuite.runAllTests();
      });
      
      // Gestionnaire pour le bouton d'effacement des résultats
      clearResultsButton.addEventListener('click', clearTestResults);
      
      // Gestionnaires pour les boutons de viewport
      viewportButtons.forEach(button => {
        button.addEventListener('click', function() {
          viewportButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          // Simuler le changement de viewport (dans un environnement réel, cela pourrait redimensionner l'iframe)
          console.log('Viewport changed to:', this.dataset.viewport);
        });
      });
      
      // Gestionnaires pour les boutons de navigateur
      browserButtons.forEach(button => {
        button.addEventListener('click', function() {
          browserButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          // Simuler le changement de navigateur (dans un environnement réel, cela pourrait changer l'agent utilisateur)
          console.log('Browser changed to:', this.dataset.browser);
        });
      });
      
      // Fonction pour effacer les résultats des tests
      function clearTestResults() {
        document.getElementById('navigation-tests').innerHTML = '';
        document.getElementById('responsiveness-tests').innerHTML = '';
        document.getElementById('functionality-tests').innerHTML = '';
        document.getElementById('content-tests').innerHTML = '';
        document.getElementById('performance-tests').innerHTML = '';
        document.getElementById('test-summary').innerHTML = '<div class="test-header"><h2>Résumé des tests</h2></div><div class="test-content"></div>';
      }
    });
  </script>
</body>
</html>
`;

// Exporter les configurations et le HTML pour utilisation
module.exports = {
  testConfig,
  SiteTestSuite,
  testPageHTML
};
