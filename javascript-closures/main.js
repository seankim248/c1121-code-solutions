function graduate(credential) {
  return fullName => `${fullName}, ${credential}`;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Sean Kim'));
console.log(lawSchool('Sean Kim'));
