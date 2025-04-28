/* Diagrammes interactifs pour le système Dog Fox Hawk */

// Configuration du canvas pour les diagrammes
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

// Structure HTML pour le diagramme interactif
const interactiveDiagramHTML = `
<div class="diagram-container">
  <div class="diagram-header">
    <h3 class="diagram-title">Système Dog Fox Hawk - <span class="zone-name">Zone Offensive</span></h3>
    <div class="diagram-controls">
      <div class="zone-selector">
        <button class="zone-btn active" data-zone="offensive">Zone Offensive</button>
        <button class="zone-btn" data-zone="neutral">Zone Neutre</button>
      </div>
      <div class="formation-selector">
        <select id="formation-select">
          <option value="1-2-2">Formation 1-2-2</option>
          <option value="1-3-1">Formation 1-3-1</option>
          <option value="2-1-2">Formation 2-1-2</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="diagram-view">
    <canvas id="hockey-diagram" width="${diagramConfig.width}" height="${diagramConfig.height}"></canvas>
    
    <div class="player-legend">
      <div class="legend-item">
        <div class="legend-color" style="background-color: ${diagramConfig.playerColors.dog}"></div>
        <span>Dog (Ailier Gauche)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background-color: ${diagramConfig.playerColors.fox}"></div>
        <span>Fox (Centre)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background-color: ${diagramConfig.playerColors.hawk}"></div>
        <span>Hawk (Ailier Droit)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background-color: ${diagramConfig.playerColors.defense}"></div>
        <span>Défenseurs</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background-color: ${diagramConfig.playerColors.opponent}"></div>
        <span>Adversaires</span>
      </div>
    </div>
  </div>
  
  <div class="diagram-actions">
    <button id="play-animation" class="btn btn-primary">
      <i class="fas fa-play"></i> Animer
    </button>
    <button id="reset-animation" class="btn btn-secondary">
      <i class="fas fa-undo"></i> Réinitialiser
    </button>
  </div>
  
  <div class="diagram-description">
    <h4>Description du système</h4>
    <div class="zone-description offensive-zone active">
      <p>Le système "Dog Fox Hawk" en zone offensive définit clairement les rôles et les zones de responsabilité pour chaque attaquant :</p>
      <ul>
        <li><strong>Dog (Chien) - Ailier Gauche</strong> : Joueur agressif qui applique la pression sur le porteur de rondelle et force les erreurs. Responsable du forecheck primaire et de la récupération des rondelles dans les coins.</li>
        <li><strong>Fox (Renard) - Centre</strong> : Joueur intelligent et positionnel qui lit le jeu et anticipe les passes. Soutient le Dog et couvre les lignes de passes centrales. Responsable du soutien défensif et des options de passes sécuritaires.</li>
        <li><strong>Hawk (Faucon) - Ailier Droit</strong> : Joueur opportuniste qui se positionne pour exploiter les espaces créés par le Dog et le Fox. Responsable de la couverture haute et des contre-attaques rapides.</li>
      </ul>
      <p>La communication est essentielle dans ce système. Annoncez clairement votre rôle ("Dog", "Fox" ou "Hawk") au début de chaque séquence offensive pour éviter la confusion et maintenir la structure.</p>
    </div>
    <div class="zone-description neutral-zone">
      <p>En zone neutre, le système "Dog Fox Hawk" s'adapte pour créer une structure défensive efficace :</p>
      <ul>
        <li><strong>Formation 1-2-2</strong> : Un attaquant avancé (Dog) applique la pression, tandis que Fox et Hawk forment une ligne de soutien, avec les deux défenseurs en arrière. Efficace contre les sorties de zone rapides.</li>
        <li><strong>Formation 1-3-1</strong> : Dog en avant, Fox et Hawk sur les ailes avec un défenseur au centre, et l'autre défenseur en couverture arrière. Idéal pour piéger l'adversaire sur les bandes.</li>
        <li><strong>Formation 2-1-2</strong> : Dog et Fox appliquent la pression en avant, Hawk au centre, et les deux défenseurs en arrière. Agressif mais risqué, utilisé pour forcer des revirements rapides.</li>
      </ul>
      <p>Adaptez votre formation en fonction du style de jeu adverse et de la situation de match.</p>
    </div>
  </div>
</div>
`;

// Styles CSS pour le diagramme interactif
const interactiveDiagramCSS = `
.diagram-container {
  background: linear-gradient(to bottom, #1e3a5f, #0f1c2e);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  overflow: hidden;
  padding-bottom: 20px;
}

.diagram-header {
  background: linear-gradient(to right, #2a4d7f, #1a3056);
  padding: 16px 20px;
  border-bottom: 2px solid #4a90e2;
}

.diagram-title {
  color: #ffffff;
  font-size: 22px;
  margin: 0 0 16px 0;
}

.diagram-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.zone-selector {
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.zone-btn {
  background: none;
  border: none;
  color: #b8c7dc;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.zone-btn.active {
  background-color: #4a90e2;
  color: white;
}

.formation-selector select {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.diagram-view {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#hockey-diagram {
  background-color: #e0f0ff;
  border-radius: 8px;
  margin-bottom: 20px;
  max-width: 100%;
  height: auto;
}

.player-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.diagram-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
}

.diagram-description {
  padding: 0 20px;
}

.diagram-description h4 {
  color: #ffffff;
  font-size: 18px;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.zone-description {
  display: none;
}

.zone-description.active {
  display: block;
}

.zone-description p {
  color: #b8c7dc;
  margin-bottom: 16px;
  line-height: 1.6;
}

.zone-description ul {
  color: #b8c7dc;
  margin: 0 0 16px 0;
  padding-left: 20px;
}

.zone-description li {
  margin-bottom: 12px;
  line-height: 1.6;
}

.zone-description strong {
  color: #ffffff;
}

/* Responsive design */
@media (max-width: 768px) {
  .diagram-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  #hockey-diagram {
    width: 100%;
    height: auto;
  }
  
  .player-legend {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;

// Code JavaScript pour rendre le diagramme interactif
const interactiveDiagramJS = `
// Fonction pour initialiser le diagramme
function initDiagram() {
  const canvas = document.getElementById('hockey-diagram');
  const ctx = canvas.getContext('2d');
  
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
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Lignes de la patinoire
    ctx.strokeStyle = diagramConfig.lineColor;
    ctx.lineWidth = 2;
    
    // Ligne centrale
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    
    // Cercle central
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    ctx.stroke();
    
    // Lignes bleues
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 3, 0);
    ctx.lineTo(canvas.width / 3, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width * 2 / 3, 0);
    ctx.lineTo(canvas.width * 2 / 3, canvas.height);
    ctx.stroke();
    
    // Zones de but
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(50, canvas.height / 2, 30, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(canvas.width - 50, canvas.height / 2, 30, 0, Math.PI * 2);
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  
  document.getElementById('formation-select').addEventListener('change', function() {
    currentState.formation = this.value;
    resetDiagram();
  });
  
  document.getElementById('play-animation').addEventListener('click', animatePlayers);
  document.getElementById('reset-animation').addEventListener('click', resetDiagram);
  
  // Afficher/masquer le sélecteur de formation selon la zone initiale
  document.querySelector('.formation-selector').style.display = currentState.zone === 'neutral' ? 'block' : 'none';
}

// Initialiser le diagramme lorsque la page est chargée
document.addEventListener('DOMContentLoaded', initDiagram);
`;

// Exemple d'utilisation du diagramme interactif
const diagramUsageExample = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NHL 25 Pro Guide - Système Dog Fox Hawk</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    /* Styles pour le diagramme interactif */
    ${interactiveDiagramCSS}
  </style>
</head>
<body>
  <main class="container">
    <h1>Système Dog Fox Hawk</h1>
    
    <!-- Diagramme interactif -->
    ${interactiveDiagramHTML}
  </main>
  
  <script>
    // Code JavaScript pour le diagramme interactif
    ${interactiveDiagramJS}
  </script>
</body>
</html>
`;
