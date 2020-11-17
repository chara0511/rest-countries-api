export const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export const formatName = (name) => name.replace(/[Å]/g, "A");
