const initialValues = [10, "string", undefined, null, true];

//1.
const otherValues = [11, 12, "hello"];

//2.
initialValues.push(...otherValues);

//3. 4.
for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
      initialValues[i] += 2;
    }
  }

//5.
for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
      initialValues[i] += " happy coding";
    }
  }

  //6.
for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
      initialValues[i] = !initialValues[i];
    }
  }