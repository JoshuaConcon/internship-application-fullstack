const URL = "https://cfw-takehome.developers.workers.dev/api/variants";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const urls = await fetchFromURL(URL);
  const chosenVariant = await pickOneVariantUrl(urls.variants);

  return new Response(chosenVariant, {
    headers: { 'content-type' : 'application/json'}
  });
}

async function fetchFromURL(url) {
  const res = await fetch(url);
  return res.json()
}

async function pickOneVariantUrl(variants) {
  const variantA = await variants[0];
  const variantB = await variants[1];
  const pickVariantA = await diceRoll();
  const chosenVariant = pickVariantA ? variantA : variantB;
  return chosenVariant;
}

async function diceRoll() {
  return Math.random() < 0.5
}