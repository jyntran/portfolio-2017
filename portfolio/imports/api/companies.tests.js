/* esline-env mocha*/

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import { Companies } from './companies.js';

if (Meteor.isServer) {
	describe('Companies', () => {
	});
}
