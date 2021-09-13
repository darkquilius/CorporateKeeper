export function validateRequired(value) {
        if (!value) {
            return "A value is required";
            }
            return false;
        }
      
export function validateNumber(value) {
        if (/^\d+$/.test(value) === false && value !== null && value !== undefined) {
          return "A number is required for this field";
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