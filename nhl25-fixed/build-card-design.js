/* Structure de base pour le nouveau design des builds */

// Nouvelle structure HTML pour les cartes de builds
const buildCardTemplate = `
<div class="build-card">
  <div class="build-header">
    <h3 class="build-title">{{buildName}}</h3>
    <div class="build-meta">
      <span class="position-tag">{{position}}</span>
      <span class="build-size">{{height}}, {{weight}} lbs</span>
    </div>
  </div>
  
  <div class="build-content">
    <div class="build-image">
      <!-- Image représentative du build -->
    </div>
    
    <div class="build-abilities">
      <h4>Capacités & Boosts</h4>
      <div class="abilities-container">
        <div class="ability gold">{{primaryAbility}}</div>
        <div class="ability silver">{{secondaryAbility1}}</div>
        <div class="ability silver">{{secondaryAbility2}}</div>
        <div class="ability boost">{{boost1}}</div>
        <div class="ability boost">{{boost2}}</div>
      </div>
    </div>
    
    <div class="build-attributes">
      <h4>Attributs Clés</h4>
      <div class="attributes-container">
        <!-- Barres de progression visuelles pour chaque attribut -->
        <div class="attribute">
          <span class="attribute-name">{{attributeName1}}</span>
          <div class="progress-bar">
            <div class="progress" style="width: {{attributeValue1}}%"></div>
          </div>
          <span class="attribute-value">{{attributeValue1}}</span>
        </div>
        <!-- Répéter pour chaque attribut -->
      </div>
    </div>
    
    <div class="build-tips">
      <h4>Conseils d'utilisation</h4>
      <ul>
        <li>{{tip1}}</li>
        <li>{{tip2}}</li>
        <li>{{tip3}}</li>
        <!-- Plus de conseils si nécessaire -->
      </ul>
    </div>
  </div>
  
  <div class="build-footer">
    <button class="compare-button">Comparer</button>
    <button class="share-button">Partager</button>
  </div>
</div>
`;

// Styles CSS pour les cartes de builds
const buildCardStyles = `
.build-card {
  background: linear-gradient(to bottom, #1e3a5f, #0f1c2e);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.build-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.build-header {
  background: linear-gradient(to right, #2a4d7f, #1a3056);
  padding: 16px 20px;
  border-bottom: 2px solid #4a90e2;
}

.build-title {
  color: #ffffff;
  font-size: 22px;
  margin: 0 0 8px 0;
}

.build-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.position-tag {
  background-color: #4a90e2;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
}

.build-size {
  color: #b8c7dc;
  font-size: 14px;
}

.build-content {
  padding: 20px;
}

.build-abilities {
  margin-bottom: 24px;
}

.abilities-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.ability {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}

.ability.gold {
  background-color: rgba(255, 215, 0, 0.2);
  border: 1px solid #ffd700;
  color: #ffd700;
}

.ability.silver {
  background-color: rgba(192, 192, 192, 0.2);
  border: 1px solid #c0c0c0;
  color: #c0c0c0;
}

.ability.boost {
  background-color: rgba(46, 204, 113, 0.2);
  border: 1px solid #2ecc71;
  color: #2ecc71;
}

.build-attributes {
  margin-bottom: 24px;
}

.attributes-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 12px;
}

.attribute {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.attribute-name {
  color: #b8c7dc;
  font-size: 14px;
}

.progress-bar {
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(to right, #4a90e2, #2ecc71);
  border-radius: 4px;
}

.attribute-value {
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
}

.build-tips {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 8px;
}

.build-tips ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.build-tips li {
  color: #b8c7dc;
  margin-bottom: 8px;
  line-height: 1.5;
}

.build-footer {
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: rgba(0, 0, 0, 0.2);
}

.build-footer button {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.compare-button {
  background-color: transparent;
  border: 1px solid #4a90e2;
  color: #4a90e2;
}

.compare-button:hover {
  background-color: rgba(74, 144, 226, 0.1);
}

.share-button {
  background-color: #4a90e2;
  border: none;
  color: white;
}

.share-button:hover {
  background-color: #3a80d2;
}

/* Responsive design */
@media (max-width: 768px) {
  .attributes-container {
    grid-template-columns: 1fr;
  }
}
`;

// Système de filtrage pour les builds
const buildFilteringSystem = `
<div class="build-filters">
  <div class="filter-group">
    <label>Position</label>
    <div class="filter-options">
      <button class="filter-option active" data-filter="all">Toutes</button>
      <button class="filter-option" data-filter="center">Centre</button>
      <button class="filter-option" data-filter="winger">Ailier</button>
      <button class="filter-option" data-filter="defenseman">Défenseur</button>
      <button class="filter-option" data-filter="goalie">Gardien</button>
    </div>
  </div>
  
  <div class="filter-group">
    <label>Type de Build</label>
    <div class="filter-options">
      <button class="filter-option active" data-filter="all">Tous</button>
      <button class="filter-option" data-filter="playmaker">Playmaker</button>
      <button class="filter-option" data-filter="sniper">Sniper</button>
      <button class="filter-option" data-filter="dangler">Dangler</button>
      <button class="filter-option" data-filter="pmd">PMD</button>
      <!-- Autres types de builds -->
    </div>
  </div>
  
  <div class="filter-group">
    <label>Trier par</label>
    <select class="sort-select">
      <option value="recommended">Recommandé</option>
      <option value="speed">Vitesse</option>
      <option value="shooting">Tir</option>
      <option value="defense">Défense</option>
    </select>
  </div>
</div>
`;

// Exemple de données pour un build
const sampleBuildData = {
  buildName: "Playmaker Polyvalent",
  position: "Centre",
  height: "6'0\"",
  weight: "165",
  primaryAbility: "Tape-to-Tape (Or/Gold)",
  secondaryAbility1: "Shutdown (Argent/Silver)",
  secondaryAbility2: "Quick Pick (Argent/Silver)",
  boost1: "Controlled Passing (Boost)",
  boost2: "Disciplined Stick (Boost)",
  attributes: [
    { name: "Vitesse", value: 93 },
    { name: "Passes", value: 90 },
    { name: "Mises en jeu", value: 90 },
    { name: "Conscience défensive", value: 80 },
    { name: "Stick checking", value: 82 },
    { name: "Précision du tir du poignet", value: 85 }
  ],
  tips: [
    "Utilisez Tape-to-Tape pour des passes longues précises, parfaites pour les sorties de zone et les transitions rapides.",
    "Combinez avec Shutdown pour un soutien défensif efficace, essentiel pour le rôle de centre.",
    "Utilisez Quick Pick pour intercepter les passes adverses et lancer des contre-attaques rapides.",
    "Positionnez-vous comme option de soutien pour vos défenseurs lors des sorties de zone.",
    "Contre des gardiens humains, variez vos zones de tir et vos techniques pour rester imprévisible."
  ]
};
