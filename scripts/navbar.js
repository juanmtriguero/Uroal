$(function() {

	// Responsive collapse navbar
	if ($(window).width() < 768) {
		$("#mecanica").append("&nbsp;MECÁNICA");
		$("#electricidad").append("&nbsp;ELECTRICIDAD");
		$("#engrase").append("&nbsp;ENGRASE");
		$("#neumaticos").append("&nbsp;NEUMÁTICOS");
		$("#frenos").append("&nbsp;FRENOS");
		$("#suspension").append("&nbsp;SUSPENSIÓN");
		$("#escapes").append("&nbsp;ESCAPES");
		$("#mant").append("&nbsp;MANTENIMIENTO");
		$("#diagnosis").append("&nbsp;DIAGNOSIS");
		$("#pre-itv").append("&nbsp;PRE-ITV");
	}

});