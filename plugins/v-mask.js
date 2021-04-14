/**
 * TODO move plugin statement to local component
 * remove this file after transfer locally
 */

import Vue from 'vue';

// As a plugin
// import VueMask from 'v-mask';

import {VueMaskDirective} from 'v-mask';

Vue.directive('mask', VueMaskDirective);