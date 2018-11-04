function telephoneCheck(str) {
  // Good luck!

  /*
    Disecting regex:
    
    (1)?                # Valid US Code (optional)
    ([ -])?             # First separator (optional)
    (\(\d{3}\)|\d{3})   # Area code with or whitout ( )
    ([ -])?             # Second separator (opt)
    (\d{3})             # Three digits
    ([ -])?             # Third separator (opt)
    (\d{4})             # Final four digits

  */

  let myRegex = /^(1)?([ -])?(\(\d{3}\)|\d{3})([ -])?(\d{3})([ -])?(\d{4})$/;
  let result = myRegex.test(str);

  return result;
}

telephoneCheck("1 (555) 555-5555");
