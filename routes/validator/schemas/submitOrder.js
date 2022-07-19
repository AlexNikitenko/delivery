const innerSchema = {
  type : "object",
  properties : {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 30,
      pattern: "^[a-zA-Z0-9\\s,'-]*$",
    },
    price: {
      type: "number",
      minimum: 0
    },
    quantity: {
      type: "number",
      minimum: 0
    },
    currency: {
      type: "string",
      minLength: 1,
      maxLength: 10,
      pattern: "^[A-Za-z]*$",
    }
  },
  required : ["name", "price", "quantity", "currency"]
}

const innerArraySchema = {
  type: "array",
  items : innerSchema
}

module.exports = {
  type: "object",
  properties: {
    userName: {
      type: "string",
      pattern: "^[A-Za-z]*$",
      minLength: 2,
      maxLength: 30
    },
    userEmail: {
      type: "string",
      pattern: "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
      maxLength: 30,
      minLength: 4
    },
    userPhone: {
      type: "string",
      pattern: "^(\\+{0,})(\\d{0,})([(]{1}\\d{1,3}[)]{0,}){0,}(\\s?\\d+|\\+\\d{2,3}\\s{1}\\d+|\\d+){1}[\\s|-]?\\d+([\\s|-]?\\d+){1,2}(\\s){0,}$",
      minLength: 1,
      maxLength: 20,
    },
    userAdress: {
      type: "string",
      pattern: "^[a-zA-Z0-9\\s,'-]*$",
      minLength: 4,
      maxLength: 50
    },
    items: innerArraySchema,
    totalPrice: {
      type: "number",
      minimum: 0
    },
    currency: {
      type: "string",
      pattern: "^[A-Za-z]*$",
      minLength: 1,
      maxLength: 10
    }
  },
  required: ["userName", "userEmail", "userPhone", "userAdress", "items", "totalPrice", "currency"],
  errorMessage: {
    properties: {
      userName: "Incorrect format of user name, use latin letters only",
      userEmail: "Incorrect format of email",
      userPhone: "Incorrect format of phone number",
      userAdress: "Incorrect format of user address, use latin letters, numbers and spaces only",
    },
  },
}