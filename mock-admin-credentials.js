/**
  *
  * main() will be invoked when you Run This Action.
  *
  * @param Cloud Functions actions accept a single parameter,
  *        which must be a JSON object.
  *
  * In this case, the params variable will look like:
  *     { "name": "xxxx" }
  *
  * @return which must be a JSON object.
  *         It will be the output of this action.
  *
  */

//https://us-south.functions.appdomain.cloud/api/v1/web/brycewilkinson43%40gmail.com_dev/fake-admin/helloworld.json
function main(params) {
  
  return { username: 'admin1', password: 'password1' };
}

exports.main = main;
