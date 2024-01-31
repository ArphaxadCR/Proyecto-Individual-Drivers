export default function validation({
  forename,
  surname,
  description,
  image,
  nationality,
  dob,
  teamIds,
}) {
  const errors = {};

  // Debe tener contenido en el campo

  if (!forename.trim()) {
    errors.forename = "El nombre es obligatorio";
  }
  if (!surname.trim()) {
    errors.surname = "El apellido es obligatorio";
  }
  if (!description.trim()) {
    errors.description = "La descripcion es obligatoria";
  }
  if (!image.trim()) {
    errors.image = "La imagen es obligatoria";
  }
  if (!nationality.trim()) {
    errors.nationality = "La nacionalidad es obligatoria";
  }
  if (!dob.trim()) {
    errors.dob = "La fecha de nacimiento es obligatoria";
  }
  if (!teamIds.length) {
    errors.teamIds = "Al menos un equipo es obligatorio";
  }

  const nameRegex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*[A-ZÁÉÍÓÚÜÑ]*$/;

  if (!nameRegex.test(forename)) {
    errors.forename =
      "El nombre debe empezar con una letra mayúscula y solo contener letras";
  }

  if (!nameRegex.test(surname)) {
    errors.surname =
      "El apellido debe empezar con una letra mayúscula y solo contener letras";
  }

  if (!nameRegex.test(nationality)) {
    errors.nationality =
      "La nacionalidad debe empezar con una letra mayúscula y solo contener letras";
  }

  const imageRegex =
    /\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|jfif|pjpeg|pjp|avif|heic|heif|avif)$/i;

  if (!imageRegex.test(image)) {
    errors.image =
      "La imagen debe tener un formato válido (jpg, jpeg, png, etc)";
  }

  const dobDate = new Date(dob);

  if (isNaN(dobDate.getTime())) {
    errors.dob = "La fecha debe ser en un formato válido (YYYY-MM-DD)";
  } else {
    const today = new Date();
    const edad = today.getFullYear() - dobDate.getFullYear();
    const actualMonth = today.getMonth();
    const birthMonth = dobDate.getMonth();

    if (
      actualMonth < birthMonth ||
      (actualMonth === birthMonth && today.getDate() < dobDate.getDate())
    ) {
      if (edad < 18) {
        errors.dob = "El driver debe ser mayor de edad";
      }
    } else {
      if (edad < 18) {
        errors.dob = "El driver debe ser mayor de edad";
      }
    }
  }

  return errors;
}
