$(function () {
	AOS.init({
		disable : "phone",
		// offset : -100,
	});


	$('[data-fancybox]').fancybox({
		loop: true,
	});

	// $('a[data-rel^=lightcase]').lightcase({
	// 	swipe: true,
	// 	showCaption: false,
	// });

	// lightbox.option({
	// 	'alwaysShowNavOnTouchDevices': true,
	// 	'wrapAround': true,
	// 	'disableScrolling': true,
	// })



	function modal() {
		$(".add__review").click(function () {
			$(".modal").addClass("active")
		})

		function close() {
			$(".modal").removeClass("active")
		}

		$(".modal").click( function(e) {
			var target = e.target;
			if(target.classList.contains("modal__close")) {
				close()
			}
			if(target.classList.contains("modal")) {
				close()
			}
		})

		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function (e) {
					$('.file img').attr('src', e.target.result).css("display", "block");
				};
				reader.readAsDataURL(input.files[0]);
			}
		}

		$(".modal .input__file").on("change", function () {
			readURL(this);
		});

		$(".modal form").submit(function (e) {
			e.preventDefault()
			$(this).removeClass("active");
			$(".send__window").addClass("active");
			$(".modal .name__input").val("")
			$(".modal .modal__area").val("")
			$(".modal .file img").attr("src", "").css("display", "none")
			delayClose()
		})
		function delayClose() {
			setTimeout(function () {
				$(".modal form").addClass("active");
				$(".send__window").removeClass("active");
				close();
			}, 5000);
		}
	}

	modal()


})



