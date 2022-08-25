exports.handler = async function(){
  const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }
  return {
    statusCode: 200, 
    body: JSON.stringify({
      message: 'Hello World'
    }),
    headers: CORS_HEADERS
  }
}