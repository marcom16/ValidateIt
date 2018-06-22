/**
  * Only Names (First, middle and last)
  * like "John" or "Alfred-Man" or D'Maio
  * or others names but without numbers and
  * Others special characters
  */
const validateName = str => { 
   
  if (str.match(/^[A-Za-z]([a-zA-Z]|-|")+$/g)) 
    return true
  return false
}

/**
 * Fully Match:
 * One Two
 * Alec B.
 * O"Reilly Lewis
 * Roberts-Thomson
 * A. Unior Aleca
 * Shame Zaller
 */
const validateFullName = str => { 
   
  if (str.match(/^[A-Z](("[A-Z][a-z]+)|([a-z]+)|(\.[ ][A-Z][a-z]+))([ ][A-Z][\.])?([ ][A-Z][a-z]+)?/g)) 
    return true
  return false
}

/**
 * Validate the email
 * Required -> "@", ".com" or any ext
 */
const validateEmail = str => {
  if (str.match(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g))
    return true
  return false
}

/**
 * At least 8 characters
 * Must contain at least 1 uppercase letter
 * 1 lowercase letter and 1 number
 * Can contain special characters
 */
const validatePassword = str => {
  if (str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g))
    return true
  return false
}

/**
 * Accepts:
 * | +42 555.123.4567 | +1-(800)-123-4567 | +7 555 1234567   | +7(926)1234567  | (926) 1234567
 *	| +79261234567     | 926 1234567       | 9261234567       | 1234567         | 123-4567 
 *	| 123-89-01        | 495 1234567       | 469 123 45 67    | 89261234567     | 8 (926) 1234567 
 *	| 926.123.4567     | 415-555-1234      | 650-555-2345     | (416)555-3456   | 202 555 4567      
 *	| 4035555678       | 1 416 555 9292    | 0424 620 0101    | 0424-620-0101   | 0424-620-01-01   
 *	| (424) 620 0101   | (424)-620-0101    | +54 424 620 0101
 */
const validatePhone = str => {
  if (str.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g))
    return true
  return false
}

/**
 * US Zip Validation
 * Valid:
 *  58701-0124
 *  587010124
 *  58701
 */
const validateZipCode = str => {
  if (str.match(/^\d{5}(\-?\d{4})?$/g))
    return true
  return false
}

/**
 * Validate the Image Format
 * the size and if this is empty
 */

 const validateImage = data => {
    if (!(data == undefined)) {
      if (data.size <= 3000000) {
        if (data.type == "image/jpeg" || data.type == "image/jpg" || data.type == "image/gif" || data.type == "image/png")
          return true
        return false
      }
      return false
    }
    return false
  }

/**
 * Validate the Doc Format
 * the size and if this is empty
 */

const validateDoc = data => {
  if (!(data == undefined)) {
    if (data.size <= 3000000) {
      if ( data.type == "application/pdf" || data.type == "application/msword" || data.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || data.type == "application/vnd.ms-excel" || data.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" )
        return true
      return false
    }
    return false
  }
  return false
}


const Validate = (type = "", item ="") =>{
  switch (type) {
    case "name":
      return validateName(item)
    break;
    case "fullName":
      return validateFullName(item)
    break;
    case "email":
      return validateEmail(item)
    break;
    case "password":
      return validatePassword(item)
    break;
    case "phone":
      return validatePhone(item)
    break;
    case "zipCode":
      return validateZipCode(item)
    break;
    case "image":
      return validateImage(item)
    break;
    case "doc":
      return validateDoc(item)
    break;
    default:
      return false
    break;
  }
}

module.exports = Validate