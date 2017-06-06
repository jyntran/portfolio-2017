/* esline-env mocha*/

import { Meteor } from 'meteor/meteor'
import { assert } from 'meteor/practicalmeteor:chai'
import { resetDatabase } from 'meteor/xolvio:cleaner'

import { Projects } from './projects.js'

Factory.define('project', Projects, {
	title: function() {
		return faker.commerce.productName()
		},
	description: function() {
		return faker.lorem.sentence()
		},
	thumb: function() {
		return faker.image.imageUrl()
		},
	live: function() {
		return faker.internet.url()
		},
	source: function() {
		return faker.internet.url()
		},
	created: function() {
		return new Date()
		}
})

if (Meteor.isServer) {
	describe('Projects', function() {
		beforeEach(function() {
			resetDatabase()
		})
		it('checks that a project is created', function() {
			const project = Factory.create('project')
			console.log(project)
			assert.isObject(project)
			assert.isDefined(project._id)
			assert.isDefined(project.title)
			assert.isDefined(project.description)
			assert.isDefined(project.thumb)
			assert.isDefined(project.live)
			assert.isDefined(project.source)
			assert.isDefined(project.created)
		})
		it('checks that a project is updated', function() {
			// todo
		})
		it('checks that a project is deleted', function() {
			// todo	
		})
	})
}
