var HomePreview = createClass({
  render: function () {
    var data = this.props.entry.getIn(['data']).toJS();
    var header = data.header;
    var subheader = data.subheader;
    var buttonLink = data.buttonLink;
    var buttonText = data.buttonText;
    var backgroundPositionX = data.backgroundPositionX;
    var backgroundPositionY = data.backgroundPositionY;
    var getAsset = this.props.getAsset;
    var di = data.desktopImage;
    var desktopImage = getAsset(di);
    return h("div", {
      id: "home"
    }, h("div", {
      id: "wrapper"
    }, h("div", {
      id: "feature",
      class: "section"
    }, h("div", {
      id: "parallax",
      class: "background background-video-cover",
      style: {
        backgroundImage: `url(${desktopImage})`
      }
    }), h("div", {
      class: "section-inner feature"
    }, h("div", {
      class: "inner-left-bottom"
    }, h("h4", {
      class: ""
    }, subheader), h("h1", {
      class: "shadowed"
    }, header), h("a", {
      class: "btn",
      tabindex: "0",
      href: buttonLink
    }, h("div", {
      class: "hover"
    }), h("span", {
      class: "text"
    }, buttonText))), h("div", {
      id: "scrollme"
    }, h("svg", {
      width: "30px",
      height: "20px"
    }, h("path", {
      stroke: "#ffffff",
      "stroke-width": "2px",
      d: "M2.000,5.000 L15.000,18.000 L28.000,5.000 "
    })))))));
  }
});
var LaunchesPreview = createClass({
  render: function () {
    var data = this.props.entry.getIn(['data']).toJS();
    var header = data.header;
    var subheader = data.subheader;
    var buttonLink = data.buttonLink;
    var buttonText = data.buttonText;
    var backgroundPositionX = data.backgroundPositionX;
    var backgroundPositionY = data.backgroundPositionY;
    var copyLeft = data.copyLeft;
    var copyRight = data.copyRight;
    var youtubeLink = data.youtubeLink;
    var youtubeId = data.youtubeId;
    var getAsset = this.props.getAsset;
    var di = data.desktopImage;
    var desktopImage = getAsset(di);
    return h("div", {
      id: "launches"
    }, h("div", {
      id: "wrapper"
    }, h("div", {
      id: "feature",
      class: "section"
    }, h("div", {
      class: "background",
      style: {
        backgroundImage: `url(${desktopImage})`
      }
    }), h("div", {
      class: "section-inner feature"
    }, h("div", {
      class: "inner-left-bottom"
    }, h("h3", null, subheader), h("h2", {
      class: "shadowed"
    }, header), h("a", {
      class: "btn",
      tabindex: "0",
      href: youtubeLink,
      "data-video": youtubeId
    }, h("div", {
      class: "hover"
    }), h("span", {
      class: "text"
    }, buttonText))), h("div", {
      id: "scrollme"
    }, h("svg", {
      width: "30px",
      height: "20px"
    }, h("path", {
      stroke: "#ffffff",
      "stroke-width": "2px",
      d: "M2.000,5.000 L15.000,18.000 L28.000,5.000 "
    }))))), h("div", {
      id: "update",
      class: "section section-dc launches-update"
    }, h("div", {
      class: "section-inner"
    }, h("div", {
      class: "text-columns"
    }, h("div", {
      class: "text-column"
    }, copyLeft), h("div", {
      class: "text-column"
    }, copyRight)))), h("div", {
      class: "section"
    }, h("div", {
      class: "section-inner"
    }, h("img", {
      style: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        margin: 'auto'
      },
      class: "infographic-img-desktop",
      src: "/assets/images/F9_AUTONOMOUS_DRONESHIP_DESKTOP.jpg",
      alt: ""
    }), h("img", {
      style: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        margin: 'auto'
      },
      class: "infographic-img-mobile",
      src: "/assets/images/F9_AUTONOMOUS_DRONESHIP_MOBILE.jpg",
      alt: ""
    }))), h("div", {
      class: "section section-dc"
    }, h("div", {
      class: "section-inner"
    }, h("div", {
      class: "section-content"
    }, h("h2", {
      class: "h2-left launches-countdown"
    }, "Countdown"), h("p", {
      style: {
        textAlign: 'left'
      }
    }, "All Times Are Approximate"), h("table", {
      class: "regular"
    }, h("tbody", null, h("tr", null, h("th", null, h("strong", null, "Hr/Min/Sec")), h("th", null, h("strong", null, "Event"))), h("tr", null, h("td", null, "00:38:00"), h("td", null, "SpaceX Launch Director verifies go for propellant load")), h("tr", null, h("td", null, "00:35:00"), h("td", null, "RP-1 (rocket grade kerosene) loading underway")), h("tr", null, h("td", null, "00:35:00"), h("td", null, "1st stage LOX (liquid oxygen) loading underway")), h("tr", null, h("td", null, "00:16:00"), h("td", null, "2nd stage LOX loading underway")), h("tr", null, h("td", null, "00:07:00"), h("td", null, "Falcon 9 begins engine chill prior to launch")), h("tr", null, h("td", null, "00:01:00"), h("td", null, "Command flight computer to begin final prelaunch checks")), h("tr", null, h("td", null, "00:01:00"), h("td", null, "Propellant tank pressurization to flight pressure begins")), h("tr", null, h("td", null, "00:00:45"), h("td", null, "SpaceX Launch Director verifies go for launch")), h("tr", null, h("td", null, "00:00:03"), h("td", null, "Engine controller commands engine ignition sequence to start")), h("tr", null, h("td", null, "00:00:00"), h("td", null, "Falcon 9 liftoff")))), h("h2", {
      class: "h2-left"
    }, "Launch, Landing, and Deployment"), h("p", {
      style: {
        textAlign: 'left'
      }
    }, "All Times Are Approximate"), h("table", {
      class: "regular"
    }, h("tbody", null, h("tr", null, h("th", null, h("strong", null, "Hr/Min/Sec")), h("th", null, h("strong", null, "Event"))), h("tr", null, h("td", null, "00:01:12"), h("td", null, "Max Q (moment of peak mechanical stress on the rocket)")), h("tr", null, h("td", null, "00:02:32"), h("td", null, "1st stage main engine cutoff (MECO)")), h("tr", null, h("td", null, "00:02:36"), h("td", null, "1st and 2nd stages separate")), h("tr", null, h("td", null, "00:02:44"), h("td", null, "2nd stage engine starts")), h("tr", null, h("td", null, "00:03:09"), h("td", null, "Fairing deployment")), h("tr", null, h("td", null, "00:06:41"), h("td", null, "1st stage entry burn complete")), h("tr", null, h("td", null, "00:08:24"), h("td", null, "1st stage landing")), h("tr", null, h("td", null, "00:08:47"), h("td", null, "2nd stage engine cutoff (SECO-1)")), h("tr", null, h("td", null, "00:45:31"), h("td", null, "2nd stage engine restarts")), h("tr", null, h("td", null, "00:45:32"), h("td", null, "2nd stage engine cutoff (SECO-2)")), h("tr", null, h("td", null, "01:04:28"), h("td", null, "Starlink satellites deploy")))))))));
  }
});
CMS.registerPreviewStyle('/assets/css/style.css');
CMS.registerPreviewStyle('./custom-previews.css');
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("launches", LaunchesPreview);