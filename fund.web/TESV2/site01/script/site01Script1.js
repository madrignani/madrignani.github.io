(function($) {

	$.fn.navList = function() {

		var	$this = $(this);
		$a = $this.find('a'),
		b = [];
	
			$a.each(function() {
				var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
				'class="link depth-' + indent + '"' +
				( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
				( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +'<span class="indent-' + indent + '"></span>' + $this.text() +'</a>');
			});
		return b.join('');
	};

/*#################################################################*/

	$.fn.panel = function(userConfig) {

		var	$this = $(this),
			$body = $('body'),
			$window = $(window),
			id = $this.attr('id'),
			config;
			
		config = $.extend({
			side: null,
		}, userConfig);

		$this._hide = function(event) {
			if (!config.target.hasClass(config.visibleClass))
				return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			config.target.removeClass(config.visibleClass);
			window.setTimeout(function() {
				if (config.resetScroll)
					$this.scrollTop(0);
				if (config.resetForms)
					$this.find('form').each(function(){
						this.reset();
					});
			}, config.delay);
		};
			
		$this.on('touchstart', function(event) {
			$this.touchPosX = event.originalEvent.touches[0].pageX;
			$this.touchPosY = event.originalEvent.touches[0].pageY;
		})

		$this.on('touchmove', function(event) {
			if ($this.touchPosX === null ||	$this.touchPosY === null)
				return;
			var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
			diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
			th = $this.outerHeight(),
			ts = ($this.get(0).scrollHeight - $this.scrollTop());
			if (config.hideOnSwipe) {
				var result = false,
				boundary = 20,
				delta = 50;
					switch (config.side) {
						case 'left':
							result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
							break;
						case 'right':
							result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
							break;
						case 'top':
							result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
							break;
						case 'bottom':
							result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
							break;
						default:
							break;
					}
				if (result) {
					$this.touchPosX = null;
					$this.touchPosY = null;
					$this._hide();
					return false;
				}
			}
			if (($this.scrollTop() < 0 && diffY < 0) || (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {
				event.preventDefault();
				event.stopPropagation();
			}
		});

		$this.on('click touchend touchstart touchmove', function(event) {
			event.stopPropagation();
		});
			
		$this.on('click', 'a[href="#' + id + '"]', function(event) {
			event.preventDefault();
			event.stopPropagation();
			config.target.removeClass(config.visibleClass);
		});
				
		$body.on('click touchend', function(event) {
			$this._hide(event);
		});

		$body.on('click', 'a[href="#' + id + '"]', function(event) {
			event.preventDefault();
			event.stopPropagation();
			config.target.toggleClass(config.visibleClass);
		});

		return $this;
	};

/*#################################################################*/

	$.fn.placeholder = function() {

		if (typeof (document.createElement('input')).placeholder != 'undefined')
			return $(this);
		if (this.length == 0)
			return $this;
		if (this.length > 1) {
			for (var i=0; i < this.length; i++){
				$(this[i]).placeholder();
			}
			return $this;
		}
		
		var $this = $(this);
		$this.find('input[type=text],textarea')

		.each(function() {
			var i = $(this);
			if (i.val() == ''|| i.val() == i.attr('placeholder'))
				i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		});			
		
		return $this;
	};

/*#################################################################*/

})

(jQuery);