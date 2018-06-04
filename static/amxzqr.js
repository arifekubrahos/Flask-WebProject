(function(){
	// no head
  if (!document.head) { return; }
	// is preview mode
	if ((window.onerror||'').indexOf('return true') !== -1) { return; }
	// go
	var style = document.createElement('style');
	style.type = 'text/css';
	document.head.appendChild(style);

  var s = document.createElement('script');
  s.async = true
  s.onload = function() {

    var wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
		twttr.widgets.createFollowButton('rikschennink', wrapper, { showCount:false, size:'large' });

    setTimeout(function() { wrapper.classList.add('twitter-follow-reveal'); }, 1000);

  };
  document.head.appendChild(s);

}());