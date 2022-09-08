// functions/hello-world.js
// domain/.netlify/functions/hello
const items = [
  {id:'1',name:'banda'}, 
  {id:'2',name:'mthee'}, 
]
exports.handler = async function (event,context) {
  return {
    statusCode: 200,
    body: "Hello World",
  }
}