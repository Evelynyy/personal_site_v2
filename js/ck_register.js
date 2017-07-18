function ck_username($el, value, callback) {
  callback({
    value: value,
    valid: /^[A-Za-z]{4,20}$/.test(value),
    message: "用户名必须为4~20位的英文字母"
  });
}

function ck_pwd($el, value, callback) {
  callback({
    value: value,
    valid: /^[a-zA-Z]\w{5,17}$/.test(value),
    message: "密码必须以字母开头，长度在6~18之间，只能包含字符、数字和下划线。"
  });
}
function ck_tel($el, value, callback) {
  callback({
    value: value,
    valid: /^1[3,9][0-9]{9}$/.test(value),
    message: "请输入正确的手机号码。"
  });
}

$(function () {
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
} );