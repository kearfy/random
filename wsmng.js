class wsmng {
		static send(msg) {
			window.InputEvent = window.Event || window.InputEvent;

	  		var event = new InputEvent('input', {
	   			bubbles: true
	  		});

	  		var textbox = document.querySelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text")

	  		textbox.textContent = msg;
	  		textbox.dispatchEvent(event);

	  		document.querySelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div._3HQNh._1Ae7k > button").click();
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
