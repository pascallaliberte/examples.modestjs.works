export default function (float, decimals = 2) {
  // see https://stackoverflow.com/a/18358056
  return +(`${Math.round(`${float}e+${decimals}`)}e-${decimals}`)
}
