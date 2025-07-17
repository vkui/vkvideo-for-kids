((d, w=self, s=d.createElement('style'), S=(s,v)=>w[s]==void 0&&Object.defineProperty(w,s,{value:v})) => {
	location.pathname=='/'&&location.replace('/for_kids');
	d.addEventListener('mousedown',e=>(e=e.target.closest('a'))?.pathname=='/'&&(e.href='/for_kids'));
	d.firstElementChild.append(s);
	s.textContent = `
#page_header {
	padding: 0 20px;
}
#video_header_search,.SearchHeaderForm {
	position: fixed;
	width: min(600px, 80vw);
	left: calc(50vw - min(300px, 40vw));
	top: -2px;
}
[id="/for_kids/interactives"], [id="/for_kids/show"],
#side_bar, .VideoLayout__aside,
.PortalNavigation, #top_video_actions_layer_place, .HeaderNav__item--acts,
[class*=VideoHeaderLayout__container]>:is(:first-child,:last-child) button,
.vkuiInternalTwoColumnLayoutColumn section>section{
	display: none;
}`.replaceAll(';','!important;');
	S('noAdsAtAll',1);
	S('AdmanHTML',0);
})(document)
