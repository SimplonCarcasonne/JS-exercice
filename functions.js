
function chaine(chaine1) {
	return chaine1;
}
console.log(chaine("on essaye d'afficher un message !"));

// fonction qui concatène 2 chaînes de caractères
function concat(chaine1, chaine2) {
	return chaine1 + chaine2;
}
console.log(concat("hello ", "Jeanne"));

//exercice 4 fonction qui compare 2 nombres
function compar (nombre1, nombre2) {
	if (nombre1 > nombre2) {
		return "Le premier nombre est plus grand";
	} else if (nombre1 < nombre2){
		return "Le deuxième nombre est le plus grand";
	} else {
	return "Les 2 nombres sont égaux";
	}
}

console.log(compar(3, 4));

//exercice 6
function nomPrenomAge(nom, prenom, age) {
	return "Bonjour " + prenom + " " + nom + ", tu as " + age + " ans.";
}
console.log(nomPrenomAge("Tiramani", "Jeanne", 39));

//exercice 7
function ageGenre(age, genre) {
	if (genre === "homme") {
		if (age <= 18) {
			return "Vous êtes un homme et vous êtes mineur";
		} 
		return "Vous êtes un homme et vous êtes majeur";

	} else  if (genre === "femme") {

		if (age <= 18) {
			return "Vous êtes une femme et vous êtes mineure";
		} 
			return "Vous êtes une femme et vous êtes majeure";

	}	

	}

console.log(ageGenre(39, "femme"))

//exercice 8
function troisNombres(nombre1, nombre2, nombre3) {
	var concat = nombre1 + nombre2 + nombre3;
	return concat;
}

console.log(troisNombres(10, 5, 2));