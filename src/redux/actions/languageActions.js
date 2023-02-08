const SET_LANGUAGE = "SET_LANGUAGE";
export function setLocalLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language,
  };
}
