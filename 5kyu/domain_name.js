function domainName(url) {
  // url.includes("www") ? console.log(url.split(".")[1]) : console.log(url.split("//")[1].split(".")[0])
  if (url.includes("www")) {
    return url.split(".")[1]
  } else if (url.includes("//")) {
    return url.split("//")[1].split(".")[0]
  } else {
    return url.split(".")[0]
  }
}
domainName("http://google.com")
domainName("www.xakep.ru")
domainName("gq7cf8o.fr/index.php")
