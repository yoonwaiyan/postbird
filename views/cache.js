exports["_loader"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/_loader.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (cancel, message) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/_loader.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/_loader.jade" ));
buf.push("\n<div class=\"app-loader\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/_loader.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = message) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "views/_loader.jade" ));
buf.push("<small>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("Please wait");
jade_debug.shift();
jade_debug.shift();
buf.push("</small>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "views/_loader.jade" ));
if ( cancel)
{
jade_debug.unshift(new jade.DebugItem( 5, "views/_loader.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "views/_loader.jade" ));
buf.push("<a class=\"cancel-btn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"cancel" in locals_for_with?locals_for_with.cancel:typeof cancel!=="undefined"?cancel:undefined,"message" in locals_for_with?locals_for_with.message:typeof message!=="undefined"?message:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".app-loader\n  span= message\n  small Please wait\n  if cancel\n    a.cancel-btn Cancel");
}
};
exports["_loader"].content = ".app-loader\n  span= message\n  small Please wait\n  if cancel\n    a.cancel-btn Cancel";
exports["content_tab"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/content_tab.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (column_type_label, data, formatCell, sorting, tableType, types, undefined) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/content_tab.jade" ));
buf.push("\n<div class=\"rescol-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/content_tab.jade" ));
buf.push("\n  <div class=\"rescol-header-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "views/content_tab.jade" ));
buf.push("\n  <div class=\"rescol-content-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "views/content_tab.jade" ));
buf.push("\n    <table>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "views/content_tab.jade" ));
buf.push("\n      <thead>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "views/content_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "views/content_tab.jade" ));
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 7, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "views/content_tab.jade" ));
if ( column.name != 'ctid')
{
jade_debug.unshift(new jade.DebugItem( 9, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "views/content_tab.jade" ));
var type = column_type_label(types[column.name])
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/content_tab.jade" ));
var dir = sorting.column == column.name ? sorting.direction : ''
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "views/content_tab.jade" ));
buf.push("\n          <th" + (jade.attr("title", type, true, false)) + (jade.attr("sortable", column.name, true, false)) + (jade.attr("sortable-dir", dir, true, false)) + (jade.cls(['format-' + type], [true])) + ">" + (jade.escape(null == (jade_interp = column.name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 7, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "views/content_tab.jade" ));
if ( column.name != 'ctid')
{
jade_debug.unshift(new jade.DebugItem( 9, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "views/content_tab.jade" ));
var type = column_type_label(types[column.name])
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/content_tab.jade" ));
var dir = sorting.column == column.name ? sorting.direction : ''
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "views/content_tab.jade" ));
buf.push("\n          <th" + (jade.attr("title", type, true, false)) + (jade.attr("sortable", column.name, true, false)) + (jade.attr("sortable-dir", dir, true, false)) + (jade.cls(['format-' + type], [true])) + ">" + (jade.escape(null == (jade_interp = column.name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </thead>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/content_tab.jade" ));
buf.push("\n      <tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "views/content_tab.jade" ));
// iterate data.rows
;(function(){
  var $$obj = data.rows;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var row = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 13, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "views/content_tab.jade" ));
buf.push("\n        <tr" + (jade.attr("data-ctid", row.ctid, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "views/content_tab.jade" ));
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "views/content_tab.jade" ));
if ( column.name != 'ctid')
{
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], types[column.name].real_format, types[column.name].data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "views/content_tab.jade" ));
if ( column.name != 'ctid')
{
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], types[column.name].real_format, types[column.name].data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var row = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 13, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "views/content_tab.jade" ));
buf.push("\n        <tr" + (jade.attr("data-ctid", row.ctid, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "views/content_tab.jade" ));
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "views/content_tab.jade" ));
if ( column.name != 'ctid')
{
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], types[column.name].real_format, types[column.name].data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "views/content_tab.jade" ));
if ( column.name != 'ctid')
{
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "views/content_tab.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], types[column.name].real_format, types[column.name].data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n      </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </table>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "views/content_tab.jade" ));
buf.push("\n<div class=\"summary-and-pages native-footer-bar\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 21, "views/content_tab.jade" ));
buf.push("\n  <ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 23, "views/content_tab.jade" ));
buf.push("\n    <!--li-->");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 24, "views/content_tab.jade" ));
buf.push("\n    <!--  a Remove-->");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "views/content_tab.jade" ));
buf.push("\n    <!--li-->");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "views/content_tab.jade" ));
buf.push("\n    <!--  a Duplicate-->");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "views/content_tab.jade" ));
buf.push("\n    <li class=\"info\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "views/content_tab.jade" ));
buf.push("\n    <li class=\"pages prev\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, "views/content_tab.jade" ));
buf.push("<a exec=\"prevPage\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, jade_debug[0].filename ));
buf.push("Prev");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "views/content_tab.jade" ));
buf.push("\n    <li class=\"pages next\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 31, "views/content_tab.jade" ));
buf.push("<a exec=\"nextPage\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 31, jade_debug[0].filename ));
buf.push("Next");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 32, "views/content_tab.jade" ));
buf.push("\n    <li class=\"reload\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 33, "views/content_tab.jade" ));
buf.push("<a exec=\"reloadData\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 33, jade_debug[0].filename ));
buf.push("Reload");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "views/content_tab.jade" ));
if ( tableType == 'BASE TABLE')
{
jade_debug.unshift(new jade.DebugItem( 35, "views/content_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 35, "views/content_tab.jade" ));
buf.push("\n    <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 36, "views/content_tab.jade" ));
buf.push("<a exec=\"addRow\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
buf.push("Add New Row");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"column_type_label" in locals_for_with?locals_for_with.column_type_label:typeof column_type_label!=="undefined"?column_type_label:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"formatCell" in locals_for_with?locals_for_with.formatCell:typeof formatCell!=="undefined"?formatCell:undefined,"sorting" in locals_for_with?locals_for_with.sorting:typeof sorting!=="undefined"?sorting:undefined,"tableType" in locals_for_with?locals_for_with.tableType:typeof tableType!=="undefined"?tableType:undefined,"types" in locals_for_with?locals_for_with.types:typeof types!=="undefined"?types:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".rescol-wrapper\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    table\n      thead\n        tr\n          each column in data.fields\n            if column.name != 'ctid'\n              - var type = column_type_label(types[column.name])\n              - var dir = sorting.column == column.name ? sorting.direction : ''\n              th(class= 'format-' + type, title=type, sortable=column.name, sortable-dir=dir)= column.name\n      tbody\n        each row in data.rows\n          tr(data-ctid = row.ctid)\n            each column in data.fields\n              if column.name != 'ctid'\n                td!= formatCell(row[column.name], types[column.name].real_format, types[column.name].data_type)\n\n\n.summary-and-pages.native-footer-bar\n  ul\n    //li\n    //  a Remove\n    //li\n    //  a Duplicate\n    li.info\n\n    li.pages.prev\n      a(exec=\"prevPage\") Prev\n    li.pages.next\n      a(exec=\"nextPage\") Next\n    li.reload\n      a(exec=\"reloadData\") Reload\n    if tableType == 'BASE TABLE'\n      li\n        a(exec=\"addRow\") Add New Row\n");
}
};
exports["content_tab"].content = ".rescol-wrapper\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    table\n      thead\n        tr\n          each column in data.fields\n            if column.name != 'ctid'\n              - var type = column_type_label(types[column.name])\n              - var dir = sorting.column == column.name ? sorting.direction : ''\n              th(class= 'format-' + type, title=type, sortable=column.name, sortable-dir=dir)= column.name\n      tbody\n        each row in data.rows\n          tr(data-ctid = row.ctid)\n            each column in data.fields\n              if column.name != 'ctid'\n                td!= formatCell(row[column.name], types[column.name].real_format, types[column.name].data_type)\n\n\n.summary-and-pages.native-footer-bar\n  ul\n    //li\n    //  a Remove\n    //li\n    //  a Duplicate\n    li.info\n\n    li.pages.prev\n      a(exec=\"prevPage\") Prev\n    li.pages.next\n      a(exec=\"nextPage\") Next\n    li.reload\n      a(exec=\"reloadData\") Reload\n    if tableType == 'BASE TABLE'\n      li\n        a(exec=\"addRow\") Add New Row\n";
exports["db_rows_table"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/db_rows_table.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (column_type_label, data, formatCell, undefined) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/db_rows_table.jade" ));
buf.push("\n<div class=\"rescol-wrapper with-borders\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/db_rows_table.jade" ));
buf.push("\n  <div class=\"rescol-header-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "views/db_rows_table.jade" ));
buf.push("\n  <div class=\"rescol-content-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "views/db_rows_table.jade" ));
if ( data.fields)
{
jade_debug.unshift(new jade.DebugItem( 5, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "views/db_rows_table.jade" ));
buf.push("\n    <table>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "views/db_rows_table.jade" ));
buf.push("\n      <thead>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "views/db_rows_table.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "views/db_rows_table.jade" ));
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 8, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "views/db_rows_table.jade" ));
var type = column_type_label(column)
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/db_rows_table.jade" ));
buf.push("\n          <th" + (jade.attr("title", type, true, false)) + (jade.cls(['format-' + type], [true])) + ">" + (jade.escape(null == (jade_interp = column.name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 8, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "views/db_rows_table.jade" ));
var type = column_type_label(column)
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/db_rows_table.jade" ));
buf.push("\n          <th" + (jade.attr("title", type, true, false)) + (jade.cls(['format-' + type], [true])) + ">" + (jade.escape(null == (jade_interp = column.name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </thead>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "views/db_rows_table.jade" ));
buf.push("\n      <tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "views/db_rows_table.jade" ));
// iterate data.rows
;(function(){
  var $$obj = data.rows;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var row = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 12, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "views/db_rows_table.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "views/db_rows_table.jade" ));
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 14, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 15, "views/db_rows_table.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], column.udt_name, column.data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 14, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 15, "views/db_rows_table.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], column.udt_name, column.data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var row = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 12, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "views/db_rows_table.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "views/db_rows_table.jade" ));
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 14, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 15, "views/db_rows_table.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], column.udt_name, column.data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 14, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 15, "views/db_rows_table.jade" ));
buf.push("\n          <td>" + (null == (jade_interp = formatCell(row[column.name], column.udt_name, column.data_type)) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n      </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </table>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 17, "views/db_rows_table.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "views/db_rows_table.jade" ));
buf.push("\n    <table>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "views/db_rows_table.jade" ));
buf.push("\n      <tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, "views/db_rows_table.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "views/db_rows_table.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = data.command) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "views/db_rows_table.jade" ));
buf.push("\n          <td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 21, jade_debug[0].filename ));
buf.push("OK");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </table>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"column_type_label" in locals_for_with?locals_for_with.column_type_label:typeof column_type_label!=="undefined"?column_type_label:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"formatCell" in locals_for_with?locals_for_with.formatCell:typeof formatCell!=="undefined"?formatCell:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".rescol-wrapper.with-borders\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    if data.fields\n      table\n        thead\n          tr\n            each column in data.fields\n              - var type = column_type_label(column)\n              th(class= 'format-' + type, title= type)= column.name\n        tbody\n          each row in data.rows\n            tr\n              each column in data.fields\n                td!= formatCell(row[column.name], column.udt_name, column.data_type)\n    else\n      table\n        tbody\n          tr\n            td= data.command\n            td OK\n");
}
};
exports["db_rows_table"].content = ".rescol-wrapper.with-borders\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    if data.fields\n      table\n        thead\n          tr\n            each column in data.fields\n              - var type = column_type_label(column)\n              th(class= 'format-' + type, title= type)= column.name\n        tbody\n          each row in data.rows\n            tr\n              each column in data.fields\n                td!= formatCell(row[column.name], column.udt_name, column.data_type)\n    else\n      table\n        tbody\n          tr\n            td= data.command\n            td OK\n";
exports["dialogs/column_form"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/column_form.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, undefined, groupedTypes, action) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/column_form.jade" });
data = data || {}
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/column_form.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Name");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <input name=\"name\"" + (jade.attr("value", data.column_name, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Type");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <select name=\"type\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <option>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/column_form.jade" });
// iterate groupedTypes
;(function(){
  var $$obj = groupedTypes;
  if ('number' == typeof $$obj.length) {

    for (var group = 0, $$l = $$obj.length; group < $$l; group++) {
      var types = $$obj[group];

jade_debug.unshift({ lineno: 12, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <optgroup" + (jade.attr("label", group, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</optgroup>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/column_form.jade" });
// iterate types
;(function(){
  var $$obj = types;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

jade_debug.unshift({ lineno: 14, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/column_form.jade" });
if ( type)
{
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <option" + (jade.attr("value", type.name, true, false)) + (jade.attr("title", type.description, true, false)) + (jade.attr("selected", (data.data_type == type.name), true, false)) + ">" + (jade.escape(null == (jade_interp = type.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

jade_debug.unshift({ lineno: 14, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/column_form.jade" });
if ( type)
{
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <option" + (jade.attr("value", type.name, true, false)) + (jade.attr("title", type.description, true, false)) + (jade.attr("selected", (data.data_type == type.name), true, false)) + ">" + (jade.escape(null == (jade_interp = type.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var group in $$obj) {
      $$l++;      var types = $$obj[group];

jade_debug.unshift({ lineno: 12, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <optgroup" + (jade.attr("label", group, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</optgroup>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/column_form.jade" });
// iterate types
;(function(){
  var $$obj = types;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

jade_debug.unshift({ lineno: 14, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/column_form.jade" });
if ( type)
{
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <option" + (jade.attr("value", type.name, true, false)) + (jade.attr("title", type.description, true, false)) + (jade.attr("selected", (data.data_type == type.name), true, false)) + ">" + (jade.escape(null == (jade_interp = type.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

jade_debug.unshift({ lineno: 14, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/column_form.jade" });
if ( type)
{
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <option" + (jade.attr("value", type.name, true, false)) + (jade.attr("title", type.description, true, false)) + (jade.attr("selected", (data.data_type == type.name), true, false)) + ">" + (jade.escape(null == (jade_interp = type.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n    </select>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "views/dialogs/column_form.jade" });
buf.push("See ");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/dialogs/column_form.jade" });
buf.push("<a href=\"http://www.postgresql.org/docs/9.4/static/datatype.html\" target=\"_blank\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("documentation for datatypes");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Default value");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <input name=\"default_value\"" + (jade.attr("value", data.column_default, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("Max length");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <input name=\"max_length\"" + (jade.attr("value", data.character_maximum_length, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <input type=\"hidden\" name=\"allow_null\" value=\"0\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/dialogs/column_form.jade" });
buf.push("\n      <input type=\"checkbox\" name=\"allow_null\" value=\"1\"" + (jade.attr("checked", (data.is_nullable == 'YES'), true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/dialogs/column_form.jade" });
buf.push("Allow null");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <input type=\"submit\" class=\"pseudo-hidden\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/dialogs/column_form.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "views/dialogs/column_form.jade" });
if ( action == "edit")
{
jade_debug.unshift({ lineno: 38, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 38, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("Update column");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 40, filename: "views/dialogs/column_form.jade" });
jade_debug.unshift({ lineno: 40, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("Add column");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "views/dialogs/column_form.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"groupedTypes" in locals_for_with?locals_for_with.groupedTypes:typeof groupedTypes!=="undefined"?groupedTypes:undefined,"action" in locals_for_with?locals_for_with.action:typeof action!=="undefined"?action:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "- data = data || {}\n\nform\n  p\n    label Name\n    input(name=\"name\", value = data.column_name)\n\n  p\n    label Type\n    select(name=\"type\")\n      option\n      each types, group in groupedTypes\n        optgroup(label = group)\n        each type in types\n          if type\n            option(value = type.name, title = type.description, selected = (data.data_type == type.name))= type.name\n  p\n    = \"See \"\n    a(href=\"http://www.postgresql.org/docs/9.4/static/datatype.html\", target=\"_blank\") documentation for datatypes\n\n    p\n    label Default value\n    input(name=\"default_value\", value = data.column_default)\n\n  p\n    label Max length\n    input(name=\"max_length\", value = data.character_maximum_length)\n\n  p\n    label\n      input(type=\"hidden\", name=\"allow_null\" value=\"0\")\n      input(type=\"checkbox\" name=\"allow_null\" value=\"1\", checked = (data.is_nullable == 'YES'))\n      = \"Allow null\"\n\n  input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    if action == \"edit\"\n        button.ok Update column\n    else\n        button.ok Add column\n    button.cancel cancel\n");
}
};
exports["dialogs/column_form"].content = "- data = data || {}\n\nform\n  p\n    label Name\n    input(name=\"name\", value = data.column_name)\n\n  p\n    label Type\n    select(name=\"type\")\n      option\n      each types, group in groupedTypes\n        optgroup(label = group)\n        each type in types\n          if type\n            option(value = type.name, title = type.description, selected = (data.data_type == type.name))= type.name\n  p\n    = \"See \"\n    a(href=\"http://www.postgresql.org/docs/9.4/static/datatype.html\", target=\"_blank\") documentation for datatypes\n\n    p\n    label Default value\n    input(name=\"default_value\", value = data.column_default)\n\n  p\n    label Max length\n    input(name=\"max_length\", value = data.character_maximum_length)\n\n  p\n    label\n      input(type=\"hidden\", name=\"allow_null\" value=\"0\")\n      input(type=\"checkbox\" name=\"allow_null\" value=\"1\", checked = (data.is_nullable == 'YES'))\n      = \"Allow null\"\n\n  input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    if action == \"edit\"\n        button.ok Update column\n    else\n        button.ok Add column\n    button.cancel cancel\n";
exports["dialogs/def_procedure"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/def_procedure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (source, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/def_procedure.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/def_procedure.jade" });
buf.push("<code class=\"general sql\">" + (jade.escape(null == (jade_interp = source) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/def_procedure.jade" });
buf.push("\n<p class=\"buttons close-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/def_procedure.jade" });
buf.push("\n  <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Close");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</p>");
jade_debug.shift();
jade_debug.shift();}.call(this,"source" in locals_for_with?locals_for_with.source:typeof source!=="undefined"?source:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "code.general.sql= source\n\np.buttons.close-btn\n  button.cancel Close");
}
};
exports["dialogs/def_procedure"].content = "code.general.sql= source\n\np.buttons.close-btn\n  button.cancel Close";
exports["dialogs/edit_procedure"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/edit_procedure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (proc, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/edit_procedure.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/edit_procedure.jade" });
buf.push("\n<textarea class=\"editor\">" + (jade.escape(null == (jade_interp = proc.source) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/edit_procedure.jade" });
buf.push("\n<p class=\"buttons close-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/edit_procedure.jade" });
buf.push("\n  <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Close");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</p>");
jade_debug.shift();
jade_debug.shift();}.call(this,"proc" in locals_for_with?locals_for_with.proc:typeof proc!=="undefined"?proc:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "textarea.editor= proc.source\n\np.buttons.close-btn\n  button.cancel Close");
}
};
exports["dialogs/edit_procedure"].content = "textarea.editor= proc.source\n\np.buttons.close-btn\n  button.cancel Close";
exports["dialogs/export_file"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/export_file.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, database, hopePath) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/export_file.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/export_file.jade" });
buf.push("\n<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/export_file.jade" });
buf.push("Exporting database '");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/export_file.jade" });
buf.push("<b>" + (jade.escape(null == (jade_interp = database) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/export_file.jade" });
buf.push("'");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</header>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/export_file.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/export_file.jade" });
buf.push("\n  <p class=\"save-to-file\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/export_file.jade" });
buf.push("Save to file:");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/export_file.jade" });
buf.push("\n    <input type=\"file\" name=\"export_to_file\"" + (jade.attr("nwsaveas", database + '.sql', true, false)) + (jade.attr("nwworkingdir", hopePath, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/export_file.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/export_file.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/export_file.jade" });
buf.push("Export structure");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/export_file.jade" });
buf.push("\n      <input type=\"checkbox\" name=\"export_structure\" checked=\"checked\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/export_file.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/export_file.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/export_file.jade" });
buf.push("Export data");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/dialogs/export_file.jade" });
buf.push("\n      <input type=\"checkbox\" name=\"export_data\" checked=\"checked\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/dialogs/export_file.jade" });
buf.push("<code class=\"result\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/dialogs/export_file.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/dialogs/export_file.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Start");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/dialogs/export_file.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/dialogs/export_file.jade" });
buf.push("\n  <p class=\"buttons close-btn is-hidden\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "views/dialogs/export_file.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Close");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"database" in locals_for_with?locals_for_with.database:typeof database!=="undefined"?database:undefined,"hopePath" in locals_for_with?locals_for_with.hopePath:typeof hopePath!=="undefined"?hopePath:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  = \"Exporting database '\"\n  b= database\n  = \"'\"\n\nform\n  p.save-to-file\n    = \"Save to file:\"\n    input(type=\"file\" name=\"export_to_file\" nwsaveas=database + '.sql' nwworkingdir=hopePath)\n  p\n    label\n      = \"Export structure\"\n      input(type=\"checkbox\" name=\"export_structure\" checked)\n  p\n    label\n      = \"Export data\"\n      input(type=\"checkbox\" name=\"export_data\" checked)\n\n  code.result\n\n  p.buttons\n    button.ok Start\n    button.cancel Cancel\n  p.buttons.close-btn.is-hidden\n    button.cancel Close");
}
};
exports["dialogs/export_file"].content = "header\n  = \"Exporting database '\"\n  b= database\n  = \"'\"\n\nform\n  p.save-to-file\n    = \"Save to file:\"\n    input(type=\"file\" name=\"export_to_file\" nwsaveas=database + '.sql' nwworkingdir=hopePath)\n  p\n    label\n      = \"Export structure\"\n      input(type=\"checkbox\" name=\"export_structure\" checked)\n  p\n    label\n      = \"Export data\"\n      input(type=\"checkbox\" name=\"export_data\" checked)\n\n  code.result\n\n  p.buttons\n    button.ok Start\n    button.cancel Cancel\n  p.buttons.close-btn.is-hidden\n    button.cancel Close";
exports["dialogs/heroku_connection"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/heroku_connection.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, undefined, connectionUrl) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/heroku_connection.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/heroku_connection.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/heroku_connection.jade" });
buf.push("<code class=\"connection-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/heroku_connection.jade" });
buf.push(jade.escape(null == (jade_interp = connectionUrl) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/heroku_connection.jade" });
buf.push("\n<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/heroku_connection.jade" });
buf.push("<i>Note: This information can be changed in future by heroku");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/heroku_connection.jade" });
buf.push("\n<button class=\"save-conn native-look\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Save locally");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/heroku_connection.jade" });
buf.push("\n<button autofocus=\"autofocus\" class=\"cancel native-look\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Close");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"connectionUrl" in locals_for_with?locals_for_with.connectionUrl:typeof connectionUrl!=="undefined"?connectionUrl:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "strong= name\n\ncode.connection-info\n  = connectionUrl\n\np\n  i= \"Note: This information can be changed in future by heroku\"\n\nbutton.save-conn.native-look Save locally\nbutton.cancel.native-look(autofocus=true) Close");
}
};
exports["dialogs/heroku_connection"].content = "strong= name\n\ncode.connection-info\n  = connectionUrl\n\np\n  i= \"Note: This information can be changed in future by heroku\"\n\nbutton.save-conn.native-look Save locally\nbutton.cancel.native-look(autofocus=true) Close";
exports["dialogs/import_file"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/import_file.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, filename, databases, currentDb) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/import_file.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/import_file.jade" });
buf.push("\n<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/import_file.jade" });
buf.push("Importing file:");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/import_file.jade" });
buf.push("<code>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/import_file.jade" });
buf.push(jade.escape(null == (jade_interp = filename) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</header>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/import_file.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/import_file.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Database");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <select name=\"database\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/import_file.jade" });
// iterate databases
;(function(){
  var $$obj = databases;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var database = $$obj[$index];

jade_debug.unshift({ lineno: 10, filename: "views/dialogs/import_file.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/import_file.jade" });
buf.push("\n      <option" + (jade.attr("value", database, true, false)) + (jade.attr("selected", (database == currentDb), true, false)) + ">" + (jade.escape(null == (jade_interp = database) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var database = $$obj[$index];

jade_debug.unshift({ lineno: 10, filename: "views/dialogs/import_file.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/import_file.jade" });
buf.push("\n      <option" + (jade.attr("value", database, true, false)) + (jade.attr("selected", (database == currentDb), true, false)) + ">" + (jade.escape(null == (jade_interp = database) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/import_file.jade" });
buf.push("\n      <option disabled=\"disabled\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("-----");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/import_file.jade" });
buf.push("\n      <option value=\"**create-db**\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Create database");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </select>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/import_file.jade" });
buf.push("\n  <p class=\"new-database-input is-hidden\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("New database");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <input name=\"new_database_name\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/dialogs/import_file.jade" });
buf.push("\n  <input type=\"submit\" class=\"pseudo-hidden\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/dialogs/import_file.jade" });
buf.push("<code class=\"result\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/dialogs/import_file.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Import file");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/dialogs/import_file.jade" });
buf.push("\n  <p class=\"buttons close-btn is-hidden\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "views/dialogs/import_file.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("Close");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"filename" in locals_for_with?locals_for_with.filename:typeof filename!=="undefined"?filename:undefined,"databases" in locals_for_with?locals_for_with.databases:typeof databases!=="undefined"?databases:undefined,"currentDb" in locals_for_with?locals_for_with.currentDb:typeof currentDb!=="undefined"?currentDb:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  = \"Importing file:\"\n  code\n    = filename\n\nform\n  p\n    label Database\n    select(name=\"database\")\n      each database in databases\n        option( value = database, selected = (database == currentDb) )= database\n\n      option(disabled = true) -----\n      option(value = '**create-db**') Create database\n\n  p.new-database-input.is-hidden\n    label New database\n    input(name=\"new_database_name\")\n\n  input.pseudo-hidden(type=\"submit\")\n\n  code.result\n\n  p.buttons\n    button.ok Import file\n    button.cancel cancel\n  p.buttons.close-btn.is-hidden\n    button.cancel Close");
}
};
exports["dialogs/import_file"].content = "header\n  = \"Importing file:\"\n  code\n    = filename\n\nform\n  p\n    label Database\n    select(name=\"database\")\n      each database in databases\n        option( value = database, selected = (database == currentDb) )= database\n\n      option(disabled = true) -----\n      option(value = '**create-db**') Create database\n\n  p.new-database-input.is-hidden\n    label New database\n    input(name=\"new_database_name\")\n\n  input.pseudo-hidden(type=\"submit\")\n\n  code.result\n\n  p.buttons\n    button.ok Import file\n    button.cancel cancel\n  p.buttons.close-btn.is-hidden\n    button.cancel Close";
exports["dialogs/index_form"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/index_form.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, columns) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/index_form.jade" });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/index_form.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/index_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <label for=\"index_name_field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Name");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <input id=\"index_name_field\" name=\"name\" placeholder=\"optional\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/index_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Columns");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <ul class=\"columns-names\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/index_form.jade" });
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift({ lineno: 10, filename: "views/dialogs/index_form.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/index_form.jade" });
buf.push("\n      <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/index_form.jade" });
buf.push("\n        <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/index_form.jade" });
buf.push("\n          <input type=\"checkbox\"" + (jade.attr("name", "columns[" + column.column_name + "]", true, false)) + (jade.attr("value", column.column_name, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/index_form.jade" });
buf.push(jade.escape(null == (jade_interp = column.column_name) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift({ lineno: 10, filename: "views/dialogs/index_form.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/index_form.jade" });
buf.push("\n      <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/index_form.jade" });
buf.push("\n        <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/index_form.jade" });
buf.push("\n          <input type=\"checkbox\"" + (jade.attr("name", "columns[" + column.column_name + "]", true, false)) + (jade.attr("value", column.column_name, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/index_form.jade" });
buf.push(jade.escape(null == (jade_interp = column.column_name) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n    </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/index_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <label for=\"index_uniq_field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Uniq");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <input id=\"index_uniq_field\" type=\"checkbox\" name=\"uniq\" value=\"1\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/dialogs/index_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <label for=\"index_method_field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("Method");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <select id=\"index_method_field\" name=\"method\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/dialogs/index_form.jade" });
buf.push("\n      <option value=\"btree\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("btree");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/dialogs/index_form.jade" });
buf.push("\n      <option value=\"hash\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("hash");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/dialogs/index_form.jade" });
buf.push("\n      <option value=\"gist\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("gist");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/dialogs/index_form.jade" });
buf.push("\n      <option value=\"gin\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("gin");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </select>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/dialogs/index_form.jade" });
buf.push("\n  <input type=\"submit\" class=\"pseudo-hidden\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/dialogs/index_form.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("Add index");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/dialogs/index_form.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"columns" in locals_for_with?locals_for_with.columns:typeof columns!=="undefined"?columns:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "\nform\n  p\n    label(for=\"index_name_field\") Name\n    input#index_name_field(name=\"name\", placeholder=\"optional\")\n\n  p\n    label Columns\n    ul.columns-names\n      each column in columns\n        li\n          label\n            input(type=\"checkbox\", name=\"columns[\" + column.column_name + \"]\", value= column.column_name)\n            = column.column_name\n  p\n    label(for=\"index_uniq_field\") Uniq\n    input#index_uniq_field(type=\"checkbox\", name=\"uniq\", value=\"1\")\n\n  p\n    label(for=\"index_method_field\") Method\n    select#index_method_field(name=\"method\")\n      option(value=\"btree\") btree\n      option(value=\"hash\") hash\n      option(value=\"gist\") gist\n      option(value=\"gin\") gin\n\n  input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    button.ok Add index\n    button.cancel cancel\n");
}
};
exports["dialogs/index_form"].content = "\nform\n  p\n    label(for=\"index_name_field\") Name\n    input#index_name_field(name=\"name\", placeholder=\"optional\")\n\n  p\n    label Columns\n    ul.columns-names\n      each column in columns\n        li\n          label\n            input(type=\"checkbox\", name=\"columns[\" + column.column_name + \"]\", value= column.column_name)\n            = column.column_name\n  p\n    label(for=\"index_uniq_field\") Uniq\n    input#index_uniq_field(type=\"checkbox\", name=\"uniq\", value=\"1\")\n\n  p\n    label(for=\"index_method_field\") Method\n    select#index_method_field(name=\"method\")\n      option(value=\"btree\") btree\n      option(value=\"hash\") hash\n      option(value=\"gist\") gist\n      option(value=\"gin\") gin\n\n  input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    button.ok Add index\n    button.cancel cancel\n";
exports["dialogs/list_languages"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/list_languages.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, langs) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/list_languages.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/list_languages.jade" });
buf.push("\n<table class=\"native-look-table\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/list_languages.jade" });
buf.push("\n  <thead>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/list_languages.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/list_languages.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/dialogs/list_languages.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("trusted");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </thead>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/list_languages.jade" });
buf.push("\n  <tbody>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/list_languages.jade" });
// iterate langs
;(function(){
  var $$obj = langs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var lang = $$obj[$index];

jade_debug.unshift({ lineno: 7, filename: "views/dialogs/list_languages.jade" });
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/list_languages.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/list_languages.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = lang.lanname) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/list_languages.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = lang.lanpltrusted ? "Yes" : "No") ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var lang = $$obj[$index];

jade_debug.unshift({ lineno: 7, filename: "views/dialogs/list_languages.jade" });
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/list_languages.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/list_languages.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = lang.lanname) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/list_languages.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = lang.lanpltrusted ? "Yes" : "No") ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</table>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/list_languages.jade" });
buf.push("\n<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/list_languages.jade" });
buf.push("You can add and remove languages on extension tab");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/list_languages.jade" });
buf.push("\n<p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/list_languages.jade" });
buf.push("\n  <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Close");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</p>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"langs" in locals_for_with?locals_for_with.langs:typeof langs!=="undefined"?langs:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "table.native-look-table\n  thead\n    tr\n      th name\n      th trusted\n  tbody\n    each lang in langs\n      tr\n        td= lang.lanname\n        td= lang.lanpltrusted ? \"Yes\" : \"No\"\n\np\n  = \"You can add and remove languages on extension tab\"\n\np.buttons\n  button.cancel Close\n\n");
}
};
exports["dialogs/list_languages"].content = "table.native-look-table\n  thead\n    tr\n      th name\n      th trusted\n  tbody\n    each lang in langs\n      tr\n        td= lang.lanname\n        td= lang.lanpltrusted ? \"Yes\" : \"No\"\n\np\n  = \"You can add and remove languages on extension tab\"\n\np.buttons\n  button.cancel Close\n\n";
exports["dialogs/new_database"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/new_database.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/new_database.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/new_database.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/new_database.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Database");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <input type=\"text\" name=\"dbname\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/dialogs/new_database.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Template");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <select name=\"template\" class=\"template\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/new_database.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Encoding");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <select name=\"encoding\" class=\"encoding\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <input type=\"submit\" class=\"pseudo-hidden\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/new_database.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Create database");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/new_database.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  p\n    label Database\n    input(type=\"text\" name=\"dbname\")\n  p\n    label Template\n    select.template(name=\"template\")\n  p\n    label Encoding\n    select.encoding(name=\"encoding\")\n\n    input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    button.ok Create database\n    button.cancel cancel\n");
}
};
exports["dialogs/new_database"].content = "form\n  p\n    label Database\n    input(type=\"text\" name=\"dbname\")\n  p\n    label Template\n    select.template(name=\"template\")\n  p\n    label Encoding\n    select.encoding(name=\"encoding\")\n\n    input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    button.ok Create database\n    button.cancel cancel\n";
exports["dialogs/new_table"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/new_table.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/new_table.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/new_table.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/new_table.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/new_table.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Table name");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/new_table.jade" });
buf.push("\n    <input name=\"name\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/new_table.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/new_table.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Tablespace");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/dialogs/new_table.jade" });
buf.push("\n    <select name=\"tablespace\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/new_table.jade" });
buf.push("\n  <input type=\"submit\" class=\"pseudo-hidden\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/new_table.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/new_table.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Create table");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/new_table.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  p\n    label Table name\n    input(name=\"name\")\n\n  p\n    label Tablespace\n    select(name=\"tablespace\")\n\n  input.pseudo-hidden(type=\"submit\")\n\n  p.buttons\n    button.ok Create table\n    button.cancel cancel\n");
}
};
exports["dialogs/new_table"].content = "form\n  p\n    label Table name\n    input(name=\"name\")\n\n  p\n    label Tablespace\n    select(name=\"tablespace\")\n\n  input.pseudo-hidden(type=\"submit\")\n\n  p.buttons\n    button.ok Create table\n    button.cancel cancel\n";
exports["dialogs/show_sql"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/show_sql.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, code) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/show_sql.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/show_sql.jade" });
buf.push("<code class=\"result sql\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/show_sql.jade" });
buf.push(jade.escape(null == (jade_interp = code) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/show_sql.jade" });
buf.push("\n<p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/dialogs/show_sql.jade" });
buf.push("\n  <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("OK");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</p>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"code" in locals_for_with?locals_for_with.code:typeof code!=="undefined"?code:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "code.result.sql\n  = code\n\np.buttons\n  button.cancel OK");
}
};
exports["dialogs/show_sql"].content = "code.result.sql\n  = code\n\np.buttons\n  button.cancel OK";
exports["dialogs/user_form"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/dialogs/user_form.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/dialogs/user_form.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/dialogs/user_form.jade" });
buf.push("\n<form>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Name");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <input name=\"username\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Password");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <input name=\"password\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <!--p-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <!--  label Password (again)-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <!--  input(name=\"password_again\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/dialogs/user_form.jade" });
buf.push("\n      <input type=\"checkbox\" name=\"admin\" value=\"1\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/dialogs/user_form.jade" });
buf.push("Admin?");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <input type=\"submit\" class=\"pseudo-hidden\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/dialogs/user_form.jade" });
buf.push("\n  <p class=\"buttons\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <button class=\"ok\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Create user");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/dialogs/user_form.jade" });
buf.push("\n    <button class=\"cancel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  p\n    label Name\n    input(name=\"username\")\n  p\n    label Password\n    input(name=\"password\")\n  //p\n  //  label Password (again)\n  //  input(name=\"password_again\")\n  p\n    label\n      input(type=\"checkbox\" name=\"admin\" value=\"1\")\n      = \"Admin?\"\n  input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    button.ok Create user\n    button.cancel cancel\n");
}
};
exports["dialogs/user_form"].content = "form\n  p\n    label Name\n    input(name=\"username\")\n  p\n    label Password\n    input(name=\"password\")\n  //p\n  //  label Password (again)\n  //  input(name=\"password_again\")\n  p\n    label\n      input(type=\"checkbox\" name=\"admin\" value=\"1\")\n      = \"Admin?\"\n  input.pseudo-hidden(type=\"submit\")\n  p.buttons\n    button.ok Create user\n    button.cancel cancel\n";
exports["extensions_tab"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/extensions_tab.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, rows) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/extensions_tab.jade" });
buf.push("\n<table class=\"native-look-table\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/extensions_tab.jade" });
buf.push("\n  <thead>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/extensions_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/extensions_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/extensions_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("default version");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/extensions_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("installed_version");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/extensions_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </thead>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/extensions_tab.jade" });
buf.push("\n  <tbody>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/extensions_tab.jade" });
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift({ lineno: 9, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 10, filename: "views/extensions_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = column.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = column.default_version) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/extensions_tab.jade" });
if ( column.installed_version)
{
jade_debug.unshift({ lineno: 15, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/extensions_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = column.installed_version) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/extensions_tab.jade" });
buf.push("\n        <button" + (jade.attr("exec", "uninstall('" + column.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Uninstall");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 18, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 18, filename: "views/extensions_tab.jade" });
buf.push("\n        <button" + (jade.attr("exec", "install('" + column.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("Install");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = column.comment) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift({ lineno: 9, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 10, filename: "views/extensions_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = column.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = column.default_version) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/extensions_tab.jade" });
if ( column.installed_version)
{
jade_debug.unshift({ lineno: 15, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/extensions_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = column.installed_version) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/extensions_tab.jade" });
buf.push("\n        <button" + (jade.attr("exec", "uninstall('" + column.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Uninstall");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 18, filename: "views/extensions_tab.jade" });
jade_debug.unshift({ lineno: 18, filename: "views/extensions_tab.jade" });
buf.push("\n        <button" + (jade.attr("exec", "install('" + column.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("Install");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/extensions_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = column.comment) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</table>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"rows" in locals_for_with?locals_for_with.rows:typeof rows!=="undefined"?rows:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "table.native-look-table\n  thead\n    tr\n      th name\n      th default version\n      th installed_version\n      th\n  tbody\n    each column in rows\n      tr\n        td= column.name\n        td= column.default_version\n        td\n          if column.installed_version\n            strong= column.installed_version\n            button(exec=\"uninstall('\" + column.name + \"')\") Uninstall\n          else\n            button(exec=\"install('\" + column.name + \"')\") Install\n        td= column.comment");
}
};
exports["extensions_tab"].content = "table.native-look-table\n  thead\n    tr\n      th name\n      th default version\n      th installed_version\n      th\n  tbody\n    each column in rows\n      tr\n        td= column.name\n        td= column.default_version\n        td\n          if column.installed_version\n            strong= column.installed_version\n            button(exec=\"uninstall('\" + column.name + \"')\") Uninstall\n          else\n            button(exec=\"install('\" + column.name + \"')\") Install\n        td= column.comment";
exports["help"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/help.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, link_to) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/help.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/help.jade" });
buf.push("\n<div class=\"help-screen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/help.jade" });
buf.push("\n  <div class=\"sidebar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/help.jade" });
buf.push("\n    <ul>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/help.jade" });
buf.push("\n      <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/help.jade" });
buf.push("<a page=\"about-postbird\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("About Postbird");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/help.jade" });
buf.push("\n      <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/help.jade" });
buf.push("<a page=\"get-postgres\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Get Postgres");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/help.jade" });
buf.push("\n      <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/help.jade" });
buf.push("<a page=\"sql-basics\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("SQL basics");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/help.jade" });
buf.push("\n  <div class=\"content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/help.jade" });
buf.push("\n    <div class=\"page about-postbird\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/help.jade" });
buf.push("\n      <h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("About Postbird");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/help.jade" });
buf.push("\n      <p class=\"logo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/help.jade" });
buf.push("<img src=\"./assets/icon.png\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/help.jade" });
buf.push("\n      <p>");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("It's open source client for postgresql, written in JavaScript, run with node-webkit.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/help.jade" });
buf.push("\n      <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "views/help.jade" });
buf.push("Source code at ");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/help.jade" });
buf.push(null == (jade_interp = link_to("github.com/paxa/postbird", "https://github.com/paxa/postbird", {class: "external"})) ? "" : jade_interp);
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/help.jade" });
buf.push("\n    <div class=\"page get-postgres\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "views/help.jade" });
buf.push("\n      <h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Get Postgres");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/help.jade" });
buf.push("\n      <article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "views/help.jade" });
buf.push("\n        <h5>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("Postgres.app");
jade_debug.shift();
jade_debug.shift();
buf.push("</h5>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/help.jade" });
buf.push("\n        <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "views/help.jade" });
buf.push("Postgres.app is a simple, native Mac OS X app that runs in the menubar without the need of an installer.");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/help.jade" });
buf.push("Open the app, and you have a PostgreSQL server ready and awaiting new connections.");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/help.jade" });
buf.push("Close the app, and the server shuts down.");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/help.jade" });
buf.push("<a href=\"http://postgresapp.com/\" class=\"download external\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("Download");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </article>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/help.jade" });
buf.push("\n      <article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: "views/help.jade" });
buf.push("\n        <h5>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("Postgres Graphical installer");
jade_debug.shift();
jade_debug.shift();
buf.push("</h5>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "views/help.jade" });
buf.push("\n        <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: "views/help.jade" });
buf.push("An installer is available for Mac OS X that includes PostgreSQL, pgAdmin and");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "views/help.jade" });
buf.push("the StackBuilder utility for installation of additional packages.");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "views/help.jade" });
buf.push("<a href=\"http://www.enterprisedb.com/products-services-training/pgdownload#osx\" class=\"download external\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("Download");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </article>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/help.jade" });
buf.push("\n      <article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "views/help.jade" });
buf.push("\n        <h5>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("Using Homebrew or MacPorts or Fink");
jade_debug.shift();
jade_debug.shift();
buf.push("</h5>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "views/help.jade" });
buf.push("\n        <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "views/help.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("For Homebrew:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "views/help.jade" });
buf.push("<code>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("brew isntall postgresql");
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "views/help.jade" });
buf.push("\n        <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "views/help.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("For MacPorts:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "views/help.jade" });
buf.push("<code>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/help.jade" });
buf.push("sudo port install postgresql93-server\n");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "views/help.jade" });
buf.push("sudo port select --set postgresql postgresql93");
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "views/help.jade" });
buf.push("<a href=\"http://chriskief.com/2013/11/17/mavericks-macports-postgresql-9-tomcat-6-and-postgresql-studio/\" class=\"external\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("Manual");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/help.jade" });
buf.push("\n        <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "views/help.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("For Fink:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/help.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "views/help.jade" });
buf.push("<a href=\"http://pdb.finkproject.org/pdb/browse.php?summary=postgresql\" class=\"external\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("find it here");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </article>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "views/help.jade" });
buf.push("\n    <div class=\"page sql-basics\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "views/help.jade" });
buf.push("\n      <h5>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("SQL Basics");
jade_debug.shift();
jade_debug.shift();
buf.push("</h5>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "views/help.jade" });
buf.push("<i>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("not ready");
jade_debug.shift();
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"link_to" in locals_for_with?locals_for_with.link_to:typeof link_to!=="undefined"?link_to:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".help-screen\n  .sidebar\n    ul\n      li\n        a(page=\"about-postbird\") About Postbird\n      li\n        a(page=\"get-postgres\") Get Postgres\n      li\n        a(page=\"sql-basics\") SQL basics\n\n  .content\n    .page.about-postbird\n      h2 About Postbird\n\n      p.logo\n        img(src=\"./assets/icon.png\")\n      p.\n        It's open source client for postgresql, written in JavaScript, run with node-webkit.\n      p\n        = \"Source code at \"\n        != link_to(\"github.com/paxa/postbird\", \"https://github.com/paxa/postbird\", {class: \"external\"})\n\n    .page.get-postgres\n      h2 Get Postgres\n\n      article\n        h5 Postgres.app\n        p\n          = \"Postgres.app is a simple, native Mac OS X app that runs in the menubar without the need of an installer.\"\n          = \"Open the app, and you have a PostgreSQL server ready and awaiting new connections.\"\n          = \"Close the app, and the server shuts down.\"\n        a.download.external(href=\"http://postgresapp.com/\") Download\n\n      article\n        h5 Postgres Graphical installer\n        p\n          = \"An installer is available for Mac OS X that includes PostgreSQL, pgAdmin and\"\n          = \"the StackBuilder utility for installation of additional packages.\"\n        a.download.external(href=\"http://www.enterprisedb.com/products-services-training/pgdownload#osx\") Download\n\n      article\n        h5 Using Homebrew or MacPorts or Fink\n\n        p\n          strong For Homebrew:\n          code brew isntall postgresql\n        p\n          strong For MacPorts:\n          code\n            = \"sudo port install postgresql93-server\\n\"\n            = \"sudo port select --set postgresql postgresql93\"\n          a.external(href=\"http://chriskief.com/2013/11/17/mavericks-macports-postgresql-9-tomcat-6-and-postgresql-studio/\") Manual\n        p\n          strong For Fink:\n          span &nbsp;\n          a.external(href=\"http://pdb.finkproject.org/pdb/browse.php?summary=postgresql\") find it here\n\n    .page.sql-basics\n      h5 SQL Basics\n\n      i not ready");
}
};
exports["help"].content = ".help-screen\n  .sidebar\n    ul\n      li\n        a(page=\"about-postbird\") About Postbird\n      li\n        a(page=\"get-postgres\") Get Postgres\n      li\n        a(page=\"sql-basics\") SQL basics\n\n  .content\n    .page.about-postbird\n      h2 About Postbird\n\n      p.logo\n        img(src=\"./assets/icon.png\")\n      p.\n        It's open source client for postgresql, written in JavaScript, run with node-webkit.\n      p\n        = \"Source code at \"\n        != link_to(\"github.com/paxa/postbird\", \"https://github.com/paxa/postbird\", {class: \"external\"})\n\n    .page.get-postgres\n      h2 Get Postgres\n\n      article\n        h5 Postgres.app\n        p\n          = \"Postgres.app is a simple, native Mac OS X app that runs in the menubar without the need of an installer.\"\n          = \"Open the app, and you have a PostgreSQL server ready and awaiting new connections.\"\n          = \"Close the app, and the server shuts down.\"\n        a.download.external(href=\"http://postgresapp.com/\") Download\n\n      article\n        h5 Postgres Graphical installer\n        p\n          = \"An installer is available for Mac OS X that includes PostgreSQL, pgAdmin and\"\n          = \"the StackBuilder utility for installation of additional packages.\"\n        a.download.external(href=\"http://www.enterprisedb.com/products-services-training/pgdownload#osx\") Download\n\n      article\n        h5 Using Homebrew or MacPorts or Fink\n\n        p\n          strong For Homebrew:\n          code brew isntall postgresql\n        p\n          strong For MacPorts:\n          code\n            = \"sudo port install postgresql93-server\\n\"\n            = \"sudo port select --set postgresql postgresql93\"\n          a.external(href=\"http://chriskief.com/2013/11/17/mavericks-macports-postgresql-9-tomcat-6-and-postgresql-studio/\") Manual\n        p\n          strong For Fink:\n          span &nbsp;\n          a.external(href=\"http://pdb.finkproject.org/pdb/browse.php?summary=postgresql\") find it here\n\n    .page.sql-basics\n      h5 SQL Basics\n\n      i not ready";
exports["history"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/history.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Date, JSON, console, events, execTime, timeFormat, undefined) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/history.jade" ));
buf.push("\n<div class=\"history-window\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/history.jade" ));
buf.push("\n  <header>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "views/history.jade" ));
buf.push("\n    <button class=\"native-look reload-btn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("Reload");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "views/history.jade" ));
buf.push("\n    <button class=\"native-look clear-btn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("Clear");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </header>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "views/history.jade" ));
buf.push("\n  <ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "views/history.jade" ));
// iterate events
;(function(){
  var $$obj = events;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var event = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 6, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "views/history.jade" ));
if ( event.type == "sql.start" && event.args[0].state != 'running')
{
jade_debug.unshift(new jade.DebugItem( 8, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "views/history.jade" ));
// do nothing
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 10, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 10, "views/history.jade" ));
buf.push("\n    <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "views/history.jade" ));
buf.push("\n      <time>" + (jade.escape(null == (jade_interp = timeFormat(new Date(event.time))) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</time>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/history.jade" ));
buf.push("\n      <div class=\"event-info\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "views/history.jade" ));
if ( event.type == "sql.start" && event.args[0].state == 'running')
{
jade_debug.unshift(new jade.DebugItem( 14, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "views/history.jade" ));
var query = event.args[0]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "views/history.jade" ));
buf.push("<strong>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
buf.push("Running");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "views/history.jade" ));
buf.push("\n        <div class=\"sql running\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "views/history.jade" ));
buf.push("<code class=\"sql\">" + (jade.escape(null == (jade_interp = "SQL: " + query.sql) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "sql.failed")
{
jade_debug.unshift(new jade.DebugItem( 20, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 20, "views/history.jade" ));
var query = event.args[0]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "views/history.jade" ));
buf.push("\n        <div class=\"sql failed\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "views/history.jade" ));
buf.push("<code class=\"sql\">" + (jade.escape(null == (jade_interp = "SQL: " + query.sql) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "views/history.jade" ));
buf.push("<span class=\"error\">" + (jade.escape(null == (jade_interp = JSON.stringify(query.error, null, 2)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 24, "views/history.jade" ));
buf.push("<span class=\"exec-time\">" + (jade.escape(null == (jade_interp = "(" + execTime(query.time) + ")") ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "sql.success")
{
jade_debug.unshift(new jade.DebugItem( 27, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 27, "views/history.jade" ));
var query = event.args[0]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "views/history.jade" ));
buf.push("\n        <div class=\"sql success\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, "views/history.jade" ));
buf.push("<code class=\"sql\">" + (jade.escape(null == (jade_interp = "SQL: " + query.sql) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "views/history.jade" ));
buf.push("<span class=\"exec-time\">" + (jade.escape(null == (jade_interp = "(" + execTime(query.time) + ")") ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "connect.success")
{
jade_debug.unshift(new jade.DebugItem( 33, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 33, "views/history.jade" ));
var opts = event.args[1]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "views/history.jade" ));
console.log(event)
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 35, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "Connected to server ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "views/history.jade" ));
if ( opts)
{
jade_debug.unshift(new jade.DebugItem( 37, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 37, "views/history.jade" ));
buf.push("<code class=\"sql\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 38, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = opts.user + (opts.password ? ":*" : "") + "@" + opts.host + ":" + opts.port) ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 39, "views/history.jade" ));
if ( opts.database)
{
jade_debug.unshift(new jade.DebugItem( 40, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 40, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "/" + opts.database) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "connect.error")
{
jade_debug.unshift(new jade.DebugItem( 43, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 43, "views/history.jade" ));
var opts = event.args[1]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 44, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "Failed connect to server ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 45, "views/history.jade" ));
buf.push("<code class=\"sql\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 46, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = opts.user + (opts.password ? ":*" : "") + "@" + opts.host + ":" + opts.port) ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 47, "views/history.jade" ));
if ( opts.database)
{
jade_debug.unshift(new jade.DebugItem( 48, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 48, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "/" + opts.database) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 49, "views/history.jade" ));
buf.push("<span class=\"error\">" + (jade.escape(null == (jade_interp = event.args[2].message || event.args[2]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "exec.start")
{
jade_debug.unshift(new jade.DebugItem( 52, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 52, "views/history.jade" ));
buf.push("<strong>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 52, jade_debug[0].filename ));
buf.push("Executing");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 53, "views/history.jade" ));
buf.push("\n        <div class=\"exec start\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 54, "views/history.jade" ));
buf.push("<code>" + (jade.escape(null == (jade_interp = event.args[0].command) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "exec.finish")
{
jade_debug.unshift(new jade.DebugItem( 57, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 57, "views/history.jade" ));
buf.push("<strong>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 57, jade_debug[0].filename ));
buf.push("Complete");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 58, "views/history.jade" ));
buf.push("\n        <div class=\"exec finish\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 59, "views/history.jade" ));
buf.push("<code>" + (jade.escape(null == (jade_interp = event.args[0].command) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 60, "views/history.jade" ));
buf.push("<span class=\"exec-time\">" + (jade.escape(null == (jade_interp = "(" + execTime(event.args[0].time) + ")") ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 63, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 63, "views/history.jade" ));
buf.push("\n        <div class=\"event\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 64, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "~") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 65, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = event.type) ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 66, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 67, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = JSON.stringify(event.args, null, 2)) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var event = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 6, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "views/history.jade" ));
if ( event.type == "sql.start" && event.args[0].state != 'running')
{
jade_debug.unshift(new jade.DebugItem( 8, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "views/history.jade" ));
// do nothing
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 10, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 10, "views/history.jade" ));
buf.push("\n    <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "views/history.jade" ));
buf.push("\n      <time>" + (jade.escape(null == (jade_interp = timeFormat(new Date(event.time))) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</time>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/history.jade" ));
buf.push("\n      <div class=\"event-info\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "views/history.jade" ));
if ( event.type == "sql.start" && event.args[0].state == 'running')
{
jade_debug.unshift(new jade.DebugItem( 14, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "views/history.jade" ));
var query = event.args[0]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "views/history.jade" ));
buf.push("<strong>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
buf.push("Running");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "views/history.jade" ));
buf.push("\n        <div class=\"sql running\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "views/history.jade" ));
buf.push("<code class=\"sql\">" + (jade.escape(null == (jade_interp = "SQL: " + query.sql) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "sql.failed")
{
jade_debug.unshift(new jade.DebugItem( 20, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 20, "views/history.jade" ));
var query = event.args[0]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "views/history.jade" ));
buf.push("\n        <div class=\"sql failed\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "views/history.jade" ));
buf.push("<code class=\"sql\">" + (jade.escape(null == (jade_interp = "SQL: " + query.sql) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "views/history.jade" ));
buf.push("<span class=\"error\">" + (jade.escape(null == (jade_interp = JSON.stringify(query.error, null, 2)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 24, "views/history.jade" ));
buf.push("<span class=\"exec-time\">" + (jade.escape(null == (jade_interp = "(" + execTime(query.time) + ")") ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "sql.success")
{
jade_debug.unshift(new jade.DebugItem( 27, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 27, "views/history.jade" ));
var query = event.args[0]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "views/history.jade" ));
buf.push("\n        <div class=\"sql success\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, "views/history.jade" ));
buf.push("<code class=\"sql\">" + (jade.escape(null == (jade_interp = "SQL: " + query.sql) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "views/history.jade" ));
buf.push("<span class=\"exec-time\">" + (jade.escape(null == (jade_interp = "(" + execTime(query.time) + ")") ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "connect.success")
{
jade_debug.unshift(new jade.DebugItem( 33, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 33, "views/history.jade" ));
var opts = event.args[1]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "views/history.jade" ));
console.log(event)
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 35, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "Connected to server ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "views/history.jade" ));
if ( opts)
{
jade_debug.unshift(new jade.DebugItem( 37, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 37, "views/history.jade" ));
buf.push("<code class=\"sql\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 38, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = opts.user + (opts.password ? ":*" : "") + "@" + opts.host + ":" + opts.port) ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 39, "views/history.jade" ));
if ( opts.database)
{
jade_debug.unshift(new jade.DebugItem( 40, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 40, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "/" + opts.database) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "connect.error")
{
jade_debug.unshift(new jade.DebugItem( 43, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 43, "views/history.jade" ));
var opts = event.args[1]
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 44, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "Failed connect to server ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 45, "views/history.jade" ));
buf.push("<code class=\"sql\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 46, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = opts.user + (opts.password ? ":*" : "") + "@" + opts.host + ":" + opts.port) ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 47, "views/history.jade" ));
if ( opts.database)
{
jade_debug.unshift(new jade.DebugItem( 48, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 48, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "/" + opts.database) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 49, "views/history.jade" ));
buf.push("<span class=\"error\">" + (jade.escape(null == (jade_interp = event.args[2].message || event.args[2]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "exec.start")
{
jade_debug.unshift(new jade.DebugItem( 52, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 52, "views/history.jade" ));
buf.push("<strong>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 52, jade_debug[0].filename ));
buf.push("Executing");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 53, "views/history.jade" ));
buf.push("\n        <div class=\"exec start\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 54, "views/history.jade" ));
buf.push("<code>" + (jade.escape(null == (jade_interp = event.args[0].command) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( event.type == "exec.finish")
{
jade_debug.unshift(new jade.DebugItem( 54, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 54, "views/history.jade" ));
buf.push("<strong>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 57, jade_debug[0].filename ));
buf.push("Complete");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 58, "views/history.jade" ));
buf.push("\n        <div class=\"exec finish\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 59, "views/history.jade" ));
buf.push("<code>" + (jade.escape(null == (jade_interp = event.args[0].command) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 60, "views/history.jade" ));
buf.push("<span class=\"exec-time\">" + (jade.escape(null == (jade_interp = "(" + execTime(event.args[0].time) + ")") ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 60, "views/history.jade" ));
jade_debug.unshift(new jade.DebugItem( 60, "views/history.jade" ));
buf.push("\n        <div class=\"event\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 61, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = "~") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 62, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = event.type) ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 63, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 64, "views/history.jade" ));
buf.push(jade.escape(null == (jade_interp = JSON.stringify(event.args, null, 2)) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"events" in locals_for_with?locals_for_with.events:typeof events!=="undefined"?events:undefined,"execTime" in locals_for_with?locals_for_with.execTime:typeof execTime!=="undefined"?execTime:undefined,"timeFormat" in locals_for_with?locals_for_with.timeFormat:typeof timeFormat!=="undefined"?timeFormat:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".history-window\n  header\n    button.native-look.reload-btn Reload\n    button.native-look.clear-btn Clear\n  ul\n    each event in events\n      if event.type == \"sql.start\" && event.args[0].state != 'running'\n        - // do nothing\n      else\n        li\n          time= timeFormat(new Date(event.time))\n          .event-info\n            if event.type == \"sql.start\" && event.args[0].state == 'running'\n              - var query = event.args[0]\n              strong Running\n              .sql.running\n                code.sql= \"SQL: \" + query.sql\n\n            else if event.type == \"sql.failed\"\n              - var query = event.args[0]\n              .sql.failed\n                code.sql= \"SQL: \" + query.sql\n                span.error= JSON.stringify(query.error, null, 2)\n                span.exec-time= \"(\" + execTime(query.time) + \")\"\n\n            else if event.type == \"sql.success\"\n              - var query = event.args[0]\n              .sql.success\n                code.sql= \"SQL: \" + query.sql\n                span.exec-time= \"(\" + execTime(query.time) + \")\"\n\n            else if event.type == \"connect.success\"\n              - var opts = event.args[1]\n              - console.log(event)\n              = \"Connected to server \"\n              if opts\n                code.sql\n                  = opts.user + (opts.password ? \":*\" : \"\") + \"@\" + opts.host + \":\" + opts.port\n                  if opts.database\n                    = \"/\" + opts.database\n\n            else if event.type == \"connect.error\"\n              - var opts = event.args[1]\n              = \"Failed connect to server \"\n              code.sql\n                = opts.user + (opts.password ? \":*\" : \"\") + \"@\" + opts.host + \":\" + opts.port\n                if opts.database\n                  = \"/\" + opts.database\n              span.error= event.args[2].message || event.args[2]\n\n            else if event.type == \"exec.start\"\n              strong Executing\n              .exec.start\n                code= event.args[0].command\n\n            else if event.type == \"exec.finish\"\n              strong Complete\n              .exec.finish\n                code= event.args[0].command\n                span.exec-time= \"(\" + execTime(event.args[0].time) + \")\"\n\n            else\n              .event\n                = \"~\"\n                = event.type\n                = \" \"\n                = JSON.stringify(event.args, null, 2)\n");
}
};
exports["history"].content = ".history-window\n  header\n    button.native-look.reload-btn Reload\n    button.native-look.clear-btn Clear\n  ul\n    each event in events\n      if event.type == \"sql.start\" && event.args[0].state != 'running'\n        - // do nothing\n      else\n        li\n          time= timeFormat(new Date(event.time))\n          .event-info\n            if event.type == \"sql.start\" && event.args[0].state == 'running'\n              - var query = event.args[0]\n              strong Running\n              .sql.running\n                code.sql= \"SQL: \" + query.sql\n\n            else if event.type == \"sql.failed\"\n              - var query = event.args[0]\n              .sql.failed\n                code.sql= \"SQL: \" + query.sql\n                span.error= JSON.stringify(query.error, null, 2)\n                span.exec-time= \"(\" + execTime(query.time) + \")\"\n\n            else if event.type == \"sql.success\"\n              - var query = event.args[0]\n              .sql.success\n                code.sql= \"SQL: \" + query.sql\n                span.exec-time= \"(\" + execTime(query.time) + \")\"\n\n            else if event.type == \"connect.success\"\n              - var opts = event.args[1]\n              - console.log(event)\n              = \"Connected to server \"\n              if opts\n                code.sql\n                  = opts.user + (opts.password ? \":*\" : \"\") + \"@\" + opts.host + \":\" + opts.port\n                  if opts.database\n                    = \"/\" + opts.database\n\n            else if event.type == \"connect.error\"\n              - var opts = event.args[1]\n              = \"Failed connect to server \"\n              code.sql\n                = opts.user + (opts.password ? \":*\" : \"\") + \"@\" + opts.host + \":\" + opts.port\n                if opts.database\n                  = \"/\" + opts.database\n              span.error= event.args[2].message || event.args[2]\n\n            else if event.type == \"exec.start\"\n              strong Executing\n              .exec.start\n                code= event.args[0].command\n\n            else if event.type == \"exec.finish\"\n              strong Complete\n              .exec.finish\n                code= event.args[0].command\n                span.exec-time= \"(\" + execTime(event.args[0].time) + \")\"\n\n            else\n              .event\n                = \"~\"\n                = event.type\n                = \" \"\n                = JSON.stringify(event.args, null, 2)\n";
exports["home"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (link_to) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n<div class=\"home-screen\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n  <div class=\"sidebar\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <h4>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("Saved connections");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <ul class=\"connections\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("<a exec=\"addNewConnection\" class=\"add-connection\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Add");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n  <div class=\"main-window\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <form class=\"middle-window plain\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <label for=\"login_host\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("Host");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <input id=\"login_host\" name=\"host\" type=\"text\" value=\"localhost\" placeholder=\"localhost\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <label for=\"login_port\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, jade_debug[0].filename ));
buf.push("Port");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <input id=\"login_port\" name=\"port\" type=\"text\" value=\"5432\" placeholder=\"5432\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <label for=\"login_username\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, jade_debug[0].filename ));
buf.push("Username");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <input id=\"login_username\" name=\"user\" type=\"text\" value=\"\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <label for=\"login_password\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, jade_debug[0].filename ));
buf.push("Password");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <input id=\"login_password\" name=\"password\" type=\"password\" value=\"\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 22, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 23, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <label for=\"login_database\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 23, jade_debug[0].filename ));
buf.push("Database");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 24, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <input id=\"login_database\" name=\"database\" type=\"text\" value=\"\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <input name=\"query\" type=\"hidden\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p class=\"buttons\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <button exec=\"testConnection\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, jade_debug[0].filename ));
buf.push("Test connection");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <button exec=\"saveAndConnect\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 30, jade_debug[0].filename ));
buf.push("Save & connect");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 31, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <input type=\"submit\" value=\"Connect\" autofocus=\"autofocus\" class=\"native-look\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </form>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 33, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <div class=\"middle-window heroku-1\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 34, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <h5>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
buf.push("Heroku login");
jade_debug.shift();
jade_debug.shift();
buf.push("</h5>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <p>" + (null == (jade_interp = link_to("Access with OAuth", '#', {exec: 'startHerokuOAuth'})) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 37, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
//p!= link_to('Access with "$ heroku" command line tool', '#')
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 39, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <div class=\"middle-window heroku-oauth\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 40, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <ul class=\"steps\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 41, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li class=\"access-token\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 41, jade_debug[0].filename ));
buf.push("Grand access");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 42, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li class=\"request-token\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 42, jade_debug[0].filename ));
buf.push("Request Token");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 43, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li class=\"get-apps\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 43, jade_debug[0].filename ));
buf.push("Get applications list");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </ul>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 44, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <ul class=\"apps\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 45, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <ul class=\"steps\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 46, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li class=\"database-url\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 46, jade_debug[0].filename ));
buf.push("Database URL");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 47, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li class=\"connect-db\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 47, jade_debug[0].filename ));
buf.push("Connect to DB");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 49, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <div class=\"middle-window heroku-cl\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 50, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n      <ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 51, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 51, jade_debug[0].filename ));
buf.push("Detect command line utilite");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 52, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n        <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 52, jade_debug[0].filename ));
buf.push("Get applications list");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 54, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("\n    <footer>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 55, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push(null == (jade_interp = link_to("Login with heroku", '#', {exec: 'showHerokuPane1', class: 'login-with-heroku'})) ? "" : jade_interp);
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 56, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push(null == (jade_interp = link_to("Login with password", '#', {exec: 'showPlainPane', class: 'login-with-password'})) ? "" : jade_interp);
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 57, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 58, "/Users/yoonwaiyan/Documents/workspace/postbird/views/home.jade" ));
buf.push("<a class=\"go-to-help\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 58, jade_debug[0].filename ));
buf.push("Get Postgres");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </footer>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"link_to" in locals_for_with?locals_for_with.link_to:typeof link_to!=="undefined"?link_to:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".home-screen\n  .sidebar\n    h4 Saved connections\n    ul.connections\n    a.add-connection(exec=\"addNewConnection\") Add\n\n  .main-window\n    form.middle-window.plain\n      p\n        label(for=\"login_host\") Host\n        input#login_host(name='host', type='text', value='localhost', placeholder='localhost')\n      p\n        label(for=\"login_port\") Port\n        input#login_port(name='port', type='text', value='5432', placeholder='5432')\n      p\n        label(for=\"login_username\") Username\n        input#login_username(name='user', type='text', value='')\n      p\n        label(for=\"login_password\") Password\n        input#login_password(name='password', type='password', value='')\n\n      p\n        label(for=\"login_database\") Database\n        input#login_database(name='database', type='text', value='')\n\n      input(name=\"query\", type=\"hidden\")\n\n      p.buttons\n        button.native-look(exec=\"testConnection\") Test connection\n        button.native-look(exec=\"saveAndConnect\") Save & connect\n        input.native-look(type=\"submit\", value=\"Connect\", autofocus=true)\n\n    .middle-window.heroku-1\n      h5 Heroku login\n\n      p!= link_to(\"Access with OAuth\", '#', {exec: 'startHerokuOAuth'})\n      - //p!= link_to('Access with \"$ heroku\" command line tool', '#')\n\n    .middle-window.heroku-oauth\n      ul.steps\n        li.access-token Grand access\n        li.request-token Request Token\n        li.get-apps Get applications list\n      ul.apps\n      ul.steps\n        li.database-url Database URL\n        li.connect-db Connect to DB\n\n    .middle-window.heroku-cl\n      ul\n        li Detect command line utilite\n        li Get applications list\n\n    footer\n      != link_to(\"Login with heroku\", '#', {exec: 'showHerokuPane1', class: 'login-with-heroku'})\n      != link_to(\"Login with password\", '#', {exec: 'showPlainPane', class: 'login-with-password'})\n      br\n      a.go-to-help Get Postgres\n");
}
};
exports["home"].content = ".home-screen\n  .sidebar\n    h4 Saved connections\n    ul.connections\n    a.add-connection(exec=\"addNewConnection\") Add\n\n  .main-window\n    form.middle-window.plain\n      p\n        label(for=\"login_host\") Host\n        input#login_host(name='host', type='text', value='localhost', placeholder='localhost')\n      p\n        label(for=\"login_port\") Port\n        input#login_port(name='port', type='text', value='5432', placeholder='5432')\n      p\n        label(for=\"login_username\") Username\n        input#login_username(name='user', type='text', value='')\n      p\n        label(for=\"login_password\") Password\n        input#login_password(name='password', type='password', value='')\n\n      p\n        label(for=\"login_database\") Database\n        input#login_database(name='database', type='text', value='')\n\n      input(name=\"query\", type=\"hidden\")\n\n      p.buttons\n        button.native-look(exec=\"testConnection\") Test connection\n        button.native-look(exec=\"saveAndConnect\") Save & connect\n        input.native-look(type=\"submit\", value=\"Connect\", autofocus=true)\n\n    .middle-window.heroku-1\n      h5 Heroku login\n\n      p!= link_to(\"Access with OAuth\", '#', {exec: 'startHerokuOAuth'})\n      - //p!= link_to('Access with \"$ heroku\" command line tool', '#')\n\n    .middle-window.heroku-oauth\n      ul.steps\n        li.access-token Grand access\n        li.request-token Request Token\n        li.get-apps Get applications list\n      ul.apps\n      ul.steps\n        li.database-url Database URL\n        li.connect-db Connect to DB\n\n    .middle-window.heroku-cl\n      ul\n        li Detect command line utilite\n        li Get applications list\n\n    footer\n      != link_to(\"Login with heroku\", '#', {exec: 'showHerokuPane1', class: 'login-with-heroku'})\n      != link_to(\"Login with password\", '#', {exec: 'showPlainPane', class: 'login-with-password'})\n      br\n      a.go-to-help Get Postgres\n";
exports["info_tab"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/info_tab.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, relType, recordsCount, tableSize, code) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/info_tab.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/info_tab.jade" });
buf.push("\n<div class=\"summary\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/info_tab.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/info_tab.jade" });
buf.push("Type: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/info_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = relType) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/info_tab.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/info_tab.jade" });
buf.push("Estimate rows count: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/info_tab.jade" });
buf.push(jade.escape(null == (jade_interp = recordsCount) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/info_tab.jade" });
buf.push("\n  <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/info_tab.jade" });
buf.push("Size on disk: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/info_tab.jade" });
buf.push(jade.escape(null == (jade_interp = tableSize) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/info_tab.jade" });
buf.push("\n<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("Source SQL");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/info_tab.jade" });
buf.push("<code class=\"result sql\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/info_tab.jade" });
buf.push(jade.escape(null == (jade_interp = code) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"relType" in locals_for_with?locals_for_with.relType:typeof relType!=="undefined"?relType:undefined,"recordsCount" in locals_for_with?locals_for_with.recordsCount:typeof recordsCount!=="undefined"?recordsCount:undefined,"tableSize" in locals_for_with?locals_for_with.tableSize:typeof tableSize!=="undefined"?tableSize:undefined,"code" in locals_for_with?locals_for_with.code:typeof code!=="undefined"?code:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".summary\n  p\n    = \"Type: \"\n    strong= relType\n  p\n    = \"Estimate rows count: \"\n    = recordsCount\n  p\n    = \"Size on disk: \"\n    = tableSize\n\nh4 Source SQL\n\ncode.result.sql\n  = code");
}
};
exports["info_tab"].content = ".summary\n  p\n    = \"Type: \"\n    strong= relType\n  p\n    = \"Estimate rows count: \"\n    = recordsCount\n  p\n    = \"Size on disk: \"\n    = tableSize\n\nh4 Source SQL\n\ncode.result.sql\n  = code";
exports["main"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/main.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (icon) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/main.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/main.jade" ));
buf.push("\n<div class=\"main-screen\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/main.jade" ));
buf.push("\n  <div class=\"sidebar\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "views/main.jade" ));
buf.push("\n    <div class=\"databases\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "views/main.jade" ));
buf.push("\n      <label>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("Select database");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "views/main.jade" ));
buf.push("\n      <select>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "views/main.jade" ));
buf.push("\n        <option>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("Select database...");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </select>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "views/main.jade" ));
buf.push("\n    <div class=\"tables without-system-tables\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "views/main.jade" ));
buf.push("\n      <ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "views/main.jade" ));
buf.push("\n      <div class=\"show-system-tables\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "views/main.jade" ));
buf.push("\n        <label>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "views/main.jade" ));
buf.push("\n          <input type=\"checkbox\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/main.jade" ));
buf.push(jade.escape(null == (jade_interp = "Show Schemas") ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </label>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "views/main.jade" ));
buf.push("\n    <ul class=\"extras\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "views/main.jade" ));
buf.push("\n      <li class=\"reload\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "views/main.jade" ));
buf.push("<a class=\"reloadStructure\">" + (null == (jade_interp = icon('reload', 'Reload Tables')) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "views/main.jade" ));
buf.push("\n      <li class=\"add-table\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "views/main.jade" ));
buf.push("<a class=\"addTable\">" + (null == (jade_interp = icon('add-table', 'Add Table')) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "views/main.jade" ));
buf.push("\n      <li tab=\"users\" class=\"users\">" + (null == (jade_interp = icon('users', 'Users')) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "views/main.jade" ));
buf.push("\n      <li tab=\"extensions\" class=\"extensions\">" + (null == (jade_interp = icon('extensions', "Postgres Extensions")) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "views/main.jade" ));
buf.push("\n      <li tab=\"procedures\" class=\"procedures\">" + (null == (jade_interp = icon('procedures', "Procedures")) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </ul>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 22, "views/main.jade" ));
buf.push("\n    <div class=\"resize-handler\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "views/main.jade" ));
buf.push("\n  <div class=\"main\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "views/main.jade" ));
buf.push("\n    <div class=\"window-tabs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 25, "views/main.jade" ));
buf.push("\n      <div tab=\"structure\" class=\"window-tab tab structure\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 25, jade_debug[0].filename ));
buf.push("Structure");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "views/main.jade" ));
buf.push("\n      <div tab=\"content\" class=\"window-tab tab content\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 26, jade_debug[0].filename ));
buf.push("Content");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "views/main.jade" ));
buf.push("\n      <div tab=\"info\" class=\"window-tab tab info\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 27, jade_debug[0].filename ));
buf.push("Info");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "views/main.jade" ));
buf.push("\n      <div tab=\"query\" class=\"window-tab tab query\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 28, jade_debug[0].filename ));
buf.push("Query");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "views/main.jade" ));
buf.push("\n      <!--.tab.triggers(tab='triggers') Triggers-->");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "views/main.jade" ));
buf.push("\n    <div class=\"clearfix\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 32, "views/main.jade" ));
buf.push("\n    <div class=\"window-content structure\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 33, "views/main.jade" ));
buf.push("\n    <div class=\"window-content content\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "views/main.jade" ));
buf.push("\n    <div class=\"window-content info\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 35, "views/main.jade" ));
buf.push("\n    <div class=\"window-content query\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "views/main.jade" ));
buf.push("\n    <div class=\"window-content triggers\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 37, "views/main.jade" ));
buf.push("\n    <div class=\"window-content users\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 38, "views/main.jade" ));
buf.push("\n    <div class=\"window-content extensions\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 39, "views/main.jade" ));
buf.push("\n    <div class=\"window-content procedures\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"icon" in locals_for_with?locals_for_with.icon:typeof icon!=="undefined"?icon:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".main-screen\n  .sidebar\n    .databases\n      label Select database\n      select\n        option Select database...\n    .tables.without-system-tables\n      ul\n      .show-system-tables\n        label\n          input(type=\"checkbox\")\n          = \"Show Schemas\"\n\n    ul.extras\n      li.reload\n        a.reloadStructure!= icon('reload', 'Reload Tables')\n      li.add-table\n        a.addTable!= icon('add-table', 'Add Table')\n      li.users(tab='users')!= icon('users', 'Users')\n      li.extensions(tab='extensions')!= icon('extensions', \"Postgres Extensions\")\n      li.procedures(tab='procedures')!= icon('procedures', \"Procedures\")\n    .resize-handler\n  .main\n    .window-tabs\n      .window-tab.tab.structure(tab='structure') Structure\n      .window-tab.tab.content(tab='content') Content\n      .window-tab.tab.info(tab='info') Info\n      .window-tab.tab.query(tab='query') Query\n      //.tab.triggers(tab='triggers') Triggers\n    .clearfix\n\n    .window-content.structure\n    .window-content.content\n    .window-content.info\n    .window-content.query\n    .window-content.triggers\n    .window-content.users\n    .window-content.extensions\n    .window-content.procedures");
}
};
exports["main"].content = ".main-screen\n  .sidebar\n    .databases\n      label Select database\n      select\n        option Select database...\n    .tables.without-system-tables\n      ul\n      .show-system-tables\n        label\n          input(type=\"checkbox\")\n          = \"Show Schemas\"\n\n    ul.extras\n      li.reload\n        a.reloadStructure!= icon('reload', 'Reload Tables')\n      li.add-table\n        a.addTable!= icon('add-table', 'Add Table')\n      li.users(tab='users')!= icon('users', 'Users')\n      li.extensions(tab='extensions')!= icon('extensions', \"Postgres Extensions\")\n      li.procedures(tab='procedures')!= icon('procedures', \"Procedures\")\n    .resize-handler\n  .main\n    .window-tabs\n      .window-tab.tab.structure(tab='structure') Structure\n      .window-tab.tab.content(tab='content') Content\n      .window-tab.tab.info(tab='info') Info\n      .window-tab.tab.query(tab='query') Query\n      //.tab.triggers(tab='triggers') Triggers\n    .clearfix\n\n    .window-content.structure\n    .window-content.content\n    .window-content.info\n    .window-content.query\n    .window-content.triggers\n    .window-content.users\n    .window-content.extensions\n    .window-content.procedures";
exports["procedures_tab"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/procedures_tab.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, procs, triggers) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/procedures_tab.jade" });
buf.push("\n<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("Procedures");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/procedures_tab.jade" });
buf.push("\n<table class=\"native-look-table\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/procedures_tab.jade" });
buf.push("\n  <thead>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/procedures_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("return type");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("arguments");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("language");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("extension");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </thead>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/procedures_tab.jade" });
buf.push("\n  <tbody>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/procedures_tab.jade" });
// iterate procs
;(function(){
  var $$obj = procs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var proc = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/procedures_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/procedures_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = proc.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.return_type) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.arg_list) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.language) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.extension) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/procedures_tab.jade" });
if ( proc.language != "c" && proc.language != 'internal')
{
jade_debug.unshift({ lineno: 23, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 23, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "editProc('" + proc.oid + "', '" + proc.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "procDefinition('" + proc.oid + "', '" + proc.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Source");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "removeProc('" + proc.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var proc = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/procedures_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/procedures_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = proc.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.return_type) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.arg_list) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.language) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = proc.extension) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/procedures_tab.jade" });
if ( proc.language != "c" && proc.language != 'internal')
{
jade_debug.unshift({ lineno: 23, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 23, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "editProc('" + proc.oid + "', '" + proc.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "procDefinition('" + proc.oid + "', '" + proc.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Source");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "removeProc('" + proc.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</table>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/procedures_tab.jade" });
buf.push("\n<footer>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "views/procedures_tab.jade" });
//button.native-look(exec="addColumnForm") Create Procedure
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/procedures_tab.jade" });
//button.native-look(exec="addColumnForm") Create Trigger
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/procedures_tab.jade" });
buf.push("\n  <button exec=\"listLanguages\" class=\"native-look\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("List Languages");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</footer>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/procedures_tab.jade" });
buf.push("\n<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("Triggers And Constraints");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/procedures_tab.jade" });
buf.push("\n<table class=\"native-look-table\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "views/procedures_tab.jade" });
buf.push("\n  <thead>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "views/procedures_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("Name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("Table");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("Procedure");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("Event");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "views/procedures_tab.jade" });
buf.push("\n      <th title=\"Deferrable\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("Deferr.");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/procedures_tab.jade" });
buf.push("\n      <th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </thead>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "views/procedures_tab.jade" });
buf.push("\n  <tbody>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "views/procedures_tab.jade" });
// iterate triggers
;(function(){
  var $$obj = triggers;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var trigger = $$obj[$index];

jade_debug.unshift({ lineno: 46, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 47, filename: "views/procedures_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 48, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/procedures_tab.jade" });
if ( trigger.constraint_name)
{
jade_debug.unshift({ lineno: 50, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 50, filename: "views/procedures_tab.jade" });
buf.push("<strong title=\"Constraint\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("C");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/procedures_tab.jade" });
buf.push(jade.escape(null == (jade_interp = trigger.constraint_name) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 54, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 54, filename: "views/procedures_tab.jade" });
buf.push(jade.escape(null == (jade_interp = trigger.name) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.table_name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.proc_name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.typeDesc().join(", ")) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.tgdeferrable ? "Yes" : "No") ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "editTrigger('" + trigger.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "removeTrigger('" + trigger.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var trigger = $$obj[$index];

jade_debug.unshift({ lineno: 46, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 47, filename: "views/procedures_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 48, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/procedures_tab.jade" });
if ( trigger.constraint_name)
{
jade_debug.unshift({ lineno: 50, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 50, filename: "views/procedures_tab.jade" });
buf.push("<strong title=\"Constraint\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("C");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/procedures_tab.jade" });
buf.push(jade.escape(null == (jade_interp = trigger.constraint_name) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 54, filename: "views/procedures_tab.jade" });
jade_debug.unshift({ lineno: 54, filename: "views/procedures_tab.jade" });
buf.push(jade.escape(null == (jade_interp = trigger.name) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.table_name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.proc_name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.typeDesc().join(", ")) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = trigger.tgdeferrable ? "Yes" : "No") ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "views/procedures_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "editTrigger('" + trigger.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "views/procedures_tab.jade" });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "views/procedures_tab.jade" });
buf.push("<a" + (jade.attr("exec", "removeTrigger('" + trigger.name + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</table>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "views/procedures_tab.jade" });
buf.push("\n<footer>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "views/procedures_tab.jade" });
//button.native-look(exec="addColumnForm") Create Trigger
jade_debug.shift();
jade_debug.shift();
buf.push("\n</footer>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"procs" in locals_for_with?locals_for_with.procs:typeof procs!=="undefined"?procs:undefined,"triggers" in locals_for_with?locals_for_with.triggers:typeof triggers!=="undefined"?triggers:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h4 Procedures\n\ntable.native-look-table\n  thead\n    tr\n      th name\n      th return type\n      th arguments\n      th language\n      th extension\n      th\n  tbody\n    each proc in procs\n      tr\n        td\n          strong= proc.name\n        td= proc.return_type\n        td= proc.arg_list\n        td= proc.language\n        td= proc.extension\n        td\n          if proc.language != \"c\" && proc.language != 'internal'\n            a(exec=\"editProc('\" + proc.oid + \"', '\" + proc.name + \"')\") Edit\n            != \"&nbsp;\"\n            a(exec=\"procDefinition('\" + proc.oid + \"', '\" + proc.name + \"')\") Source\n            != \"&nbsp;\"\n          a(exec=\"removeProc('\" + proc.name + \"')\") Delete\n\nfooter\n  - //button.native-look(exec=\"addColumnForm\") Create Procedure\n  - //button.native-look(exec=\"addColumnForm\") Create Trigger\n  button.native-look(exec=\"listLanguages\") List Languages\n\nh4 Triggers And Constraints\n\ntable.native-look-table\n  thead\n    tr\n      th Name\n      th Table\n      th Procedure\n      th Event\n      th(title=\"Deferrable\") Deferr.\n      th\n  tbody\n    each trigger in triggers\n      tr\n        td\n          if trigger.constraint_name\n            strong(title=\"Constraint\") C\n            != \"&nbsp;\"\n            = trigger.constraint_name\n          else\n            = trigger.name\n        td= trigger.table_name\n        td= trigger.proc_name\n        td= trigger.typeDesc().join(\", \")\n        td= trigger.tgdeferrable ? \"Yes\" : \"No\"\n        td\n          a(exec=\"editTrigger('\" + trigger.name + \"')\") Edit\n          != \"&nbsp;\"\n          a(exec=\"removeTrigger('\" + trigger.name + \"')\") Delete\n\nfooter\n  - //button.native-look(exec=\"addColumnForm\") Create Trigger\n");
}
};
exports["procedures_tab"].content = "h4 Procedures\n\ntable.native-look-table\n  thead\n    tr\n      th name\n      th return type\n      th arguments\n      th language\n      th extension\n      th\n  tbody\n    each proc in procs\n      tr\n        td\n          strong= proc.name\n        td= proc.return_type\n        td= proc.arg_list\n        td= proc.language\n        td= proc.extension\n        td\n          if proc.language != \"c\" && proc.language != 'internal'\n            a(exec=\"editProc('\" + proc.oid + \"', '\" + proc.name + \"')\") Edit\n            != \"&nbsp;\"\n            a(exec=\"procDefinition('\" + proc.oid + \"', '\" + proc.name + \"')\") Source\n            != \"&nbsp;\"\n          a(exec=\"removeProc('\" + proc.name + \"')\") Delete\n\nfooter\n  - //button.native-look(exec=\"addColumnForm\") Create Procedure\n  - //button.native-look(exec=\"addColumnForm\") Create Trigger\n  button.native-look(exec=\"listLanguages\") List Languages\n\nh4 Triggers And Constraints\n\ntable.native-look-table\n  thead\n    tr\n      th Name\n      th Table\n      th Procedure\n      th Event\n      th(title=\"Deferrable\") Deferr.\n      th\n  tbody\n    each trigger in triggers\n      tr\n        td\n          if trigger.constraint_name\n            strong(title=\"Constraint\") C\n            != \"&nbsp;\"\n            = trigger.constraint_name\n          else\n            = trigger.name\n        td= trigger.table_name\n        td= trigger.proc_name\n        td= trigger.typeDesc().join(\", \")\n        td= trigger.tgdeferrable ? \"Yes\" : \"No\"\n        td\n          a(exec=\"editTrigger('\" + trigger.name + \"')\") Edit\n          != \"&nbsp;\"\n          a(exec=\"removeTrigger('\" + trigger.name + \"')\") Delete\n\nfooter\n  - //button.native-look(exec=\"addColumnForm\") Create Trigger\n";
exports["query_tab"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/query_tab.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/query_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/query_tab.jade" ));
buf.push("\n<div class=\"editing\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/query_tab.jade" ));
buf.push("\n  <textarea class=\"editor\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "views/query_tab.jade" ));
buf.push("\n<div class=\"middlebar\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "views/query_tab.jade" ));
buf.push("\n  <div class=\"resizer\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "views/query_tab.jade" ));
buf.push("\n  <button exec=\"runQuery\" title=\"Cmd+R\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Run Query");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "views/query_tab.jade" ));
buf.push("\n  <button exec=\"showHistory\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("See History");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "views/query_tab.jade" ));
buf.push("\n  <button exec=\"openSnippets\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("Snippets");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "views/query_tab.jade" ));
buf.push("\n  <button exec=\"cleanButtonClick\" class=\"native-look is-hidden cleanButton\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Clear");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "views/query_tab.jade" ));
buf.push("\n<div class=\"result\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "views/query_tab.jade" ));
buf.push("\n  <div class=\"rescol-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "views/query_tab.jade" ));
buf.push("\n    <div class=\"rescol-header-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/query_tab.jade" ));
buf.push("\n    <div class=\"rescol-content-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "views/query_tab.jade" ));
buf.push("\n      <table>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "views/query_tab.jade" ));
buf.push("\n  <div class=\"status\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".editing\n  textarea.editor\n.middlebar\n  .resizer\n  button.native-look(exec=\"runQuery\" title=\"Cmd+R\") Run Query\n  button.native-look(exec=\"showHistory\") See History\n  button.native-look(exec=\"openSnippets\") Snippets\n  button.native-look.is-hidden.cleanButton(exec=\"cleanButtonClick\") Clear\n.result\n  .rescol-wrapper\n    .rescol-header-wrapper\n    .rescol-content-wrapper\n      table\n  .status");
}
};
exports["query_tab"].content = ".editing\n  textarea.editor\n.middlebar\n  .resizer\n  button.native-look(exec=\"runQuery\" title=\"Cmd+R\") Run Query\n  button.native-look(exec=\"showHistory\") See History\n  button.native-look(exec=\"openSnippets\") Snippets\n  button.native-look.is-hidden.cleanButton(exec=\"cleanButtonClick\") Clear\n.result\n  .rescol-wrapper\n    .rescol-header-wrapper\n    .rescol-content-wrapper\n      table\n  .status";
exports["snippet_preview"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/snippet_preview.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, snippet) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/snippet_preview.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/snippet_preview.jade" });
buf.push("\n<div class=\"preview-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/snippet_preview.jade" });
buf.push("\n  <p>" + (jade.escape(null == (jade_interp = snippet.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/snippet_preview.jade" });
buf.push("<code class=\"result sql\">" + (jade.escape(null == (jade_interp = snippet.sql) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</code>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/snippet_preview.jade" });
buf.push("\n  <button exec=\"insert\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Insert to Editor");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"snippet" in locals_for_with?locals_for_with.snippet:typeof snippet!=="undefined"?snippet:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".preview-content\n  p= snippet.description\n\n  code.result.sql= snippet.sql\n\n  button(exec=\"insert\") Insert to Editor\n");
}
};
exports["snippet_preview"].content = ".preview-content\n  p= snippet.description\n\n  code.result.sql= snippet.sql\n\n  button(exec=\"insert\") Insert to Editor\n";
exports["snippets"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/snippets.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, snippets) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/snippets.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/snippets.jade" });
buf.push("\n<div class=\"snippets-window\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/snippets.jade" });
buf.push("\n  <ul>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/snippets.jade" });
// iterate snippets
;(function(){
  var $$obj = snippets;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var snippet = $$obj[name];

jade_debug.unshift({ lineno: 3, filename: "views/snippets.jade" });
jade_debug.unshift({ lineno: 4, filename: "views/snippets.jade" });
buf.push("\n    <li" + (jade.attr("snippet", name, true, false)) + ">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var snippet = $$obj[name];

jade_debug.unshift({ lineno: 3, filename: "views/snippets.jade" });
jade_debug.unshift({ lineno: 4, filename: "views/snippets.jade" });
buf.push("\n    <li" + (jade.attr("snippet", name, true, false)) + ">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/snippets.jade" });
buf.push("\n  <div class=\"preview\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/snippets.jade" });
buf.push("\n  <footer>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</footer>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"snippets" in locals_for_with?locals_for_with.snippets:typeof snippets!=="undefined"?snippets:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".snippets-window\n  ul\n    each snippet, name in snippets\n      li(snippet=name)= name\n  .preview\n  footer\n");
}
};
exports["snippets"].content = ".snippets-window\n  ul\n    each snippet, name in snippets\n      li(snippet=name)= name\n  .preview\n  footer\n";
exports["structure_tab"] = function template(jade, locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/structure_tab.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (column_type_label, getIndexType, indexes, is_mat_view, rows, undefined) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "views/structure_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/structure_tab.jade" ));
buf.push("\n<div class=\"rescol-wrapper with-borders indexes-list-table\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/structure_tab.jade" ));
buf.push("\n  <div class=\"rescol-header-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "views/structure_tab.jade" ));
buf.push("\n  <div class=\"rescol-content-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "views/structure_tab.jade" ));
buf.push("\n    <table>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "views/structure_tab.jade" ));
buf.push("\n      <thead>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "views/structure_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("column");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("type");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
buf.push("max length");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("default");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("primary key");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, jade_debug[0].filename ));
buf.push("Null");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </thead>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "views/structure_tab.jade" ));
buf.push("\n      <tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "views/structure_tab.jade" ));
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "views/structure_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "views/structure_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.column_name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column_type_label(column)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.character_maximum_length) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = ('' + column.column_default).match(/^nextval/) ? 'auto increment' : column.column_default) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.is_primary_key ? 'yes' : '') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 22, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.is_nullable == 'YES' ? 'yes' : 'no') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "views/structure_tab.jade" ));
buf.push("\n          <td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "views/structure_tab.jade" ));
buf.push("<a" + (jade.attr("exec", "editColumn('" + column.column_name + "')", true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, jade_debug[0].filename ));
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "views/structure_tab.jade" ));
buf.push(null == (jade_interp = "&nbsp;") ? "" : jade_interp);
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "views/structure_tab.jade" ));
buf.push("<a" + (jade.attr("exec", "deleteColumn('" + column.column_name + "')", true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 26, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "views/structure_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "views/structure_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.column_name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column_type_label(column)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.character_maximum_length) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = ('' + column.column_default).match(/^nextval/) ? 'auto increment' : column.column_default) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.is_primary_key ? 'yes' : '') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 22, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = column.is_nullable == 'YES' ? 'yes' : 'no') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "views/structure_tab.jade" ));
buf.push("\n          <td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "views/structure_tab.jade" ));
buf.push("<a" + (jade.attr("exec", "editColumn('" + column.column_name + "')", true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, jade_debug[0].filename ));
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "views/structure_tab.jade" ));
buf.push(null == (jade_interp = "&nbsp;") ? "" : jade_interp);
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "views/structure_tab.jade" ));
buf.push("<a" + (jade.attr("exec", "deleteColumn('" + column.column_name + "')", true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 26, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n      </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </table>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "views/structure_tab.jade" ));
buf.push("\n<footer>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, "views/structure_tab.jade" ));
if ( !is_mat_view)
{
jade_debug.unshift(new jade.DebugItem( 30, "views/structure_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 30, "views/structure_tab.jade" ));
buf.push("\n  <button exec=\"addColumnForm\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 30, jade_debug[0].filename ));
buf.push("Add column");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n</footer>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 32, "views/structure_tab.jade" ));
buf.push("\n<h4>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 32, jade_debug[0].filename ));
buf.push("Indexes");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "views/structure_tab.jade" ));
buf.push("\n<div class=\"rescol-wrapper with-borders columns-list-table\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 35, "views/structure_tab.jade" ));
buf.push("\n  <div class=\"rescol-header-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "views/structure_tab.jade" ));
buf.push("\n  <div class=\"rescol-content-wrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 37, "views/structure_tab.jade" ));
buf.push("\n    <table>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 38, "views/structure_tab.jade" ));
buf.push("\n      <thead>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 39, "views/structure_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 40, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 40, jade_debug[0].filename ));
buf.push("name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 41, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 41, jade_debug[0].filename ));
buf.push("p. key");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 42, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 42, jade_debug[0].filename ));
buf.push("uniq");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 43, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 43, jade_debug[0].filename ));
buf.push("columns");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 44, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 44, jade_debug[0].filename ));
buf.push("type");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 45, "views/structure_tab.jade" ));
buf.push("\n          <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </thead>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 46, "views/structure_tab.jade" ));
buf.push("\n      <tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 47, "views/structure_tab.jade" ));
// iterate indexes
;(function(){
  var $$obj = indexes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var index = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 47, "views/structure_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 48, "views/structure_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 49, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.relname) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 50, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.indisprimary ? 'Yes' : 'No') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 51, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.indisunique ? 'Yes' : 'No') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 52, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.pg_get_indexdef.match(/ON [^\(]+\((.+)\)/)[1]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 53, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = getIndexType(index.pg_get_indexdef)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 54, "views/structure_tab.jade" ));
buf.push("\n          <td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 55, "views/structure_tab.jade" ));
buf.push("<a" + (jade.attr("exec", "deleteIndex('" + index.relname + "')", true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 55, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var index = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 47, "views/structure_tab.jade" ));
jade_debug.unshift(new jade.DebugItem( 48, "views/structure_tab.jade" ));
buf.push("\n        <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 49, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.relname) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 50, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.indisprimary ? 'Yes' : 'No') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 51, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.indisunique ? 'Yes' : 'No') ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 52, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = index.pg_get_indexdef.match(/ON [^\(]+\((.+)\)/)[1]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 53, "views/structure_tab.jade" ));
buf.push("\n          <td>" + (jade.escape(null == (jade_interp = getIndexType(index.pg_get_indexdef)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 54, "views/structure_tab.jade" ));
buf.push("\n          <td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 55, "views/structure_tab.jade" ));
buf.push("<a" + (jade.attr("exec", "deleteIndex('" + index.relname + "')", true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 55, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n      </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </table>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 57, "views/structure_tab.jade" ));
buf.push("\n<footer>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 58, "views/structure_tab.jade" ));
buf.push("\n  <button exec=\"addIndexForm\" class=\"native-look\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 58, jade_debug[0].filename ));
buf.push("Add index");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</footer>");
jade_debug.shift();
jade_debug.shift();}.call(this,"column_type_label" in locals_for_with?locals_for_with.column_type_label:typeof column_type_label!=="undefined"?column_type_label:undefined,"getIndexType" in locals_for_with?locals_for_with.getIndexType:typeof getIndexType!=="undefined"?getIndexType:undefined,"indexes" in locals_for_with?locals_for_with.indexes:typeof indexes!=="undefined"?indexes:undefined,"is_mat_view" in locals_for_with?locals_for_with.is_mat_view:typeof is_mat_view!=="undefined"?is_mat_view:undefined,"rows" in locals_for_with?locals_for_with.rows:typeof rows!=="undefined"?rows:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".rescol-wrapper.with-borders.indexes-list-table\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    table\n      thead\n        tr\n          th column\n          th type\n          th max length\n          th default\n          th primary key\n          th Null\n          th\n      tbody\n        each column in rows\n          tr\n            td= column.column_name\n            td= column_type_label(column)\n            td= column.character_maximum_length\n            td= ('' + column.column_default).match(/^nextval/) ? 'auto increment' : column.column_default\n            td= column.is_primary_key ? 'yes' : ''\n            td= column.is_nullable == 'YES' ? 'yes' : 'no'\n            td\n              a(exec=\"editColumn('\" + column.column_name + \"')\") Edit\n              != \"&nbsp;\"\n              a(exec=\"deleteColumn('\" + column.column_name + \"')\") Delete\n\nfooter\n  if !is_mat_view\n    button.native-look(exec=\"addColumnForm\") Add column\n\nh4 Indexes\n\n.rescol-wrapper.with-borders.columns-list-table\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    table\n      thead\n        tr\n          th name\n          th p. key\n          th uniq\n          th columns\n          th type\n          th\n      tbody\n        each index in indexes\n          tr\n            td= index.relname\n            td= index.indisprimary ? 'Yes' : 'No'\n            td= index.indisunique ? 'Yes' : 'No'\n            td= index.pg_get_indexdef.match(/ON [^\\(]+\\((.+)\\)/)[1]\n            td= getIndexType(index.pg_get_indexdef)\n            td\n              a(exec=\"deleteIndex('\" + index.relname + \"')\") Delete\n\nfooter\n  button.native-look(exec=\"addIndexForm\") Add index");
}
};
exports["structure_tab"].content = ".rescol-wrapper.with-borders.indexes-list-table\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    table\n      thead\n        tr\n          th column\n          th type\n          th max length\n          th default\n          th primary key\n          th Null\n          th\n      tbody\n        each column in rows\n          tr\n            td= column.column_name\n            td= column_type_label(column)\n            td= column.character_maximum_length\n            td= ('' + column.column_default).match(/^nextval/) ? 'auto increment' : column.column_default\n            td= column.is_primary_key ? 'yes' : ''\n            td= column.is_nullable == 'YES' ? 'yes' : 'no'\n            td\n              a(exec=\"editColumn('\" + column.column_name + \"')\") Edit\n              != \"&nbsp;\"\n              a(exec=\"deleteColumn('\" + column.column_name + \"')\") Delete\n\nfooter\n  if !is_mat_view\n    button.native-look(exec=\"addColumnForm\") Add column\n\nh4 Indexes\n\n.rescol-wrapper.with-borders.columns-list-table\n  .rescol-header-wrapper\n  .rescol-content-wrapper\n    table\n      thead\n        tr\n          th name\n          th p. key\n          th uniq\n          th columns\n          th type\n          th\n      tbody\n        each index in indexes\n          tr\n            td= index.relname\n            td= index.indisprimary ? 'Yes' : 'No'\n            td= index.indisunique ? 'Yes' : 'No'\n            td= index.pg_get_indexdef.match(/ON [^\\(]+\\((.+)\\)/)[1]\n            td= getIndexType(index.pg_get_indexdef)\n            td\n              a(exec=\"deleteIndex('\" + index.relname + \"')\") Delete\n\nfooter\n  button.native-look(exec=\"addIndexForm\") Add index";
exports["users_tab"] = function template(jade, locals) {
var jade_debug = [{ lineno: 1, filename: "views/users_tab.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, rows, currentUser) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/users_tab.jade" });
buf.push("\n<table class=\"native-look-table\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/users_tab.jade" });
buf.push("\n  <thead>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/users_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/users_tab.jade" });
buf.push("\n      <th width=\"70\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Role name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/users_tab.jade" });
buf.push("\n      <th width=\"25%\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("List of roles");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/users_tab.jade" });
buf.push("\n      <th width=\"50\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Member of");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/users_tab.jade" });
buf.push("\n      <th width=\"25%\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Owned Databases");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/users_tab.jade" });
buf.push("\n      <th width=\"50\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </thead>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/users_tab.jade" });
buf.push("\n  <tbody>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/users_tab.jade" });
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

jade_debug.unshift({ lineno: 10, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/users_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/users_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/users_tab.jade" });
if ( currentUser == user.rolname)
{
jade_debug.unshift({ lineno: 14, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/users_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = user.rolname) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/users_tab.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/users_tab.jade" });
buf.push("<small>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("(current user)");
jade_debug.shift();
jade_debug.shift();
buf.push("</small>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 18, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 18, filename: "views/users_tab.jade" });
buf.push(jade.escape(null == (jade_interp = user.rolname) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/users_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = user.roles.join(', ')) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/users_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = user.memberof) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/users_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = user.owned_dbs) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/users_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "views/users_tab.jade" });
buf.push("<a" + (jade.attr("exec", "editUser('" + user.rolname + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/users_tab.jade" });
buf.push(" ");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/users_tab.jade" });
buf.push("<a" + (jade.attr("exec", "deleteUser('" + user.rolname + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

jade_debug.unshift({ lineno: 10, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/users_tab.jade" });
buf.push("\n    <tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/users_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/users_tab.jade" });
if ( currentUser == user.rolname)
{
jade_debug.unshift({ lineno: 14, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/users_tab.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = user.rolname) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/users_tab.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/users_tab.jade" });
buf.push("<small>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("(current user)");
jade_debug.shift();
jade_debug.shift();
buf.push("</small>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 18, filename: "views/users_tab.jade" });
jade_debug.unshift({ lineno: 18, filename: "views/users_tab.jade" });
buf.push(jade.escape(null == (jade_interp = user.rolname) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/users_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = user.roles.join(', ')) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/users_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = user.memberof) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/users_tab.jade" });
buf.push("\n      <td>" + (jade.escape(null == (jade_interp = user.owned_dbs) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/users_tab.jade" });
buf.push("\n      <td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "views/users_tab.jade" });
buf.push("<a" + (jade.attr("exec", "editUser('" + user.rolname + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/users_tab.jade" });
buf.push(" ");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/users_tab.jade" });
buf.push("<a" + (jade.attr("exec", "deleteUser('" + user.rolname + "')", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</table>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/users_tab.jade" });
buf.push("\n<footer>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "views/users_tab.jade" });
buf.push("\n  <button exec=\"newUserDialog\" class=\"native-look createUserBtn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("Create new user");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/users_tab.jade" });
buf.push("\n  <!--button.native-look.createRoleBtn(exec=\"newRole\") Create new role-->");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</footer>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"rows" in locals_for_with?locals_for_with.rows:typeof rows!=="undefined"?rows:undefined,"currentUser" in locals_for_with?locals_for_with.currentUser:typeof currentUser!=="undefined"?currentUser:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "table.native-look-table\n  thead\n    tr\n      th(width=\"70\") Role name\n      th(width=\"25%\") List of roles\n      th(width=\"50\") Member of\n      th(width=\"25%\") Owned Databases\n      th(width=\"50\")\n  tbody\n    each user in rows\n      tr\n        td\n          if currentUser == user.rolname\n            strong= user.rolname\n            br\n            small (current user)\n          else\n            = user.rolname\n        td= user.roles.join(', ')\n        td= user.memberof\n        td= user.owned_dbs\n        td\n          a(exec=\"editUser('\" + user.rolname + \"')\") Edit\n          = \" \"\n          a(exec=\"deleteUser('\" + user.rolname + \"')\") Delete\n\nfooter\n  button.native-look.createUserBtn(exec=\"newUserDialog\") Create new user\n  //button.native-look.createRoleBtn(exec=\"newRole\") Create new role");
}
};
exports["users_tab"].content = "table.native-look-table\n  thead\n    tr\n      th(width=\"70\") Role name\n      th(width=\"25%\") List of roles\n      th(width=\"50\") Member of\n      th(width=\"25%\") Owned Databases\n      th(width=\"50\")\n  tbody\n    each user in rows\n      tr\n        td\n          if currentUser == user.rolname\n            strong= user.rolname\n            br\n            small (current user)\n          else\n            = user.rolname\n        td= user.roles.join(', ')\n        td= user.memberof\n        td= user.owned_dbs\n        td\n          a(exec=\"editUser('\" + user.rolname + \"')\") Edit\n          = \" \"\n          a(exec=\"deleteUser('\" + user.rolname + \"')\") Delete\n\nfooter\n  button.native-look.createUserBtn(exec=\"newUserDialog\") Create new user\n  //button.native-look.createRoleBtn(exec=\"newRole\") Create new role";
