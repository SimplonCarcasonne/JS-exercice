var array = ['Pomme','Cerise','Tomate', ['Orange','Poivron']];

array.push("Courgette");
console.log (array[4]); // verif

array.splice([4], 0, "citron");
console.log (array[4]);// verif

array.splice(1, 1);
console.log(array[1]);

array.splice ([2], 0, "poire");
console.log (array[2]);