function validateForm(form, type) {
  const { email, username, password, password_confirmation } = form;
  const errors = {};
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (type === "signup") {
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      errors.username = "Username should only contain letters and numbers.";
    }

    if (!passwordPattern.test(password)) {
      errors.password =
        "Password should contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character.";
    }

    if (password !== password_confirmation) {
      errors.password_confirmation =
        "Password confirmation does not match password.";
    }

    if (!password_confirmation) {
      errors.password_confirmation = "Password confirmation is required.";
    } else if (!passwordPattern.test(password_confirmation)) {
      errors.password_confirmation =
        "Password confirmation should meet the same criteria as the password.";
    }
  } else if (type === "signin") {
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!passwordPattern.test(password)) {
      errors.password =
        "Password should contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character.";
    }
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export default validateForm;
