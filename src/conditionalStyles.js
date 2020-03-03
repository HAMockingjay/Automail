let moreStyle = create("style");
moreStyle.id = "conditional-aniscripts-styles";
moreStyle.type = "text/css";

function initCSS(){
moreStyle.textContent = "";

let aliasFlag = false;

if(useScripts.shortRomaji){
	shortRomaji.forEach(createAlias);
	aliasFlag = true;
}

const titleAliases = JSON.parse(localStorage.getItem("titleAliases"));
if(titleAliases){
	aliasFlag = true;
	titleAliases.forEach(createAlias);
}

if(aliasFlag){
	moreStyle.textContent += `
a.title::before
,.quick-search-results .el-select-dropdown__item a > span::before{
	visibility: visible;
	line-height: 1.15;
	margin-right: 2px;
}
.medialist.table .title > a::before{
	visibility: visible;
	font-size: 1.5rem;
	margin-right: 2px;
}
.medialist.compact .title > a::before
,.medialist.cards .title > a::before
,.home .status > a.title::before
,.media-embed .title::before{
	visibility: visible;
	font-size: 1.3rem;
	margin-right: 2px;
}
.role-card a.content > .name::before{
	visibility: visible;
	font-size: 1.2rem;
}
.overlay > a.title::before
,.media-preview-card a.title::before{
	visibility: visible;
	font-size: 1.4rem;
	line-height: 1.15;
}
.role-card a.content > .name{
	line-height: 1.3!important;
}`;
}
m4_include(css/CSSfavs.js)
if(useScripts.CSScompactBrowse){
	moreStyle.textContent += `
m4_include(css/compactBrowse.css)
	`;
}
if(useScripts.CSSprofileClutter){
	moreStyle.textContent += `
.overview .list-stats > .footer{
	display: none;
}
.overview > .section > .desktop:nth-child(2){
	display: none;
}
.overview > .section > .desktop:nth-child(3){
	display: none;
}
.overview > .section > .desktop.favourites{
	display: inherit;
}
	`;
}
if(useScripts.CSSbannerShadow){
	moreStyle.textContent += `
.banner .shadow{
	display: none;
}
	`;
}
if(useScripts.betterListPreview && !(window.screen.availWidth && window.screen.availWidth <= 1040)){
	moreStyle.textContent += `
.home{
	grid-template-columns: auto 545px!important;
}
@media(min-width: 1040px) and (max-width: 1540px){
	.page-content > .container{
		max-width: 1300px;
	}
	.list-preview{
		gap: 15px!important;
	}
	.home{
		grid-template-columns: auto 525px!important;
	}
}
#hohListPreview + .list-previews .list-preview-wrap{
	display: none;
}
#hohListPreview + .list-previews .list-preview-wrap:last-child{
	display: block;
}
	`;
}
if(useScripts.CSSgreenManga){
	moreStyle.textContent += `
m4_include(css/greenManga.css)
	`;
}
if(useScripts.CSSexpandFeedFilters && (!useScripts.mobileFriendly)){
	moreStyle.textContent += `
m4_include(css/expandFeedFilters.css)
	`;
}
if(useScripts.showRecVotes){
	moreStyle.textContent += `
.recommendation-card .rating-wrap{
	opacity: 1;
}
`
}
if(useScripts.CSSverticalNav && (!useScripts.mobileFriendly)){
	moreStyle.textContent += `
m4_include(css/verticalNav.css)
`;
	if(useScripts.rightToLeft || useScripts.rightSideNavbar){
		moreStyle.textContent += `
#app{
	padding-left: 5px!important;
	padding-right: 65px;
}
#app div#nav.nav{
	left: inherit !important;
	right: 0px;
}
#app div#nav.nav .links{
	border-left: none;
	border-right: 1px solid hsla(0,0%,93.3%,.16);
}
.subMenuContainer{
	margin-left: -172px;
}
.subMenuContainer > .link{
	margin-left: 86px;
}
.hohSubMenu{
	left: 0px;
	width: 86px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
}
		`;
	}
}
if(useScripts.CSSdecimalPoint){
	moreStyle.textContent += `
.medialist.POINT_10_DECIMAL .score[score="10"]::after,
.medialist.POINT_10_DECIMAL .score[score="9"]::after,
.medialist.POINT_10_DECIMAL .score[score="8"]::after,
.medialist.POINT_10_DECIMAL .score[score="7"]::after,
.medialist.POINT_10_DECIMAL .score[score="6"]::after,
.medialist.POINT_10_DECIMAL .score[score="5"]::after,
.medialist.POINT_10_DECIMAL .score[score="4"]::after,
.medialist.POINT_10_DECIMAL .score[score="3"]::after,
.medialist.POINT_10_DECIMAL .score[score="2"]::after,
.medialist.POINT_10_DECIMAL .score[score="1"]::after{
	margin-left: -4px;
	content: ".0";
}
	`;
}
if(useScripts.CSSdarkDropdown){
	moreStyle.textContent += `
.site-theme-dark .quick-search.el-select .el-input.el-input__inner,
.site-theme-dark .quick-search .el-select .el-input.is-focus .el-input__inner,
.site-theme-dark .el-select-dropdown,
.site-theme-dark .el-dropdown-menu,
.site-theme-dark .el-dropdown-menu__item--divided::before{
	background: rgba(17, 22, 29);
}
.site-theme-dark .el-select-group__wrap:not(:last-of-type)::after{
	background: rgba(17, 22, 29);
}
.site-theme-dark .el-popper[x-placement^="bottom"] .popper__arrow,
.site-theme-dark .el-popper[x-placement^="bottom"] .popper__arrow::after{
	border-bottom-color: rgba(17, 22, 29);
	opacity: 1;
}
.site-theme-dark .el-popper[x-placement^="top"] .popper__arrow,
.site-theme-dark .el-popper[x-placement^="top"] .popper__arrow::after{
	border-top-color: rgba(17, 22, 29);
	opacity: 1;
}
	`;
}
if(useScripts.CSSsmileyScore){
	moreStyle.textContent += `
.fa-frown{
	color: red;
}

.fa-smile{
	color: green;
}
	`;
}
if(useScripts.limitProgress8){
	moreStyle.textContent += `
.home:not(.full-width) .media-preview-card:nth-child(n+9){
	display:none!important;
}
	`;
}
else if(useScripts.limitProgress10){
	moreStyle.textContent += `
.home:not(.full-width) .media-preview-card:nth-child(n+11){
	display:none!important;
}
	`;
}
if(parseInt(useScripts.forumPreviewNumber) === 0){
	moreStyle.textContent += `
.home .recent-threads{
	display: none!important;
}
	`;
}
if(useScripts.CSSmobileTags){
	moreStyle.textContent += `
@media(max-width: 760px){
	.media .sidebar .tags{
		display: inline;
	}
	.media .sidebar .tags .tag{
		display: inline-block;
		margin-right: 2px;
	}
	.media .sidebar .tags .tag .rank{
		display: inline;
	}
	.media .sidebar .tags .tag .vote-dropdown .el-dropdown-link{
		display: inline;
	}
	.media .sidebar .tags .add-icon{
		opacity: 1;
	}
}
	`;
}
if(useScripts.SFWmode){
	moreStyle.textContent += `
m4_include(css/SFWmode.css)
	`;
	if(useScripts.CSSverticalNav){
		moreStyle.textContent += `
#nav .link[href*="/animelist"]{
	visibility: hidden;
}
#nav .link[href*="/animelist"]::after{
	content: "View List";
	visibility: visible;
	left: 0;
	right: 0;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
}
#nav .link[href*="/animelist"]::before{
	visibility: visible;
}
#nav .link[href*="/mangalist"]{
	visibility: hidden;
}
#nav .link[href*="/mangalist"]::after{
	content: "Read List";
	visibility: visible;
	left: 0;
	right: 0;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
}
#nav .link[href*="/mangalist"]::before{
	visibility: visible;
}`;
	}
}
if(useScripts.cleanSocial){
	moreStyle.textContent += `
.social .activity-feed + div{
	display: flex;
	flex-direction: column;
}
.social .activity-feed + div > div:first-child{
	order: 2;
	margin-top: 25px;
}`
}
if(useScripts.rightToLeft){
	moreStyle.textContent += `
m4_include(css/rightToLeft.css)
	`
}
if(useScripts.infoTable){
	moreStyle.textContent += `
.media-page-unscoped > .content.container{
	grid-template-columns: 215px auto;
}
.media-page-unscoped .sidebar > .data{
	padding: 15px;
}
.media-page-unscoped .data-set,
.media-page-unscoped .data-set #hohMALserialization{
	display: inline-block;
	width: 100%;
	padding-bottom: 9px!important;
	padding-top: 4px;
}
.media-page-unscoped .data-set ~ .data-set{
	border-top-style: solid;
	border-top-width: 1px;
	border-top-color: rgb(var(--color-background));
}
.media-page-unscoped .data-set .type{
	display: inline;
}
.media-page-unscoped .data-set .value{
	display: inline;
	float: right;
	margin-top: 2px;
}`
}
};initCSS();

documentHead.appendChild(moreStyle);
let customStyle = create("style");
let currentUserCSS = "";
customStyle.id = "customCSS-aniscripts-styles";
customStyle.type = "text/css";
documentHead.appendChild(customStyle);


let aliases = new Map();
(
	JSON.parse(
		localStorage.getItem("titleAliases")
	) || []
).concat(
	shortRomaji
).forEach(alias => {
	let matches = alias[0].match(/^\/(anime|manga)\/(\d+)\/$/);
	if(matches){
		aliases.set(parseInt(matches[2]),alias[1])
	}
});

