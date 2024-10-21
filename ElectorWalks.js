
		body {
			margin: 0;
			padding: 0;
			overflow: auto;
			height: 100%;
			max-height: 100%;
			font-family:Arial, Helvetica, sans-serif;
			line-height: 1.5em;
		}

		main {
			position: fixed;
			top: 0;
			bottom: 100px; /* Set this to the height of the footer */
			right: 230px; /* Set this to the width of the nav bar */
			overflow: auto;
			background: #fff;
		}

		#footer {
			position: absolute;
			bottom: 0;
			right: 230px; /* Set this to the width of the nav bar */
			left: 0;
			height: 100px;
			overflow: hidden; /* Disables scrollbars on the header frame. To enable scrollbars, change "hidden" to "scroll" */
			background: #BCCE98;
		}

		#nav {
      z-index: 8;
			position: absolute;
			top: 0;
			right: 0;
			width: 300px;
			background: #DAE9BC;
		    background-color: black;
		    display: inline-block;
		    color: white;
		    font-weight: bold;
		    padding : 16px 20px ;
		    z-index: 8;
		    font-size: 1.5em;
		    border-radius: 3px;
		    border-color: indigo;
		    cursor: pointer;
		    opacity: 0.8;
		}
    #myForm {
      position: absolute;
      top: 700px;
			width: 280px;
    }

		.innertube {
			margin: 15px; /* Provides padding for the content */
		}

		p {
			color: #555;
		}

		nav ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		nav ul a {
			color: darkgreen;
			text-decoration: none;
		}


.collapsible:after {
  content: '\002B';
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.content {
  padding: 0 30px;
  position: absolute;
  max-height: 0;
  overflow: auto;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}

.mapwardname {
  color: yellow;
  font-size: 1em
  font-weight: bold;
  font-size: 100%;
  line-height: 2;
}

.maptitle {
  color: darkgray;
  font-size: 2em
  font-weight: bold;
  font-size: 100%;
  line-height: 3;
  text-align: center;
}


.open-button {
  background-color: #555;
  color: white;
  padding: 0 0 ;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: relative;
  bottom: 0;
  right: 0;
  width: 280px;
}

/* The popup form - hidden by default */
.form-popup {
  display: none;
  background-color : white;
  position: relative;
  right: 30px;
  border: 3px solid #f1f1f1;
  z-index: 9;
  width: 300px;
}

/* Add styles to the form container */
.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

/* Full-width input fields */
.form-container input[type=text], .form-container input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type=text]:focus, .form-container input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/login button */
.form-container .btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-spacing:0
  margin-left: 30px;
  page-break-inside:auto;
}
thead {
   display:table-header-group;
   font-weight: bold;

}

tr:nth-child(even) {
  background-color: #dddddd;
}

/*! Guilfoss Design System 1.21 */
:root {
    --guil-g-color-border-base-1: #c9c9c9;
    --guil-g-color-border-base-2: #aeaeae;
    --guil-g-color-border-base-3: #939393;
    --guil-g-color-border-base-4: #747474;
 }

/*! normalise.css v3.0.2 | MIT License | git.io/normalise */

html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust:100%
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display:block
}


a {
    background-color:transparent
}

a:active, a:hover {
    outline:0
}

abbr[title] {
    border-bottom:1px dotted
}

b, strong {
    font-weight:700;
    color: gray
}

dfn {
    font-style:italic
}

h1 {
    font-size: 3em;
    margin: .67em 0
}

mark {
    background: #ff0;
    color:#000
}

small {
    font-size:80%
}

sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align:baseline
}

sup {
    top:-.5em
}

sub {
    bottom:-.25em
}

img {
    border:0
}

svg:not(:root) {
    overflow:hidden
}

figure {
    margin:1em 40px
}

hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height:0
}

pre {
    overflow:auto
}

code, kbd, pre, samp {
    font-family: monospace, monospace;
    font-size:1em
}

button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin:0
}

button {
    overflow:visible
}

button, select {
    text-transform:none
}

button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor:pointer
}

button[disabled], html input[disabled] {
    cursor:default
}

button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding:0
}

input {
    line-height:normal
}

input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding:0
}

input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
    height:auto
}

input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    box-sizing:content-box
}

input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
    -webkit-appearance:none
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding:.35em .625em .75em
}

legend {
    border: 0;
    padding:0
}

textarea {
    overflow:auto
}

optgroup {
    font-weight:700
}


td, th {
    color: indigo;
    padding:0
}

*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing:border-box
}

::-webkit-input-placeholder {
    color: var(--guil-g-color-neutral-base-50, #747474);
    font-weight: 400;
    opacity:1
}

::-moz-placeholder {
    color: var(--guil-g-color-neutral-base-50, #747474);
    font-weight: 400;
    opacity:1
}

:-ms-input-placeholder {
    color: var(--guil-g-color-neutral-base-50, #747474);
    font-weight: 400;
    opacity:1
}

::-ms-input-placeholder {
    color: var(--guil-g-color-neutral-base-50, #747474);
    font-weight: 400;
    opacity:1
}

::placeholder {
    color: var(--guil-g-color-neutral-base-50, #747474);
    font-weight: 400;
    opacity:1
}

::-moz-selection {
    background: var(--guil-g-color-brand-base-90, #d8e6fe);
    text-shadow: none;
    color:var(--guil-g-color-neutral-base-10, #181818)
}

::selection {
    background: var(--guil-g-color-brand-base-90, #d8e6fe);
    text-shadow: none;
    color:var(--guil-g-color-neutral-base-10, #181818)
}

html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 100%;
    line-height: 1.5;
    background: #eef4ff;
    color: var(--guil-g-color-neutral-base-10, #181818);
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0)
}


dl, fieldset, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding:20 20;
}

dd, figure {
    margin:0
}

abbr[title] {
    text-decoration:none
}

abbr[title], fieldset, hr {
    border:0
}

hr {
    padding:0
}

h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-size: 2em
}

ol, ul {
    list-style:none
}

a {
    color: #0176d3;
    text-decoration: none;
    -webkit-transition: color .1s linear;
    transition:color .1s linear
}

a:focus, a:hover {
    text-decoration: underline;
    color:#014486
}

a:active {
    color:#014486
}

a:focus-visible {
    outline-color:var(--guil-g-color-palette-blue-50, #0176d3)
}

a, button {
    cursor:pointer
}

dfn, strong {
    font-weight:700
}

mark {
    background-color: var(--guil-g-color-palette-yellow-90, #fff03f);
    color:var(--guil-g-color-neutral-base-10, #181818)
}

abbr[title] {
    cursor:help
}

input[type=search] {
    -webkit-box-sizing: border-box;
    box-sizing:border-box
}


caption, td, th {
    text-align:left
}

.guil-button--small, .guil-button_small {
    line-height: 1.75rem;
    min-height:2rem
}

.guil-button {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: var(--guil-c-button-spacing-block-start, var(--sds-c-button-spacing-block-start, 0)) var(--guil-c-button-spacing-inline-end, var(--sds-c-button-spacing-inline-end, 0)) var(--guil-c-button-spacing-block-end, var(--sds-c-button-spacing-block-end, 0)) var(--guil-c-button-spacing-inline-start, var(--sds-c-button-spacing-inline-start, 0));
    background: none;
    background-color: var(--guil-c-button-color-background, var(--sds-c-button-color-background, transparent));
    background-clip: border-box;
    border: var(--guil-c-button-sizing-border, var(--sds-c-button-sizing-border, 1px)) solid var(--guil-c-button-color-border, var(--sds-c-button-color-border, transparent));
    border-radius: var(--guil-c-button-radius-border, var(--sds-c-button-radius-border, .25rem));
    -webkit-box-shadow: var(--guil-c-button-shadow, var(--sds-c-button-shadow));
    box-shadow: var(--guil-c-button-shadow, var(--sds-c-button-shadow));
    line-height: var(--guil-c-button-line-height, var(--sds-c-button-line-height, 1.875rem));
    text-decoration: none;
    color: var(--guil-c-button-text-color, var(--sds-c-button-text-color, #0176d3));
    -webkit-appearance: none;
    white-space: normal;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select:none
}



.guil-radio .guil-radio--faux, .guil-radio .guil-radio_faux {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    vertical-align: middle;
    border: 1px solid var(--guil-c-radio-color-border, var(--sds-c-radio-color-border, var(--guil-g-color-border-base-4, #c9c9c9)));
    border-radius: 50%;
    background: none;
    background-color: var(--guil-c-radio-color-background, var(--sds-c-radio-color-background, var(--guil-g-color-neutral-base-100, #fff)));
    -webkit-box-shadow: var(--guil-c-radio-shadow, var(--sds-c-radio-shadow));
    box-shadow: var(--guil-c-radio-shadow, var(--sds-c-radio-shadow));
    -webkit-transition: border .1s linear, background-color .1s linear;
    transition:border .1s linear, background-color .1s linear
}

.guil-radio [type=radio]:checked + .guil-radio__label .guil-radio_faux, .guil-radio [type=radio]:checked + .guil-radio_faux, .guil-radio [type=radio]:checked ~ .guil-radio--faux, .guil-radio [type=radio]:checked ~ .guil-radio_faux {
    border-color: var(--guil-c-radio-color-border-checked, var(--sds-c-radio-color-border-checked, var(--sds-c-radio-color-border, var(--guil-g-color-border-base-4, #c9c9c9))));
    background: none;
    background-color:var(--guil-c-radio-color-background-checked, var(--sds-c-radio-color-background-checked, var(--sds-c-radio-color-background, var(--guil-g-color-neutral-base-100, #fff))))
}

.guil-radio [type=radio]:checked + .guil-radio__label .guil-radio_faux:after, .guil-radio [type=radio]:checked + .guil-radio_faux:after, .guil-radio [type=radio]:checked ~ .guil-radio--faux:after, .guil-radio [type=radio]:checked ~ .guil-radio_faux:after {
    width: .5rem;
    height: .5rem;
    content: "";
    position: absolute;
    top: 50%;
    /*! @noflip */
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    border-radius: 50%;
    background: none;
    background-color:var(--guil-c-radio-mark-color-foreground, var(--sds-c-radio-mark-color-foreground, #0176d3))
}

 .guil-radio [type=radio]:focus ~ .guil-radio_faux {
    border-color: var(--guil-c-radio-color-border-focus, var(--guil-c-radio-color-border-focus, var(--guil-g-color-border-base-4, #c9c9c9)));
    -webkit-box-shadow: var(--guil-c-radio-shadow-focus, var(--sds-c-radio-shadow-focus, var(--_guil-g-shadow-outset-focus, 0 0 3px #0176d3)));
    box-shadow: var(--guil-c-radio-shadow-focus, var(--sds-c-radio-shadow-focus, var(--_guil-g-shadow-outset-focus, 0 0 3px #0176d3)));
    outline:0
}


.guil-radio_button-group {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    border: 1px solid var(--guil-g-color-border-base-4, #e5e5e5);
    border-radius:.25rem
}
.SAVE {
width: 4rem;
height: 2rem;
display: inline-block;
}

.guil-radio_button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 0;
    border-radius: 0;
    background-clip:padding-box
}

.guil-radio--button .guil-radio_faux, .guil-radio_button .guil-radio--faux, .guil-radio_button .guil-radio_faux {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    vertical-align:middle
}

.guil-radio--button + .guil-radio_button, .guil-radio_button + .guil-radio--button, .guil-radio_button + .guil-radio_button {
    border-left: 1px solid var(--guil-g-color-border-base-4, #e5e5e5);
    margin:0
}

.guil-radio_button [type=radio] {
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(0 0 0 0);
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position:absolute
}

.guil-radio--button [type=radio]:checked + .guil-radio_faux, .guil-radio--button [type=radio]:checked ~ .guil-radio--faux, .guil-radio--button [type=radio]:checked ~ .guil-radio_faux, .guil-radio_button [type=radio]:checked + .guil-radio--button__label, .guil-radio_button [type=radio]:checked + .guil-radio--faux, .guil-radio_button [type=radio]:checked + .guil-radio_button__label, .guil-radio_button [type=radio]:checked + .guil-radio_faux, .guil-radio_button [type=radio]:checked ~ .guil-radio--faux, .guil-radio_button [type=radio]:checked ~ .guil-radio_faux {
    background-color: #0176d3;
    color:var(--guil-g-color-neutral-base-100, #fff)
}

.guil-radio_button__label {
    background-color:var(--guil-g-color-neutral-base-100, #fff)
}

.guil-radio_button__label:focus, .guil-radio_button__label:hover {
    cursor:pointer
}



html {
    font-size:14px
}



.border-width, .shadow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap:1rem
}

.border-radius {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr var(--sds-g-sizing-9);
    gap:1rem
}

.border-radius [data-value], .border-width [data-value], .shadow [data-value] {
    background: var(--sds-g-color-surface-container-1);
    border-radius: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: .125rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: var(--sds-g-font-scale-neg-3);
    font-family: var(--sds-g-font-family-monospace);
    aspect-ratio:var(--sds-g-ratio-square)
}
