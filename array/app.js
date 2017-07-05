var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
var month = ["14eme mois","13eme mois",'janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
console.log(month);
console.log(month[2]);
console.log(month[5]);
console.log(month[10]);

month[7] = "août";
console.log(month[7]);

var monthLength = month.length;

for(var i = 0; i < monthLength; i++){
	console.log(month[i]);
};

array.push('courgette');
console.log(array);

array[4].push('citron');
// console.log(array);

array.splice(1, 3);

array.splice(1, 1, "Poire");
console.log(array);
