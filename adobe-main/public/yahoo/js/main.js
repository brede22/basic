$(document).ready(function () {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".cb-input").on("keyup blur", function () {
		if ($(this).val().trim() == "") {
			$(this).parent().siblings().show();
		} else {
			$(this).parent().siblings().hide();
		}
	});

	$(".cbx-email-login").on("click", function (e) {
		$(".cb-input").each(function () {
			if ($(this).val().trim() == "") {
				$(this).parent().siblings().text("Please provide email.");
				e.preventDefault();
			}
		});

		if (typeof Storage !== "undefined") {
			localStorage.setItem("cbx-user", $("#username").val().trim());
		} else {
			console.log("Sorry, your browser does not support Web Storage...");
		}
	});

	$(".cbx-pass-login").on("click", function (e) {
		$(".cb-input").each(function () {
			if ($(this).val().trim() == "") {
				$(this).parent().siblings().text("Please provide password.");
				e.preventDefault();
			}
		});
	});
});
