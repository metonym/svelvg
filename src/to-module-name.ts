export function toModuleName(name: string) {
  return name
    .replace(/\_+|-+/g, " ")
    .replace(/\.svg/g, "")
    .split(" ")
    .map((_, i) => {
      let first_char = _.slice(0, 1);

      if (i === 0 && first_char.match(/[0-9]/)) {
        first_char = "_" + first_char;
      }

      return first_char.toUpperCase() + _.slice(1);
    })
    .join("");
}
