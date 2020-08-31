class wsmng {
		static send(msg) {
			window.InputEvent = window.Event || window.InputEvent;

	  		var event = new InputEvent('input', {
	   			bubbles: true
	  		});

	  		var textbox = document.querySelector('#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text');

	  		textbox.textContent = msg;
	  		textbox.dispatchEvent(event);

	  		document.querySelector("#main > footer > div._3ee1T._1LkpH.copyable-area > div:nth-child(3) > button").click();
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
