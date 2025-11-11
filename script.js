((d, w=self, s=d.createElement('style'), S=(s,v)=>w[s]==void 0&&Object.defineProperty(w,s,{value:v}), R=(p=location.pathname)=>(p=='/'||p==L0)&&location.replace(p==L0&&R.last==L1?L2:L1), L0='/for_kids', L1='/for_kids/cartoon', L2='/for_kids/movies') => {
	(e=>history.pushState=function(){R.last=location.pathname;return R(arguments[2])||e.apply(this,arguments)})(history.pushState);R();
	new MutationObserver(e=>{/\/video-?\d+_\d+/.test(location.pathname) && d.querySelector('[data-testid=video_page_playlist_expand_videos]')?.click()}).observe(d.documentElement,{childList:1,subtree:1});
	//d.addEventListener('mousedown',e=>(e=e.target.closest('a'))?.pathname=='/'&&(e.href=L0));
	d.firstElementChild.append(s);
	s.textContent = `
#page_header {
	padding: 0 20px;
}
#video_header_search,.SearchHeaderForm {
	position: fixed;
	width: min(600px, 80vw);
	left: calc(50vw - min(300px, 40vw));
	top: 8px;
}
[id="/for_kids/interactives"], [id="/for_kids/show"],
#side_bar, .VideoLayout__aside,
.PortalNavigation, #top_video_actions_layer_place, .HeaderNav__item--acts,
[class*=VideoHeaderLayout__container]>:is(:first-child,:last-child) button,
[class*=InternalTwoColumnLayoutColumn] section>section,
[class*=InternalTwoColumnLayoutColumn]+[class*=InternalTwoColumnLayoutColumn]:not(:has([class*=laylist])){
	display: none;
}`.replaceAll(';','!important;');
	S('noAdsAtAll',1);
	S('AdmanHTML',0);
})(document)
