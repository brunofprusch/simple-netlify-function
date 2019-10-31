const messageService = require('./utils/service')

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: messageService.getMessage()
    }
}