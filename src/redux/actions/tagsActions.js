export const addTag = (tag) => ({
  type: "ADD_TAG",
  payload: tag,
});
export const removeTag = (tag) => ({
  type: "REMOVE_TAG",
  payload: tag,
});
export const removeAllTags = () => ({
  type: "REMOVE_ALL_TAGS",
});
