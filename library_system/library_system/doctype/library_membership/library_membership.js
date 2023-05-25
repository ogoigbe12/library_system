// Copyright (c) 2023, samuel ogoigbe and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Membership", {
	refresh(frm) {
        frm.add_custom_button('Create Transaction', () => {
            frappe.new_doc('Library Transaction', {
                library_membership: frm.doc.name
            })
        })

	},
});
