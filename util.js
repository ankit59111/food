function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateEmailRules(email,rules){
if(rules.required){
    if(!email){
        return{
            statusCode: 400,
            msg:"failed",
            msgToBeDisplayed:"Email cannot be empty"
        }
    }
}else if(rules.type){
    if(!validateEmail(email)){
        return {
            statusCode: 400,
            msg:"failed",
            msgToBeDisplayed:"Email not valid"
        }
    }
}
}

module.exports = {
    validateEmail,
    validateEmailRules
}