export default function (float) {
  // see https://stackoverflow.com/a/18358056
  return +(`${Math.round(`${float}e+2`)}e-2`)
}
