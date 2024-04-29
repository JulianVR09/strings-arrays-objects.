let marks = prompt("Ingrese las notas de los estudiantes: ");
let arrMarks = marks.split(",");
let arrMarksNumb = [];
let cont = 0;
let max = -1000;
let min = 1000;
let numapproved = 0;
let numfailed = 0;

for (let i = 0; i < arrMarks.length; i++) {
  arrMarksNumb.push(Number(arrMarks[i]));
}
for (let i = 0; i < arrMarksNumb.length; i++) {
  cont += arrMarksNumb[i];
}

let prom = cont / arrMarksNumb.length;

for (let i = 0; i < arrMarksNumb.length; i++) {
  if (max < arrMarksNumb[i]) {
    max = arrMarksNumb[i];
  }
}

for (let i = 0; i < arrMarksNumb.length; i++) {
  if (min > arrMarksNumb[i]) {
    min = arrMarksNumb[i];
  }
}

let approved = arrMarksNumb.map((e) => e >= 70);

for (let i = 0; i < approved.length; i++) {
  if (approved[i]) {
    numapproved++;
  } else {
    numfailed++;
  }
}

arrMarksNumb.sort((a, b) => a + b);

console.log(`El promedio de las calificaciones es: ${prom}\
\nLa calificacion mas alta fue: ${max}\
\nLa calificacion mas baja fue: ${min}\
\nEl total de aprovados fue: ${numapproved}\
\nEl total de suspendidos fue: ${numfailed}\
\nLas calificaciones en orden ascendente quedan asi: ${arrMarksNumb.sort(
  (a, b) => a + b
)}`);
