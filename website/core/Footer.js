const React = require("react");

const mainLinks = {
    Documentation: "/",
    "Open Source": "https://github.com/SteinHQ",
    Pricing: "https://beta.steinhq.com/pricing",
    Partners: ""
  },
  secondaryLinks = {
    "Privacy Policy": "https://beta.steinhq.com/privacy-policy",
    "Terms of Service": "https://beta.steinhq.com/terms-of-service"
  };

const mainLinkElements = [],
  secondaryLinkElements = [];

function generateLinkElement(name, value, classes) {
  return (
    <a className={classes} href={value} key={name}>
      {name}
    </a>
  );
}

Object.keys(mainLinks).forEach(name => {
  mainLinkElements.push(
    generateLinkElement(
      name,
      mainLinks[name],
      "text-white mr-5 animated-text-link hover:text-bluelink"
    )
  );
});

Object.keys(secondaryLinks).forEach(name => {
  secondaryLinkElements.push(
    generateLinkElement(
      name,
      secondaryLinks[name],
      "text-greengreytext mr-5 animated-text-link text-sm hover:text-bluelink"
    )
  );
});

const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-12 pb-4 px-8 sm:px-16 md:px-20 mt-16 pin-b w-full">
        <a href="https://steinhq.com">
          <img src="img/Stein.svg" alt="Stein Logo" className="h-8" />
        </a>
        <div className="mt-5 leading-loose sm:leading-normal">
          {mainLinkElements}
        </div>
        <hr className="border-t border-white mt-6 mb-2 opacity-25" />
        <div className="mt-3">{secondaryLinkElements}</div>
        <div className="mt-3 text-greengreytext text-sm">
          © {new Date().getFullYear()} Stein
        </div>
      </div>
    </>
  );
};

module.exports = Footer;
