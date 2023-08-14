const initialValues = [10, "string", undefined, null, true];
const otherValues = [11, 12, 'hello'];

initialValues.push(...otherValues);

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
      initialValues[i] += 2;
    }
  }

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
      initialValues[i] += " happy coding";
    }
  }

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
      initialValues[i] = !initialValues[i];
    }
  }