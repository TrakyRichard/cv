// Ajoutez votre code ici
class Personnage{
    constructor(nom, sante, force){
      this.nom = nom;
      this.point = sante;
      this.force = force;
      this.xp = 0;
      this.piece = 10;
      this.cle = 1;
    }
    attaquer(cible){
      if(this.sante){
        const degats = this.force;
        console.log(`${this.nom} attaque ${degats} point de degats`);
        if(cible.sante > 0){
            console.log(`${cible.nom} a encore ${cible.sante} point de vie`);
        }
        else{
            const bonusXp = 10;
            cible.sante = 0;
            this.xp += bonusXp;
            console.log(`${this.nom} a tuer ${cible.nom} et gagne ${this.bonusXp} point d'expérience`);
        }
      }
      else
      console.log(`${this.nom} n'a plus de vie et ne peut pas attaquer`);
    }

    decrire(){
        return `${this.nom} a ${this.sante} point de vie ${this.force} et ${this.xp} point d'expérience`;
    }
  }
  // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
  const aurora = new Personnage("Aurora", 150, 25);
  
  console.log(aurora.decrire());