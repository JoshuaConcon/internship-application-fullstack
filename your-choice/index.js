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
  return new Response(urls, {
    headers: { 'content-type' : 'application/json'}
  });
}

async function fetchFromURL(url) {
  const res = await fetch(url);
  return res.json()
}