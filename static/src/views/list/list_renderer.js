/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { ListRenderer } from "@web/views/list/list_renderer";

patch(ListRenderer.prototype, "web_tree_editable_form_open", {
    onDblClickCapture(record, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.props.openRecord(record);
    }
});

// This is needed for the overriden template to be applied
ListRenderer.recordRowTemplate = "web.ListRenderer.RecordRow";
