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
    var buttonLink = entry.getIn(['data', 'buttonLink']);
    var buttonText = entry.getIn(['data', 'buttonText']);
    var backgroundPositionX = entry.getIn(['data', 'backgroundPositionX']);
    var backgroundPositionY = entry.getIn(['data', 'backgroundPositionY']);

    var getAsset = this.props.getAsset;
    var di = entry.getIn(['data', 'desktopImage']);
    var desktopImage = getAsset(di);

    return /*#__PURE__*/h("div",{id: 'home'},h("div", {
    id: "feature",
    class: "section"
  }, /*#__PURE__*/h("div", {
    id: "parallax",
    class: "background background-video-cover",
    style: {
      backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}`,
      backgroundImage: `url(${desktopImage})`
    }
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
    href: buttonLink
  }, /*#__PURE__*/h("div", {
    class: "hover"
  }), /*#__PURE__*/h("span", {
    class: "text"
  }, buttonText))), /*#__PURE__*/h("div", {
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

var LaunchesPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var header = entry.getIn(['data', 'header']);
    var subheader = entry.getIn(['data', 'subheader']);
    var buttonLink = entry.getIn(['data', 'buttonLink']);
    var buttonText = entry.getIn(['data', 'buttonText']);
    var backgroundPositionX = entry.getIn(['data', 'backgroundPositionX']);
    var backgroundPositionY = entry.getIn(['data', 'backgroundPositionY']);
    var copyLeft = entry.getIn(['data', 'copyLeft']);
    var copyRight = entry.getIn(['data', 'copyRight']);
    var youtubeLink = entry.getIn(['data', 'youtubeLink']);
    var youtubeId = entry.getIn(['data', 'youtubeId']);

    var getAsset = this.props.getAsset;
    var di = entry.getIn(['data', 'desktopImage']);
    var desktopImage = getAsset(di);
    return /*#__PURE__*/ h("div", {id: 'launches'}, h(
    "div",
    {
      id: "wrapper"
    },
    /*#__PURE__*/ h(
      "div",
      {
        id: "feature",
        class: "section"
      },
      /*#__PURE__*/ h("div", {
        class: "background",
        style: {
          backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}`,
          backgroundImage: `url(${desktopImage})`
        }
      }),
      /*#__PURE__*/ h(
        "div",
        {
          class: "section-inner feature"
        },
        /*#__PURE__*/ h(
          "div",
          {
            class: "inner-left-bottom"
          },
          /*#__PURE__*/ h("h3", null, subheader),
          /*#__PURE__*/ h(
            "h2",
            {
              class: "shadowed"
            },
            header
          ),
          /*#__PURE__*/ h(
            "a",
            {
              class: "btn",
              tabindex: "0",
              href: youtubeLink,
              "data-video": youtubeId
            },
            /*#__PURE__*/ h("div", {
              class: "hover"
            }),
            /*#__PURE__*/ h(
              "span",
              {
                class: "text"
              },
              buttonText
            )
          )
        ),
        /*#__PURE__*/ h(
          "div",
          {
            id: "scrollme"
          },
          /*#__PURE__*/ h(
            "svg",
            {
              width: "30px",
              height: "20px"
            },
            /*#__PURE__*/ h("path", {
              stroke: "#ffffff",
              "stroke-width": "2px",
              d: "M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            })
          )
        )
      )
    ),
    /*#__PURE__*/ h(
      "div",
      {
        id: "update",
        class: "section section-dc launches-update"
      },
      /*#__PURE__*/ h(
        "div",
        {
          class: "section-inner"
        },
        /*#__PURE__*/ h(
          "div",
          {
            class: "text-columns"
          },
          /*#__PURE__*/ h(
            "div",
            {
              class: "text-column"
            },
            copyLeft
          ),
          /*#__PURE__*/ h(
            "div",
            {
              class: "text-column"
            },
            copyRight
          )
        )
      )
    ),
    /*#__PURE__*/ h(
      "div",
      {
        class: "section"
      },
      /*#__PURE__*/ h(
        "div",
        {
          class: "section-inner"
        },
        /*#__PURE__*/ h("img", {
          style: {
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            margin: 'auto'
          },
          class: "infographic-img-desktop",
          src: "/assets/images/F9_AUTONOMOUS_DRONESHIP_DESKTOP.jpg",
          alt: ""
        }),
        /*#__PURE__*/ h("img", {
          style: {
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            margin: 'auto'
          },
          class: "infographic-img-mobile",
          src: "/assets/images/F9_AUTONOMOUS_DRONESHIP_MOBILE.jpg",
          alt: ""
        })
      )
    ),
    /*#__PURE__*/ h(
      "div",
      {
        class: "section section-dc"
      },
      /*#__PURE__*/ h(
        "div",
        {
          class: "section-inner"
        },
        /*#__PURE__*/ h(
          "div",
          {
            class: "section-content"
          },
          /*#__PURE__*/ h(
            "h2",
            {
              class: "h2-left launches-countdown"
            },
            "Countdown"
          ),
          /*#__PURE__*/ h(
            "p",
            {
              style: { textAlign: 'left' }
            },
            "All Times Are Approximate"
          ),
          /*#__PURE__*/ h(
            "table",
            {
              class: "regular"
            },
            /*#__PURE__*/ h(
              "tbody",
              null,
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h(
                  "th",
                  null,
                  /*#__PURE__*/ h(
                    "strong",
                    null,
                    "Hr/Min/Sec"
                  )
                ),
                /*#__PURE__*/ h(
                  "th",
                  null,
                  /*#__PURE__*/ h("strong", null, "Event")
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:38:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "SpaceX Launch Director verifies go for propellant load"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:35:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "RP-1 (rocket grade kerosene) loading underway"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:35:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "1st stage LOX (liquid oxygen) loading underway"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:16:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "2nd stage LOX loading underway"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:07:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Falcon 9 begins engine chill prior to launch"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:01:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Command flight computer to begin final prelaunch checks"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:01:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Propellant tank pressurization to flight pressure begins"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:00:45"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "SpaceX Launch Director verifies go for launch"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:00:03"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Engine controller commands engine ignition sequence to start"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:00:00"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Falcon 9 liftoff"
                )
              )
            )
          ),
          /*#__PURE__*/ h(
            "h2",
            {
              class: "h2-left"
            },
            "Launch, Landing, and Deployment"
          ),
          /*#__PURE__*/ h(
            "p",
            {
              style: { textAlign: 'left' }
            },
            "All Times Are Approximate"
          ),
          /*#__PURE__*/ h(
            "table",
            {
              class: "regular"
            },
            /*#__PURE__*/ h(
              "tbody",
              null,
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h(
                  "th",
                  null,
                  /*#__PURE__*/ h(
                    "strong",
                    null,
                    "Hr/Min/Sec"
                  )
                ),
                /*#__PURE__*/ h(
                  "th",
                  null,
                  /*#__PURE__*/ h("strong", null, "Event")
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:01:12"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Max Q (moment of peak mechanical stress on the rocket)"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:02:32"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "1st stage main engine cutoff (MECO)"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:02:36"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "1st and 2nd stages separate"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:02:44"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "2nd stage engine starts"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:03:09"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Fairing deployment"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:06:41"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "1st stage entry burn complete"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:08:24"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "1st stage landing"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:08:47"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "2nd stage engine cutoff (SECO-1)"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:45:31"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "2nd stage engine restarts"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "00:45:32"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "2nd stage engine cutoff (SECO-2)"
                )
              ),
              /*#__PURE__*/ h(
                "tr",
                null,
                /*#__PURE__*/ h("td", null, "01:04:28"),
                /*#__PURE__*/ h(
                  "td",
                  null,
                  "Starlink satellites deploy"
                )
              )
            )
          )
        )
      )
    )
  ));
  }
})

CMS.registerPreviewStyle('/assets/css/style.css');
CMS.registerPreviewStyle('./custom-previews.css');
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("launches", LaunchesPreview);
