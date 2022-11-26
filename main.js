"use strict";
const utils = require("@iobroker/adapter-core");
const axios = require('axios');
const fs = require('fs');
const tools = require('./lib/tools');
/** @type {number | undefined}*/
let timerRequest;
/** @type {ioBroker.Adapter} */
let adapter;

/**
 * Starts the adapter instance
 * @param {Partial<utils.AdapterOptions>} [options]
 */
function startAdapter(options) {
		name: "tasmoupdate",

		// The ready callback is called when databases are connected and adapter received configuration.
		// start here!
		ready: main, // Main method defined below for readability

		// is called when adapter shuts down - callback has to be called under any circumstances!
		unload: (callback) => {
			try {
				adapter.log.debug('cleaned everything up...');
				clearTimeout(timerRequest);
				callback();
			} catch (e) {
				callback();
			}
		},

		// is called if a subscribed state changes
		stateChange: (id, state) => {
			if (state) {
				// The state was changed
				adapter.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
			} else {
				// The state was deleted
				adapter.log.info(`state ${id} deleted`);
			}
		},

	}));
}
function adapterlog{
	// The adapters config (in the instance object everything under the attribute "native") is accessible via
	// adapter.config:
	adapter.log.info("config ota_de: " + adapter.config.ota_de);
	adapter.log.info("config ota_ir: " + adapter.config.ota_ir);
	adapter.log.info("config ota_minimal: " + adapter.config.ota_minimal);
	adapter.log.info("config ota_sensor: " + adapter.config.ota_sensor);
	adapter.log.info("config latitude: " + adapter.config.latitude);
	adapter.log.info("config longitude: " + adapter.config.longitude);
	adapter.log.info("config globalupdate: " + adapter.config.globalupdate);
	adapter.log.info("config ini_settings: " + adapter.config.ini_settings);
	adapter.log.info("config restart: " + adapter.config.restart);
	adapter.log.info("config setoption0: " + adapter.config.setoption0);
	adapter.log.info("config setoption1: " + adapter.config.setoption1);
	adapter.log.info("config setoption2: " + adapter.config.setoption2);
	adapter.log.info("config setoption3: " + adapter.config.setoption3);
	adapter.log.info("config setoption4: " + adapter.config.setoption4);
	adapter.log.info("config setoption8: " + adapter.config.setoption8);
	adapter.log.info("config setoption10: " + adapter.config.setoption10);
	adapter.log.info("config setoption11: " + adapter.config.setoption11);
	adapter.log.info("config setoption12: " + adapter.config.setoption12);
	adapter.log.info("config setoption13: " + adapter.config.setoption13);
	adapter.log.info("config setoption15: " + adapter.config.setoption15);
	adapter.log.info("config setoption16: " + adapter.config.setoption16);
	adapter.log.info("config setoption17: " + adapter.config.setoption17);
	adapter.log.info("config setoption18: " + adapter.config.setoption18);
	adapter.log.info("config setoption19: " + adapter.config.setoption19);
	adapter.log.info("config setoption20: " + adapter.config.setoption20);
	adapter.log.info("config setoption21: " + adapter.config.setoption21);
	adapter.log.info("config setoption24: " + adapter.config.setoption24);
	adapter.log.info("config setoption26: " + adapter.config.setoption26);
	adapter.log.info("config setoption28: " + adapter.config.setoption28);
	adapter.log.info("config setoption29: " + adapter.config.setoption29);
	adapter.log.info("config setoption30: " + adapter.config.setoption30);
	adapter.log.info("config setoption31: " + adapter.config.setoption31);
	adapter.log.info("config setoption32: " + adapter.config.setoption32);
	adapter.log.info("config setoption33: " + adapter.config.setoption33);
	adapter.log.info("config setoption34: " + adapter.config.setoption34);
	adapter.log.info("config setoption36: " + adapter.config.setoption36);
	adapter.log.info("config setoption38: " + adapter.config.setoption38);
	adapter.log.info("config setoption39: " + adapter.config.setoption39);
	adapter.log.info("config setoption40: " + adapter.config.setoption40);
	adapter.log.info("config setoption41: " + adapter.config.setoption41);
	adapter.log.info("config setoption42: " + adapter.config.setoption42);
	adapter.log.info("config setoption43: " + adapter.config.setoption43);
	adapter.log.info("config setoption44: " + adapter.config.setoption44);
	adapter.log.info("config setoption45: " + adapter.config.setoption45);
	adapter.log.info("config setoption46: " + adapter.config.setoption46);
	adapter.log.info("config setoption51: " + adapter.config.setoption51);
	adapter.log.info("config setoption52: " + adapter.config.setoption52);
	adapter.log.info("config setoption53: " + adapter.config.setoption53);
	adapter.log.info("config setoption54: " + adapter.config.setoption54);
	adapter.log.info("config setoption55: " + adapter.config.setoption55);
	adapter.log.info("config setoption56: " + adapter.config.setoption56);
	adapter.log.info("config setoption57: " + adapter.config.setoption57);
	adapter.log.info("config setoption58: " + adapter.config.setoption58);
	adapter.log.info("config setoption59: " + adapter.config.setoption59);
	adapter.log.info("config setoption60: " + adapter.config.setoption60);
	adapter.log.info("config setoption61: " + adapter.config.setoption61);
	adapter.log.info("config setoption62: " + adapter.config.setoption62);
	adapter.log.info("config setoption63: " + adapter.config.setoption63);
	adapter.log.info("config setoption64: " + adapter.config.setoption64);
	adapter.log.info("config setoption65: " + adapter.config.setoption65);
	adapter.log.info("config setoption66: " + adapter.config.setoption66);
	adapter.log.info("config setoption69: " + adapter.config.setoption69);
	adapter.log.info("config setoption71: " + adapter.config.setoption71);
	adapter.log.info("config setoption72: " + adapter.config.setoption72);
	adapter.log.info("config setoption73: " + adapter.config.setoption73);
	adapter.log.info("config setoption74: " + adapter.config.setoption74);
	adapter.log.info("config setoption75: " + adapter.config.setoption75);
	adapter.log.info("config setoption76: " + adapter.config.setoption76);
	adapter.log.info("config setoption77: " + adapter.config.setoption77);
	adapter.log.info("config setoption78: " + adapter.config.setoption78);
	adapter.log.info("config setoption79: " + adapter.config.setoption79);
	adapter.log.info("config setoption80: " + adapter.config.setoption80);
	adapter.log.info("config setoption81: " + adapter.config.setoption81);
	adapter.log.info("config setoption82: " + adapter.config.setoption82);
	adapter.log.info("config setoption83: " + adapter.config.setoption83);
	adapter.log.info("config setoption84: " + adapter.config.setoption84);
	adapter.log.info("config setoption85: " + adapter.config.setoption85);
	adapter.log.info("config setoption86: " + adapter.config.setoption86);
	adapter.log.info("config setoption87: " + adapter.config.setoption87);
	adapter.log.info("config setoption88: " + adapter.config.setoption88);
	adapter.log.info("config setoption90: " + adapter.config.setoption90);
	adapter.log.info("config setoption93: " + adapter.config.setoption93);
	adapter.log.info("config setoption94: " + adapter.config.setoption94);
	adapter.log.info("config setoption97: " + adapter.config.setoption97);
	adapter.log.info("config setoption98: " + adapter.config.setoption98);
	adapter.log.info("config setoption99: " + adapter.config.setoption99);
	adapter.log.info("config setoption101: " + adapter.config.setoption101);
	adapter.log.info("config setoption103: " + adapter.config.setoption103);
	adapter.log.info("config setoption104: " + adapter.config.setoption104);
	adapter.log.info("config setoption107: " + adapter.config.setoption107);
	adapter.log.info("config setoption108: " + adapter.config.setoption108);
	adapter.log.info("config setoption109: " + adapter.config.setoption109);
	adapter.log.info("config setoption113: " + adapter.config.setoption113);
	adapter.log.info("config setoption114: " + adapter.config.setoption114);
	adapter.log.info("config setoption115: " + adapter.config.setoption115);
	adapter.log.info("config setoption116: " + adapter.config.setoption116);
	adapter.log.info("config setoption117: " + adapter.config.setoption117);
	adapter.log.info("config setoption123: " + adapter.config.setoption123);
	adapter.log.info("config setoption124: " + adapter.config.setoption124);
	adapter.log.info("config setoption125: " + adapter.config.setoption125);
	adapter.log.info("config setoption126: " + adapter.config.setoption126);
	adapter.log.info("config setoption127: " + adapter.config.setoption127);
	adapter.log.info("config setoption128: " + adapter.config.setoption128);
	adapter.log.info("config setoption129: " + adapter.config.setoption129);
	adapter.log.info("config setoption130: " + adapter.config.setoption130);
	adapter.log.info("config setoption131: " + adapter.config.setoption131);
	adapter.log.info("config setoption132: " + adapter.config.setoption132);
	adapter.log.info("config setoption134: " + adapter.config.setoption134);
	adapter.log.info("config setoption135: " + adapter.config.setoption135);
	adapter.log.info("config setoption136: " + adapter.config.setoption136);
	adapter.log.info("config setoption137: " + adapter.config.setoption137);
	adapter.log.info("config setoption138: " + adapter.config.setoption138);
	adapter.log.info("config setoption139: " + adapter.config.setoption139);
	adapter.log.info("config setoption140: " + adapter.config.setoption140);
	adapter.log.info("config setoption141: " + adapter.config.setoption141);
	adapter.log.info("config setoption142: " + adapter.config.setoption142);
	adapter.log.info("config setoption143: " + adapter.config.setoption143);
	adapter.log.info("config setoption144: " + adapter.config.setoption144);
	adapter.log.info("config setoption146: " + adapter.config.setoption146);
	adapter.log.info("config setoption147: " + adapter.config.setoption147);
	adapter.log.info("config setoption148: " + adapter.config.setoption148);
}
function createobjects{
	adapter.log.info("config ota_de: " + adapter.config.ota_de);
	await adapter.setObjectNotExistsAsync("config ota_de", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config ota_ir: " + adapter.config.ota_ir);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config ota_minimal: " + adapter.config.ota_minimal);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config ota_sensor: " + adapter.config.ota_sensor);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config latitude: " + adapter.config.latitude);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config longitude: " + adapter.config.longitude);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config globalupdate: " + adapter.config.globalupdate);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config ini_settings: " + adapter.config.ini_settings);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config restart: " + adapter.config.restart);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption0: " + adapter.config.setoption0);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption1: " + adapter.config.setoption1);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption2: " + adapter.config.setoption2);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption3: " + adapter.config.setoption3);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption4: " + adapter.config.setoption4);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption8: " + adapter.config.setoption8);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption10: " + adapter.config.setoption10);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption11: " + adapter.config.setoption11);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption12: " + adapter.config.setoption12);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption13: " + adapter.config.setoption13);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption15: " + adapter.config.setoption15);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption16: " + adapter.config.setoption16);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption17: " + adapter.config.setoption17);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption18: " + adapter.config.setoption18);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption19: " + adapter.config.setoption19);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption20: " + adapter.config.setoption20);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption21: " + adapter.config.setoption21);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption24: " + adapter.config.setoption24);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption26: " + adapter.config.setoption26);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption28: " + adapter.config.setoption28);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption29: " + adapter.config.setoption29);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption30: " + adapter.config.setoption30);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption31: " + adapter.config.setoption31);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption32: " + adapter.config.setoption32);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption33: " + adapter.config.setoption33);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption34: " + adapter.config.setoption34);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption36: " + adapter.config.setoption36);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption38: " + adapter.config.setoption38);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption39: " + adapter.config.setoption39);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption40: " + adapter.config.setoption40);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption41: " + adapter.config.setoption41);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption42: " + adapter.config.setoption42);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption43: " + adapter.config.setoption43);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption44: " + adapter.config.setoption44);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption45: " + adapter.config.setoption45);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption46: " + adapter.config.setoption46);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption51: " + adapter.config.setoption51);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption52: " + adapter.config.setoption52);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption53: " + adapter.config.setoption53);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption54: " + adapter.config.setoption54);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption55: " + adapter.config.setoption55);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption56: " + adapter.config.setoption56);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption57: " + adapter.config.setoption57);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption58: " + adapter.config.setoption58);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption59: " + adapter.config.setoption59);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption60: " + adapter.config.setoption60);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption61: " + adapter.config.setoption61);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption62: " + adapter.config.setoption62);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption63: " + adapter.config.setoption63);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption64: " + adapter.config.setoption64);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption65: " + adapter.config.setoption65);

	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption66: " + adapter.config.setoption66);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption69: " + adapter.config.setoption69);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption71: " + adapter.config.setoption71);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption72: " + adapter.config.setoption72);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption73: " + adapter.config.setoption73);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption74: " + adapter.config.setoption74);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption75: " + adapter.config.setoption75);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption76: " + adapter.config.setoption76);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption77: " + adapter.config.setoption77);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption78: " + adapter.config.setoption78);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption79: " + adapter.config.setoption79);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption80: " + adapter.config.setoption80);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption81: " + adapter.config.setoption81);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption82: " + adapter.config.setoption82);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption83: " + adapter.config.setoption83);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption84: " + adapter.config.setoption84);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption85: " + adapter.config.setoption85);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption86: " + adapter.config.setoption86);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption87: " + adapter.config.setoption87);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption88: " + adapter.config.setoption88);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption90: " + adapter.config.setoption90);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption93: " + adapter.config.setoption93);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption94: " + adapter.config.setoption94);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption97: " + adapter.config.setoption97);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption98: " + adapter.config.setoption98);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption99: " + adapter.config.setoption99);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption101: " + adapter.config.setoption101);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption103: " + adapter.config.setoption103);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption104: " + adapter.config.setoption104);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption107: " + adapter.config.setoption107);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption108: " + adapter.config.setoption108);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption109: " + adapter.config.setoption109);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption113: " + adapter.config.setoption113);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption114: " + adapter.config.setoption114);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption115: " + adapter.config.setoption115);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption116: " + adapter.config.setoption116);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption117: " + adapter.config.setoption117);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption123: " + adapter.config.setoption123);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});

	adapter.log.info("config setoption124: " + adapter.config.setoption124);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption125: " + adapter.config.setoption125);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption126: " + adapter.config.setoption126);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption127: " + adapter.config.setoption127);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption128: " + adapter.config.setoption128);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption129: " + adapter.config.setoption129);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption130: " + adapter.config.setoption130);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption131: " + adapter.config.setoption131);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption132: " + adapter.config.setoption132);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption134: " + adapter.config.setoption134);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption135: " + adapter.config.setoption135);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption136: " + adapter.config.setoption136);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption137: " + adapter.config.setoption137);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption138: " + adapter.config.setoption138);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption139: " + adapter.config.setoption139);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption140: " + adapter.config.setoption140);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption141: " + adapter.config.setoption141);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption142: " + adapter.config.setoption142);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption143: " + adapter.config.setoption143);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption144: " + adapter.config.setoption144);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption146: " + adapter.config.setoption146
		await adapter.setObjectNotExistsAsync("testVariable", {
			type: "state",
			common: {
				name: "testVariable",
				type: "boolean",
				role: "indicator",
				read: true,
				write: true,
			},
			native: {},
		});
	adapter.log.info("config setoption147: " + adapter.config.setoption147);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	adapter.log.info("config setoption148: " + adapter.config.setoption148);
	await adapter.setObjectNotExistsAsync("testVariable", {
		type: "state",
		common: {
			name: "testVariable",
			type: "boolean",
			role: "indicator",
			read: true,
			write: true,
		},
		native: {},
	});
	
}
function allsubscripe{
	adapter.subscribeStates("testVariable");
}
async function main() {
	adapterlog();
	// Reset the connection indicator during startup
	await adapter.setStateAsync("info.connection", false, true);
	createobjects();
	allsubscripe();
	await adapter.setStateAsync("info.connection", true, true);
		//** Code zum Sortieren* /
	var posKomma, ListeSonoffs, Schleifenende, IPAdress;


	createState("javascript.0.Tasmota.Grundeinstellungen_setzen", false, async function () {
	});
	on({ id: "javascript.0.Tasmota.Grundeinstellungen_setzen"/*javascript.0.Tasmota.Grundeinstellungen_setzen*/, val: true }, async function (obj) {
		var value = obj.state.val;
		var oldValue = obj.oldState.val;
		// Geäteliste auslesen und nach Komma separienen
		posKomma = 0;
		ListeSonoffs = String(getState("sonoff.0.info.connection").val) + ',';
		Schleifenende = false;
		while (Schleifenende == false) {
			// Suche nächstes Komma in der Sonoff-Liste
			posKomma = ListeSonoffs.indexOf(',') + 1;
			if (posKomma == 0) {
				// kein Komma mehr gefunden
				Schleifenende = true;
			} else {
				// bis zum Zeichen vor dem Komma kopieren
				// IP Nummer des Tasmotas auslesen
				IPAdress = ['sonoff.0.', ListeSonoffs.slice(0, parseFloat(posKomma) - 1), '.INFO.Info2_IPAddress'].join('');
				ListeSonoffs = ListeSonoffs.slice(((parseFloat(posKomma) + 1) - 1), ListeSonoffs.length);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=Setoption26 0'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=Setoption26 0'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=Setoption56 1'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=Setoption56 1'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=latitude ', getState("javascript.0.Tasmota.versionstyp.latitude").val].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=latitude ', getState("javascript.0.Tasmota.versionstyp.latitude").val].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=longitude ', getState("javascript.0.Tasmota.versionstyp.longitude").val].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=longitude ', getState("javascript.0.Tasmota.versionstyp.longitude").val].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=timezone 99'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=timezone 99'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=ledstate'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=ledstate'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=Setoption106'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=Setoption106'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=Setoption20'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=Setoption20'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=restart'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=restart'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=Otaurl'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=Otaurl'].join('')));
				await wait(200);
				try {
					require("request")((['http://', getState(IPAdress).val, '/cm?cmnd=Upgrade'].join(''))).on("error", function (e) { console.error(e); });
				} catch (e) { console.error(e); }
				console.log("request: " + (['http://', getState(IPAdress).val, '/cm?cmnd=Upgrade'].join('')));
				// Logdatei erstellen
				console.log((String(getState(IPAdress).val) + 'wurde auf Tasmota eingestellt'));
			}
		}
		setStateDelayed("javascript.0.Tasmota.Grundeinstellungen_setzen"/*javascript.0.Tasmota.Grundeinstellungen_setzen*/, false, true, 20000, false);
	});



	/*
		setState examples
		you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
	*/
	// the variable testVariable is set to true as command (ack=false)
	await adapter.setStateAsync("testVariable", true);

	// same thing, but the value is flagged "ack"
	// ack should be always set to true if the value is received from or acknowledged from the target system
	await adapter.setStateAsync("testVariable", { val: true, ack: true });

	// same thing, but the state is deleted after 30s (getState will return null afterwards)
	await adapter.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });

	// examples for the checkPassword/checkGroup functions
	adapter.checkPassword("admin", "iobroker", (res) => {
		adapter.log.info("check user admin pw iobroker: " + res);
	});

	adapter.checkGroup("admin", "admin", (res) => {
		adapter.log.info("check group user admin group admin: " + res);
	});
}

if (require.main !== module) {
	// Export startAdapter in compact mode
	module.exports = startAdapter;
} else {
	// otherwise start the instance directly
	startAdapter();
}