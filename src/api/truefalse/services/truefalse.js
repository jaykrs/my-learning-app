'use strict';

/**
 * truefalse service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::truefalse.truefalse');
