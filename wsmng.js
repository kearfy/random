class wsmng {
	static send(msg) {
		window.InputEvent = window.Event || window.InputEvent;

  		var event = new InputEvent('input', {
   			bubbles: true
  		});

  		var textbox = document.querySelector('div._2S1VP');

  		textbox.textContent = msg;
  		textbox.dispatchEvent(event);

  		document.querySelector("button._35EW6").click();
	}

	static start(msg, interval, amount = false) {
		interval = (interval < 1 ? 1 : interval);
		var counter = 0;
		if (!amount) {
			return setInterval(() => {
				this.send(msg);	
			}, interval);
		} else {
			var bomber = setInterval(() => {
				this.send(msg);
				counter += 1;
				if (counter === amount) {
					clearInterval(bomber);
					console.log('finished after ' + amount + ' messages');
				}
			}, interval);
		}
	}

	static stop(interval) {
		clearInterval(interval);
	}
}