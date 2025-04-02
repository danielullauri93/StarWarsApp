export const translatePerson = (person: any) => ({
  nombre: person.name,
  altura: person.height,
  peso: person.mass,
  color_de_piel: person.skin_color,
  color_de_cabello: person.hair_color,
  // Agrega más traducciones según sea necesario
});
