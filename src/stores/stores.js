import { writable } from 'svelte/store';
import { stores } from '@sapper/app';

//my derived session
export const session = (() => {
	const { subscribe, set, update } = writable(false);
	let sapSession;
	return {
		init() {
			sapSession = stores().session;
			sapSession.subscribe((val) => {
				set(val);
			});
		},
		set(val) {
			sapSession.set(val);
		},
		subscribe,
		unsubscribe() {
			sapSession();
		}
	};
})();
