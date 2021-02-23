var HomePreview = createClass({
  render: function() {
    var data = this.props.entry.getIn(['data']).toJS();
    var header = data.header
    var subheader = data.subheader
    var buttonLink = data.buttonLink
    var buttonText = data.buttonText
    var backgroundPositionX = data.backgroundPositionX;
    var backgroundPositionY = data.backgroundPositionY;

    var getAsset = this.props.getAsset;
    var di = data.desktopImage
    var desktopImage = getAsset(di);
    return (
      <div id="home">
        <div id="wrapper">
          <div id="feature" class="section">
          	<div id="parallax" class="background background-video-cover" style={{
              backgroundImage: `url(${desktopImage})`
            }}></div>
          	<div class="section-inner feature">
          		<div class="inner-left-bottom">
          			<h4 class="">{ subheader }</h4>
          			<h1 class="shadowed">{ header }</h1>
          			<a class="btn" tabindex="0" href={ buttonLink }>
          				<div class="hover"></div>
          				<span class="text">{ buttonText }</span>
          			</a>
          		</div>
          		<div id="scrollme">
          			<svg width="30px" height="20px">
          				<path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>
          			</svg>
          		</div>
          	</div>
          </div>
        </div>
      </div>
    )
  }
})

var LaunchesPreview = createClass({
    render: function() {
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
      return (
        <div id="launches">
          <div id="wrapper">
            <div id="feature" class="section">
            	<div class="background"
                style={{
                  backgroundImage: `url(${desktopImage})`
                }}
              ></div>
            	<div class="section-inner feature">
            		<div class="inner-left-bottom">
            			<h3>{ subheader }</h3>
            			<h2 class="shadowed">{ header }</h2>
            			<a class="btn" tabindex="0" href={ youtubeLink } data-video={ youtubeId }>
            				<div class="hover"></div>
            				<span class="text">{ buttonText }</span>
            			</a>
            		</div>
            		<div id="scrollme">
            			<svg width="30px" height="20px">
            				<path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>
            			</svg>
            		</div>
            	</div>
            </div>

            <div id="update" class="section section-dc launches-update">
            	<div class="section-inner">
            		<div class="text-columns">
            		  <div class="text-column">
            				{ copyLeft }
            		  </div>
            		  <div class="text-column">
            				{ copyRight }
            		  </div>
            		</div>

            	</div>
            </div>

            <div class="section">
            	<div class="section-inner">
            		<img style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  margin: 'auto'
                }} class="infographic-img-desktop" src="/assets/images/F9_AUTONOMOUS_DRONESHIP_DESKTOP.jpg" alt=""/>
            		<img style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  margin: 'auto'
                }} class="infographic-img-mobile" src="/assets/images/F9_AUTONOMOUS_DRONESHIP_MOBILE.jpg" alt=""/>
            	</div>
            </div>


            <div class="section section-dc">
            	<div class="section-inner">
            		<div class="section-content">

            			<h2 class="h2-left launches-countdown">Countdown</h2>
            			<p style={{
                    textAlign: 'left'
                  }}>All Times Are Approximate</p>
            			<table class="regular">
            				<tbody>
            					<tr>
            						<th><strong>Hr/Min/Sec</strong></th>
            						<th><strong>Event</strong></th>
            					</tr>

            						<tr>
            							<td>00:38:00</td>
            							<td>SpaceX Launch Director verifies go for propellant load</td>
            						</tr>

            						<tr>
            							<td>00:35:00</td>
            							<td>RP-1 (rocket grade kerosene) loading underway</td>
            						</tr>

            						<tr>
            							<td>00:35:00</td>
            							<td>1st stage LOX (liquid oxygen) loading underway</td>
            						</tr>

            						<tr>
            							<td>00:16:00</td>
            							<td>2nd stage LOX loading underway</td>
            						</tr>

            						<tr>
            							<td>00:07:00</td>
            							<td>Falcon 9 begins engine chill prior to launch</td>
            						</tr>

            						<tr>
            							<td>00:01:00</td>
            							<td>Command flight computer to begin final prelaunch checks</td>
            						</tr>

            						<tr>
            							<td>00:01:00</td>
            							<td>Propellant tank pressurization to flight pressure begins</td>
            						</tr>

            						<tr>
            							<td>00:00:45</td>
            							<td>SpaceX Launch Director verifies go for launch</td>
            						</tr>

            						<tr>
            							<td>00:00:03</td>
            							<td>Engine controller commands engine ignition sequence to start</td>
            						</tr>

            						<tr>
            							<td>00:00:00</td>
            							<td>Falcon 9 liftoff</td>
            						</tr>

            				</tbody>
            			</table>

            			<h2 class="h2-left">Launch, Landing, and Deployment</h2>
            			<p style={{
                    textAlign: 'left'
                  }}>All Times Are Approximate</p>
            			<table class="regular">
            				<tbody>
            					<tr>
            						<th><strong>Hr/Min/Sec</strong></th>
            						<th><strong>Event</strong></th>
            					</tr>

            						<tr>
            							<td>00:01:12</td>
            							<td>Max Q (moment of peak mechanical stress on the rocket)</td>
            						</tr>

            						<tr>
            							<td>00:02:32</td>
            							<td>1st stage main engine cutoff (MECO)</td>
            						</tr>

            						<tr>
            							<td>00:02:36</td>
            							<td>1st and 2nd stages separate</td>
            						</tr>

            						<tr>
            							<td>00:02:44</td>
            							<td>2nd stage engine starts</td>
            						</tr>

            						<tr>
            							<td>00:03:09</td>
            							<td>Fairing deployment</td>
            						</tr>

            						<tr>
            							<td>00:06:41</td>
            							<td>1st stage entry burn complete</td>
            						</tr>

            						<tr>
            							<td>00:08:24</td>
            							<td>1st stage landing</td>
            						</tr>

            						<tr>
            							<td>00:08:47</td>
            							<td>2nd stage engine cutoff (SECO-1)</td>
            						</tr>

            						<tr>
            							<td>00:45:31</td>
            							<td>2nd stage engine restarts</td>
            						</tr>

            						<tr>
            							<td>00:45:32</td>
            							<td>2nd stage engine cutoff (SECO-2)</td>
            						</tr>

            						<tr>
            							<td>01:04:28</td>
            							<td>Starlink satellites deploy</td>
            						</tr>

            				</tbody>
            			</table>
            		</div>
            	</div>
            </div>
          </div>
        </div>
      )
    }
})


CMS.registerPreviewStyle('/assets/css/style.css');
CMS.registerPreviewStyle('./custom-previews.css');
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("launches", LaunchesPreview);
