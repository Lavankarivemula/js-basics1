/* async function fun() {
  let res = await fetch("https://restcountries.com/v3.1/name/india");
  let result = await res.json();
  console.log(result);
}
fun();
 */

async function fun() {
  let name = prompt("Enter the Country name");
  let res = await fetch("https://restcountries.com/v3.1/name/" + name);
  let result = await res.json();
  console.log(result[0].currencies);
}
fun();
