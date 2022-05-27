export function validator(data,config){
    const errors={}
    function validate(validateMethod,data,config){
        let statusValidate
        switch (validateMethod) {
            case "isRequired":
                statusValidate=data.trim()===''
                break;
            case "isNumber":
                const numberDecrem=String(data);
                statusValidate=numberDecrem.charAt(0)!=="+"&&numberDecrem.charAt(0)!=="8"
                break
            case "isCapitalSymbol":
                const capitalRegExp=/[A-Z]+/g
                const capitalRusRegExp=/[А-Я]+/g
                statusValidate=!capitalRegExp.test(data)&&!capitalRusRegExp.test(data)
                break
            case "isContainDigit":
                const digitRepgExp=/\d+/g
                statusValidate=!digitRepgExp.test(data)
                break
            case "min":
                statusValidate=data.length<config.value
                break
            case "minTel":
                statusValidate=data.length<config.value
                break
            default:
                break
        }
        if(statusValidate) return config.message
    }
    for(const fieldName in data){
        for(const validateMethod in config[fieldName]){
            const error=validate(validateMethod,data[fieldName],config[fieldName][validateMethod])
            if(error&&!errors[fieldName]){
                errors[fieldName]= error
            }
        }
    }
    return errors
}