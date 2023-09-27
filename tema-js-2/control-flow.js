const capacitateCilindrica = Number(prompt("Introduceti capacitatea cilindrica cm3"));

let rezultatImpozit = 0;
if(capacitateCilindrica <= 1600) {
    rezultatImpozit = capacitateCilindrica / 200 * 8;
} else if (capacitateCilindrica > 1600 && capacitateCilindrica <= 2000) {
    rezultatImpozit = capacitateCilindrica / 200 * 22;
} else if (capacitateCilindrica > 2000 && capacitateCilindrica <= 2600) {
    rezultatImpozit = capacitateCilindrica / 200 * 85;
} else if (capacitateCilindrica > 2600 && capacitateCilindrica <= 3000) {
    rezultatImpozit = capacitateCilindrica / 200 * 171;
} else if (capacitateCilindrica > 3000) {
    rezultatImpozit = capacitateCilindrica / 200 * 345;
}

if (!rezultatImpozit) {
    alert("Suma nu se poate calcula. Va rugam sa verificati datele introduse");
} else {
    alert(`Suma pentru impozit este de ${rezultatImpozit}RON`);
}