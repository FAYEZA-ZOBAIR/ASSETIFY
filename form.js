let fieldCounter = 2;

function addFormField() {
  const fieldName = prompt("Enter the field name:");
  if (!fieldName) {
    // User clicked Cancel or entered an empty field name
    return;
  }

  const fieldType = prompt("Enter the field type (Text/Number/Date/Submit):");
  if (!fieldType) {
    // User clicked Cancel or entered an empty field type
    return;
  }

  const placeholderText = prompt("Enter the placeholder text:");
  if (fieldType.toLowerCase() === 'submit') {
    // For submit button
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.name = fieldName.toLowerCase().replace(/\s+/g, "_");
    submitButton.value = fieldName;
    document.getElementById("assetForm").appendChild(submitButton);
  } else {
    // For other input fields
    const newField = document.createElement("div");
    newField.className = "form-group";
    newField.innerHTML = `
      <label for="${fieldName.toLowerCase().replace(/\s+/g, "_")}">${fieldName}:</label>
      <input type="${fieldType.toLowerCase()}" id="${fieldName.toLowerCase().replace(/\s+/g, "_")}" name="${fieldName.toLowerCase().replace(/\s+/g, "_")}">
      ${placeholderText ? `<small>${placeholderText}</small>` : ''}
    `;

    // Append the new field to the form
    document.getElementById("assetForm").insertBefore(newField, document.getElementById("assetForm").lastChild);
  }

  fieldCounter++;
}
