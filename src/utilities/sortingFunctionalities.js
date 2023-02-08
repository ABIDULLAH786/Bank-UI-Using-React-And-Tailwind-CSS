export function sortByFilter(data, sortBy, order) {
 
  if (sortBy === "Time" || sortBy === "createdAt" || sortBy === "Sort by" || sortBy === "") {
    return [...data]
      .sort(
        (a, b) =>
          a.createdAt.toString().localeCompare(b.createdAt.toString(), "en", {
            numeric: true,
          }) * (order === "asc" ? 1 : -1)
      )
  }
  if (sortBy === "Name") {
    return [...data].sort(
      (a, b) =>
        a.name.toString().localeCompare(b.name.toString(), "en", {
          numeric: true,
        }) * (order === "asc" ? 1 : -1)
    );
  }
  if (sortBy === "Balance2") {
    return [...data].sort(
      (a, b) =>
        a.balance.toString().localeCompare(b.balance.toString(), "en", {
          numeric: true,
        }) * (order === "asc" ? 1 : -1)
    );
  }
  return data;
}

export function SearchFilter(usersData, wordEntered) {
  return usersData.filter((value) => {
    return value.name.toLowerCase().includes(wordEntered.toLowerCase());
  });
}
