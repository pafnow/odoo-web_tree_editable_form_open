/* Copyright 2020 Pafnow */

odoo.define('web_tree_editable_form_open', function (require) {
    "use strict";

    var core = require('web.core');
    var ListRenderer = require('web.ListRenderer');
    var _t = core._t;

    ListRenderer.include({
        events: _.extend({}, ListRenderer.prototype.events, {
            'auxclick tbody tr': '_onRowAuxClicked',
        }),
        _onRowAuxClicked: function(ev) {
            if (ev.which == 2) { // Middle-Click
                ev.preventDefault();
                let editable_bak = this.editable;
                this.editable = false;
                this._onRowClicked(ev);
                this.editable = editable_bak;
            }
        },
    });
});
