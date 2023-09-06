export const getConceptDisplay = function (codeableConcept) {
  if (codeableConcept) {
    if (codeableConcept.text) {
      return codeableConcept.text;
    }
    if (codeableConcept.coding) {
      for (let index = 0; index < codeableConcept.coding.length; index++) {
        const coding = codeableConcept.coding[index];
        if (coding.display) {
          return coding.display;
        }
        if (coding.code) {
          return coding.code;
        }
      }
    }
  }
  return null;
};

export const getCodingDisplay = function (coding) {
  if (!coding) return undefined;
  return coding.display || coding.code;
};
