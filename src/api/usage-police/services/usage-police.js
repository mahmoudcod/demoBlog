'use strict';

/**
 * usage-police service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usage-police.usage-police');
