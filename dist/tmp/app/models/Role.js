"use strict";
var Role = (function () {
    function Role(id, roleName, roleCode) {
        if (id === void 0) { id = -1; }
        if (roleName === void 0) { roleName = ''; }
        if (roleCode === void 0) { roleCode = ''; }
        this.id = id;
        this.roleName = roleName;
        this.roleCode = roleCode;
    }
    return Role;
}());
exports.Role = Role;
