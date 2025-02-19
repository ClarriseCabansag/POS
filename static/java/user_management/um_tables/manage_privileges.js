let toolbar3 = document.getElementById("addPrivilegeButton");

new DataTable("#manage_user_privileges_table", {
  layout: {
    top9Start: {
      pageLength: {
        menu: [10, 25, 50, 100],
      },
    },
    top9End: {
      search: {
        placeholder: "Search...",
      },
    },
    bottomEnd: {
      paging: {
        className: "paging_custom",
        buttons: 4,
      },
    },

    topStart: {
      buttons: [
        {
          extend: "copy",
          className: "custom_button",
          text: "Copy",
        },
        {
          extend: "csv",
          className: "custom_button",
          text: "CSV",
        },
        {
          extend: "excel",
          className: "custom_button",
          text: "Excel",
        },
        {
          extend: "pdf",
          className: "custom_button",
          text: "PDF",
        },
        {
          extend: "print",
          className: "custom_button",
          text: "Print",
        },
      ],
    },
    topEnd: toolbar3,
  },
  language: {
    lengthMenu: "Show _MENU_ entries per page",
    search: "Filter:",
  },
});
