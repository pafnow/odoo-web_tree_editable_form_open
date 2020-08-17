/* Copyright 2020 Pafnow */

odoo.define('web_tree_editable_form_open', function (require) {
    "use strict";

    var core = require('web.core');
    var ListRenderer = require('web.ListRenderer');
    var _t = core._t;

    ListRenderer.include({
        events: _.extend({}, ListRenderer.prototype.events, {
            'mouseup tbody tr': '_onRowDoubleClicked',
        }),
        _onRowDoubleClicked: function(ev) {
            if (ev.which == 1 && ev.originalEvent.detail === 2) { // Double Left Click
                ev.preventDefault();

                if (!ev.target.closest('.o_list_record_selector') && !$(ev.target).prop('special_click')) {
                    var id = $(ev.currentTarget).data('id');
                    if (id) {
                        this.trigger_up('open_record', {
                            id: id,
                            mode: 'edit',
                            target: ev.target
                        });
                    }
                }
            }
        },
    });
});
