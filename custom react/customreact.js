// Function to create and add an element to the webpage
function customRender(reactelement, container) {
  /*
  // Create a real HTML element based on the type given (e.g., "a" for a link)
  const domelement = document.createElement(reactelement.type);

  // Set the text inside the element
  domelement.innerHTML = reactelement.children;

  // Set the "href" attribute so the link knows where to go
  domelement.setAttribute("href", reactelement.props.href);

  // Set the "target" attribute so it opens in a new tab
  domelement.setAttribute("target", reactelement.props.target);

  // Add this new element inside the provided container
  container.appendChild(domelement);
  */
  const domelement = document.createElement(Reactelement.type);
  domelement.innerHTML = Reactelement.children;
  //this is better because earlier we were repeating our code
  for (const prop in Reactelement.props) {
    if (prop === "children") continue;
    domelement.setAttribute(prop, Reactelement.props[prop]);
  }
  container.appendChild(domelement);
}

// This is our "recipe" for a React-like element
const Reactelement = {
  type: "a", // It's a link ("<a>")
  props: {
    href: "https://google.com", // The link should go to Google
    target: "_blank", // It should open in a new tab
  },
  children: "Click me to visit google", // This is the text inside the link
};

// Find the place in our webpage where we want to put this link
const maincontainer = document.querySelector("#root");

// Call the function to create and add the link to the page
customRender(Reactelement, maincontainer);
