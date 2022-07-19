const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
require('ajv-errors')(ajv);


const validation = (schemaName) => {
  return validationAjv = (req, res, next) => {
    const schema = require(`./schemas/${schemaName}`); // schema's connection
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    console.log('object validation>>>', valid);
    if (!valid) {
      const errors = validate.errors.reduce((acc, el) => {
        // return {
        //   path: el.instancePath.slice(1),
        //   keyword: el.keyword,
        //   message: el.message
        // };
        acc[el.instancePath.slice(1)] = el.message;
        return acc;
      }, {});
      return res.status(400).json({
        data: {
          errors
        }
      })
    } 
    next();
  };
}

module.exports = {
  validation
};
