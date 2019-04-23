const React = require("react");

const mainLinks = {
    Documentation: "",
    Guides: "",
    "Open Source": "",
    Pricing: "",
    Sponsorships: ""
  },
  secondaryLinks = {
    "Privacy Policy": "",
    "Terms of Service": "",
    Credits: ""
  };

const mainLinkElements = [],
  secondaryLinkElements = [];

Object.keys(mainLinks).forEach(name => {
  mainLinkElements.push(
    <a
      className="text-white hover:text-white mr-5 animated-text-link"
      href={mainLinks[name]}
      key={name}
    >
      {name}
    </a>
  );
});

Object.keys(secondaryLinks).forEach(name => {
  secondaryLinkElements.push(
    <a
      className="text-greengreytext hover:text-greengreytext mr-5 animated-text-link text-sm"
      href={secondaryLinks[name]}
      key={name}
    >
      {name}
    </a>
  );
});

const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-12 pb-4 px-8 sm:px-16 md:px-20 mt-16 pin-b w-full">
        <img src="img/Stein.svg" alt="Stein Logo" className="h-8" />
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
