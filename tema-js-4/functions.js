const firstSentence = `Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.`;
const secondSentence = `Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga suplimentar aproximativ 500 usd/luna din freelancing.`;

function computeIncome(sentence) {
  const words = sentence.split(" ");

  let valutaIndexes = [];
  const valoariCastiguri = words
    .map((word, index) => {
      const castig = parseInt(word);

      if (typeof castig === "number" && Number.isInteger(castig)) {
        valutaIndexes.push(index + 1);
        return castig;
      }
    })
    .filter((value) => Number.isInteger(value));

  const castiguriTotale = valoariCastiguri.map((castig, index) => {
    const [valuta, frecventa] = words[valutaIndexes[index]].split("/");
    console.log(valuta, frecventa);
    let castigConvertit = 0;

    if (valuta === "usd") {
      castigConvertit = castig * 4.5;
    }

    if (valuta === "euro") {
      castigConvertit = castig * 4.9;
    }

    if (valuta === "lei") {
      castigConvertit = castig;
    }

    if (frecventa) {
      if (frecventa.includes("luna")) {
        return castigConvertit * 12;
      }

      if (frecventa.includes("an")) {
        return castigConvertit;
      }
    } else {
      return castigConvertit;
    }
  });

  const totalCastig = castiguriTotale.reduce(
    (acc, valoare) => acc + valoare,
    0
  );

  console.log(totalCastig);
  const name = words[0];

  return `Venitul anual al lui ${name} este ${totalCastig} lei.`;
}

console.log(computeIncome(firstSentence));
console.log(computeIncome(secondSentence));
