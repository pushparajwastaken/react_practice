const customRenderer = (reactElement, container) => {
  /*
  Version 1
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);*/
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
};
const reactElement = {
  type: "a",
  props: {
    href: "https://www.instagram.com/lavaaalivin/",
    target: "_blank",
  },
  children: "The IG of the cutest girl",
};
const maincontaainer = document.getElementById("root");

customRenderer(reactElement, maincontaainer);
