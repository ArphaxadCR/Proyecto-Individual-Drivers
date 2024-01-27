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
    errors.forename = "Forename is required";
  }
  if (!surname.trim()) {
    errors.surname = "Surname is required";
  }
  if (!description.trim()) {
    errors.description = "Description is required";
  }
  if (!image.trim()) {
    errors.image = "Image is required";
  }
  if (!nationality.trim()) {
    errors.nationality = "Nationality is required";
  }
  if (!dob.trim()) {
    errors.dob = "Date of birth is required";
  }
  if (!teamIds.length) {
    errors.teamIds = "At least one team is required";
  }

  const nameRegex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*[A-ZÁÉÍÓÚÜÑ]*$/;

  if (!nameRegex.test(forename)) {
    errors.forename =
      "Forename must start with a capital letter and only contain letters";
  }

  if (!nameRegex.test(surname)) {
    errors.surname =
      "Surname must start with a capital letter and only contain letters";
  }

  if (!nameRegex.test(nationality)) {
    errors.nationality =
      "Nationality must start with a capital letter and only contain letters";
  }

  const imageRegex =
    /\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|jfif|pjpeg|pjp|avif|heic|heif|avif)$/i;

  if (!imageRegex.test(image)) {
    errors.image = "Image must be a valid image format (jpg, jpeg, png, etc)";
  }

  const dobDate = new Date(dob);

  if (isNaN(dobDate.getTime())) {
    errors.dob = "Date of birth must be a valid date";
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
        errors.dob = "Driver must be at least 18 years old";
      }
    } else {
      if (edad < 18) {
        errors.dob = "Driver must be at least 18 years old";
      }
    }
  }

  return errors;
}
