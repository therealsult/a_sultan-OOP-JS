class City {
    constructor(name, image, treeSpecies, mammalSpecies, invertebrateSpecies, fishSpecies, amphibianSpecies, birdSpecies, reptileSpecies, maxElevation, minElevation) {
      this.name = name;
      this.image = image;
      this.treeSpecies = treeSpecies;
      this.mammalSpecies = mammalSpecies;
      this.invertebrateSpecies = invertebrateSpecies;
      this.fishSpecies = fishSpecies;
      this.amphibianSpecies = amphibianSpecies;
      this.birdSpecies = birdSpecies;
      this.reptileSpecies = reptileSpecies;
      this.maxElevation = maxElevation;
      this.minElevation = minElevation;
      
    }
  
    getCardHTML() {
      return `
        <div class="city-card">
          <img src="./images/${this.image}" alt="${this.name}">
          <div class="city-info">
            <h2>${this.name}</h2>
            <p>Number of Tree Species: ${this.treeSpecies}</p>
            <p>Number of Mammal Species: ${this.mammalSpecies}</p>
            <p>Number of Invertebrate Species: ${this.invertebrateSpecies}</p>
            <p>Number of Fish Species: ${this.fishSpecies}</p>
            <p>Number of Amphibian Species: ${this.amphibianSpecies}</p>
            <p>Number of Bird Species: ${this.birdSpecies}</p>
            <p>Number of Reptile Species: ${this.reptileSpecies}</p>
            <p>Max Elevation: ${this.maxElevation} meters</p>
            <p>Min Elevation: ${this.minElevation} meters</p>
          </div>
          <a href="city.php">select</a>

        </div>
      `;
    }
  }
  
  export default City;
  