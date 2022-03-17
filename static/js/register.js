$("#formValidation").validate({
    rules:{
        firstname:{
            minLength:2
        }
    },
    messages: {
        required: "Please enter your firstname",
        minlength: 'Firstname at least 2 characters'
    },

})

console.log('sdad')