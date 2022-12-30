const routes = {
  "/": authPage,
  "/kadoro": mainPage,
};

function router() {
  const currentRoute = window.location.pathname;
  
  if (routes[currentRoute]) {
    routes[currentRoute]();
  } else {
    notFound();
  }
}
