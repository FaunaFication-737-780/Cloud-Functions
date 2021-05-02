const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const discovery = new DiscoveryV1({
        version: '2019-04-30',
        authenticator: new IamAuthenticator({
            apikey: WqipI59T3pPZlTshaCoalrdNcrcp0k8vKuAaJcZSdOdp
            }),
        serviceUrl: '{https://api.us-south.discovery.watson.cloud.ibm.com/instances/20965335-5ee4-4058-b3c0-ef976fc70e09}',
        
    });
const queryParams = {
    environmentId: '{system}',
    collectionId: '{news-en}',
    //query: 'host::abc.net.au text:Quokka'
    url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/20965335-5ee4-4058-b3c0-ef976fc70e09/v1/environments/system/collections/news-en/query?version=2018-12-03&filter=text%3A%22Quokka%22&deduplicate=false&highlight=true&passages=true&passages.count=5&query=host%3A%3Aabc.net.au'
    
};



function main(params) {
    discovery.query(queryParams)
    .then(queryResponse => {
      return(JSON.stringify(queryResponse));
    })
    .catch(err => {
      return(err);
    });
}
