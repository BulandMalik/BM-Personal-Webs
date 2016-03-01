$.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var check = false;
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
);

$("Textbox").rules("add", { regex: "^[a-zA-Z'.\s]{1,40}$" })