export function changeLanguage (lng: string) {
  if (lng.startsWith("es")) {
    window.location.href = "/es/";
  } else if (lng.startsWith("ca")) {
    window.location.href = "/ca/";
  } else {
    window.location.href = "/en/";
  }
}