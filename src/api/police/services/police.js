'use strict';

/**
 * police service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::police.police');
