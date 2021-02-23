// This is so really hard to read because we are working in an environment without JSX transpiling setup.
// The Netlify CMS requires that we register the preview template as a React component.
// So according to the docs, we have to generate a React component with just a couple of exposed methods, createClass and h (alias for createElement).
// https://www.netlifycms.org/docs/customization/

// Suggestion: use the Babel online repl/transpiler to generate this block of JS
// https://babeljs.io/repl

// NOTE: mind your React-friendly HTML gotchas here (inline style objects, className, SVG stuff, etc)

// NOTE: also, be sure to wrap the whole template in a div#home so that the proper styles get applied to the proper elements in the preview container

var HomePreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var header = entry.getIn(['data', 'header']);
    var subheader = entry.getIn(['data', 'subheader']);


    return /*#__PURE__*/h("div",{id: 'home'},h("div", {
    id: "feature",
    class: "section"
  }, /*#__PURE__*/h("div", {
    id: "parallax",
    class: "background background-video-cover",
    style: {
      backgroundPosition: `center 15%`
    },
    "data-desktop": "/assets/images/Desktop_StarL19_DSC_1291.jpg",
    "data-mobile": "/static/images/backgrounds-new/Desktop_StarL19_DSC_1291.jpg"
  }), /*#__PURE__*/h("div", {
    class: "section-inner feature"
  }, /*#__PURE__*/h("div", {
    class: "inner-left-bottom"
  }, /*#__PURE__*/h("h4", {
    style: {
      textTransform: 'uppercase'
    },
    class: ""
  }, subheader), /*#__PURE__*/h("h1", {
    class: " shadowed"
  }, header), /*#__PURE__*/h("a", {
    class: "btn ",
    tabindex: "0",
    href: "/launches/"
  }, /*#__PURE__*/h("div", {
    class: "hover"
  }), /*#__PURE__*/h("span", {
    class: "text"
  }, "REPLAY"))), /*#__PURE__*/h("div", {
    id: "scrollme"
  }, /*#__PURE__*/h("svg", {
    width: "30px",
    height: "20px"
  }, /*#__PURE__*/h("path", {
    stroke: "#ffffff",
    "stroke-width": "2px",
    d: "M2.000,5.000 L15.000,18.000 L28.000,5.000 "
  }))))));
  }
})

CMS.registerPreviewStyle('/assets/css/style.css');
CMS.registerPreviewStyle('./custom-previews.css');
CMS.registerPreviewTemplate("home", HomePreview);
