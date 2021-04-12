class wsmng {
		static send(msg) {
			window.InputEvent = window.Event || window.InputEvent;

	  		var event = new InputEvent('input', {
	   			bubbles: true
	  		});

	  		var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

	  		textbox.textContent = msg;
	  		textbox.dispatchEvent(event);

	  		document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button").click();
		}

		static start(msg, interval, amount = false, timeout = false) {
			interval = (interval < 1 ? 1 : interval);
			var counter = 0;
			if (!amount) {
				var bomber = setInterval(() => {
					this.send(msg);
				}, interval);
				
				if (!timeout) {
					return bomber	
				} else {
					setTimeout(function() {
						clearInterval(bomber);
						console.log('Finished after ' + (timeout / 1000) + ' seconds');
					}, timeout);
				}
			} else {
				var bomber = setInterval(() => {
					this.send(msg);
					counter += 1;
					if (counter === amount) {
						clearInterval(bomber);
						console.log('Finished after ' + amount + ' messages');
					}
				}, interval);
			}
		}

		static stop(interval) {
			clearInterval(interval);
		}
	}
