<style>
header {
  border-bottom: 2px solid transparent;
}
h1 {
  font-size: 32px;
  border-bottom: none;
}
h2 {
  font-size: 28px;
  border-bottom: none;
  margin: 40px 0;
}
h3 {
  font-size: 24px;
  border-bottom: none;
}
#dg-content, #dg-innerContent {
  padding-top: 0;
}

#banner, #banner-buttons {
  margin: 0;
}

#banner {
  padding-top: 36px;
}

#banner img {
  padding: 25px 0 25px 0;
}

#banner-buttons {
  padding: 20px 0 20px 0;
}

.spaced {
  margin-right: 15px;
}

.heading-text {
  font-size: 16px;
  text-align: center;
}
.subDescription {
  width: 500px;
  display: inline-block;
}

.howItWorksDetails {
    text-align:left;
    display: inline-block;
    vertical-align: top;
    width: 300px;
    padding: 10px;
}
.howItWorksDetails img {
  border-radius: 12px;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}
.howItWorksDetails p {
  width: 300px;
  margin: 10px 20px 10px 20px;
}

.features {
  margin: 0;
  padding: 0;
  width: 100%;
}
.features li {
  vertical-align: top;
  display: inline-block;
  width: 220px;
  margin: 20px 10px;
}
.features li img {
  height: 44px;
  margin-bottom: 8px;
}
.features li span {
  vertical-align: middle;
  margin-right: 5px;
}
.features li p:first-of-type {
  margin: 0;
  padding: 0 0 3px 0;
  font-size: 14px;
  font-weight: bold;
  border: none;
}
.features li p:last-of-type {
  padding-top: 5px;
  margin: 0;
}

.featureDetailsContainer {
  margin-bottom: 40px;
}
.featureDetails {
  text-align:left;
  display: inline-block;
  margin: 0 10px;
  vertical-align: top;
  width: 300px;
  padding: 10px;
}
.featureDetails ul {margin: 10px 0 0 0}

.browserSupport {
  text-align: center;
}
p.browserSupport {
  width: 450px;
  margin-bottom: 10px;
}
.browsers {
  margin: 40px;
}
.browsers a {
  display: inline-block;
  vertical-align: top;
  width: 80px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  margin: 0 20px;
  transition: opacity 0.2s;
}
.browsers a:hover {
  opacity: 0.7;
}
.browsers a img {
  height: 60px;
}
.browsers a p {
  margin: 8px;
}

.quickStart {
  margin-bottom: 40px;
}
.column {
  display: inline-block;
  vertical-align: middle;
  width: 300px;
  padding: 0 20px;
  margin: 0 20px 0 0;
}
.column p {
  margin: 0;
}

.inkitSponsor {
  width: 700px;
  height: 250px;
  background-image: url('files/images/inkit-dark-background.png');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  color: white;
  opacity: 0.9;
  padding-bottom: 10px;
  text-align: left;
}
.sponsorBox {
  text-align:left;
  display: inline-block;
  margin: 0 10px;
  vertical-align: middle;
  width: 300px;
}
.inkitSponsor a, .inkitSponsor h3 {
  color: white;
}
.inkitSponsor h3 {
  color: white;
  line-height: 1.5;
}
.inkitSponsor img {
  width: 100%;
  height: 100%;
  padding: 0 0 0 10px;
  margin: 0;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);
}
.inkitSponsor div {
  padding-right: 20px;
}
</style>

<div id="banner"><div class="w-fixed-width w-center">
  <h1>The Leading Open Source Documentation Tool</h1>
  <p class="heading-text">
   DocGen generates HTML websites and PDF documents from plain text for free.
  </p>
  <img class="w-center" src="files/images/overview.svg"  alt="overview" width="700px" />
</div></div>

<div id="banner-buttons"><div class="w-fixed-width">
  <span class="w-center">
  <a href="https://github.com/mtmacdonald/docgen/tags" class="button spaced">
    <span>Download</span>
    <img class="icon" src="files/images/icons/arrowRight.svg" alt="arrow">
  </a>
  <a href="https://github.com/mtmacdonald/docgen/issues" class="button inverted">Report Issues</a>
  </span>
</div></div>

<div class="w-center">
  <h2>DocGen is a Static Website Generator</h2>
  <p class="heading-text">
  <span class="subDescription">
    DocGen is an open-source website generator that makes it easy to create high-quality documentation.
  </span>
  </p>
</div>

<div class="segment" style="border-bottom: none; margin-bottom:0; padding-bottom:0;"><div class="w-fixed-width">

<h2 class="dg-hiddenTitle" id="features">Features</h2>

<ul class="features">
<li>
  <img src="files/images/icons/computer.svg" />
  <p><span>Self-contained website</span></p>
  <p>Creates a static website that works on any server, or as local files.</p>
</li>
<li>
  <img src="files/images/icons/pdf.svg" />
  <p><span>Optional PDF</span></p>
  <p>Also publishes the website content as a single PDF, using <a href="http://wkhtmltopdf.org">wkhtmltopdf</a>.</p>
</li>
<li>
  <img src="files/images/icons/pencil.svg" />
  <p><span>Human-friendly input</span></p>
  <p>Write in plain text, or the human-friendly <a href="http://commonmark.org">Markdown</a> format.</p>
</li>
<li>
  <img src="files/images/icons/cog.svg" />
  <p><span>Easy to version control</span></p>
  <p>Plain text input formats work well with all version control systems.</p>
</li>
<li>
  <img src="files/images/icons/document.svg" />
  <p></span><span>Table of contents</span></p>
  <p>Automatically creates tables of contents, with links and PDF page numbers.</p>
</li>
<li>
  <img src="files/images/icons/code.svg" />
  <p><span>Code syntax highlighting</span></p>
  <p>Automatically highlights code blocks, using <a href="https://highlightjs.org">Highlight.js</a>, with language detection.</p>
</li>
<li>
  <img src="files/images/icons/box.svg" />
  <p><span>Mathematical expressions</span></p>
  <p>Displays mathematical expressions without plugins, using either
  <a href="http://khan.github.io/KaTeX/">KaTeX</a> or
  <a href="https://www.mathjax.org">MathJax</a>.</p>
</li>
<li>
  <img src="files/images/icons/star.svg" />
  <p><span>Branding and metadata</span></p>
  <p>Easily brand with a logo, attribute ownership, and attach release notes.</p>
</li>
</ul>

</div></div>

<div><div class="w-fixed-width">

<h2>Sponsors</h2>

<div class="inkitSponsor w-center">
 <div class="sponsorBox">
   <img src="files/images/inkit-screenshot.png" alt="Inkit sponsor">
 </div>
  <div class="sponsorBox">
    <h3>DocGen is Sponsored <br/>By Inkit</h3>
    <p>
      DocGen is open-source software sponsored by Inkit, the leading Zero Trust Document Generation Platform.
    </p>
    <p><a href="https://www.inkit.com" class="button whiteInverted">Learn More</a></p>
  </div>
</div>

<p class="dg-forceBreak"></p>
<h2>How it works</h2>

Simply <a href="https://github.com/mtmacdonald/docgen/releases">download</a> or <a href="#quick-start">install</a>
DocGen, and run the tool to generate websites and PDF documents.

<div>
  <div class="howItWorksDetails">
    <img src="files/images/text.png" alt="text" />
    <p>001 | <strong>Create content in plain text or human-friendly <a href="http://commonmark.org">Markdown</a></strong></p>
  </div>
  <div class="howItWorksDetails">
    <img src="files/images/web.png" alt="website" />
    <p>002 | <strong>DocGen styles and publishes all your content as a website</strong></p>
  </div>
  <div class="howItWorksDetails">
    <img src="files/images/pdf.png" alt="pdf" />
    <p>003 | <strong>DocGen also creates an equivalent PDF copy</strong></p>
  </div>
</div>

<div class="featureDetailsContainer w-center">
    <div class="featureDetails">
        <strong>Flexible Input Formats</strong>
        <ul>
            <li>Plain text</li>
            <li>CommonMark (Markdown)</li>
            <li>HTML</li>
            <li>LaTeX mathematical expressions</li>
            <li>Image diagrams</li>
            <li>Attach other documents</li>
        <ul>
    </div>
    <div class="featureDetails">
       <strong>Configurable Metadata</strong>
        <ul>
          <li>Branding (logo, title, organization)</li>
          <li>License, copyright, and legal markings</li>
          <li>Ownership and attribution</li>
          <li>Version information</li>
          <li>Release notes (change log)</li>
        </ul>
    </div>
</div>

<blockquote>
NOTE: DocGen is intended for free-form, human-generated content which is regularly updated and improved, then
automatically laid out according to a template. It is not intended as a precision PDF editing tool.
</blockquote>

<h2 class="browserSupport">Browser support</h2>

<p class="browserSupport w-center">
  Websites and documents generated by DocGen work in most browsers
  including Chrome, Edge, Firefox and Safari.
</p>

<div class="browsers w-center">
  <a href="https://www.google.com/chrome">
    <img src="files/images/icons/chrome.png" alt="chrome" />
    <p>Chrome</p>
  </a>
  <a href="https://www.microsoft.com/en-us/edge">
    <img src="files/images/icons/edge.png" alt="edge" />
    <p>Edge</p>
  </a>
  <a href="https://www.mozilla.org/en-US/firefox/new">
    <img src="files/images/icons/firefox.png" alt="firefox" />
    <p>Firefox</p>
  </a>
  <a href="https://www.apple.com/safari">
    <img src="files/images/icons/safari.png" alt="safari" />
    <p>Safari</p>
  </a>
</div>

<p class="dg-forceBreak"></p>
<h2 id="quick-start">Quick start</h2>

<div class="quickStart">
  <div class="column">
    <p>In just three steps:</p>
    <ul>
     <li><strong>Install DocGen</strong></li>
     <li><strong>Scaffold an empty template</strong></li>
     <li><strong>Generate a static website</strong></li>
    </ul>
    <p>Simply enter these commands in the terminal:</p>
  </div>
  <div class="column">
    <pre>
<code>npm install -g docgen-tool
docgen scaffold
docgen run -o $HOME/docgen-example</code></pre>
  </div>
</div>

<p class="w-center">
 <strong>
   See the <a href="installation.html">installation guide</a> for more detailed instructions.
 </strong>
</p>

</div></div>
