export function validateRequired(value) {
        if (!value) {
          var res = 'A value is required'
          return res;
            }
            return false;
        }
      
export function validateNumber(value) {
        if (/^\d+$/.test(value) === false && value !== null && value !== undefined) {
          var res = 'Provide a Number for this field'
          return res;
        }
        return false;
      }
      
export  function validateEmail(value) {
        if (
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) === false &&
          value !== null &&
          value !== undefined
        ) {
          return "Provide a proper email";
        }
        return false;
      }

      export  function validateWebsite(value) {
        if (
          /^[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(value) === false &&
          value !== null &&
          value !== undefined
        ) {
          return "Provide a proper website";
        }
        return false;
      }

      export  function validatePhone(value) {
        if (
          /^\d(?:[()\s#-]*\d){9}$/.test(value) === false &&
          value !== null &&
          value !== undefined
        ) {
          return "Provide a ten digit phone number";
        }
        return false;
      }