<html>
<h1>Cypress Cucumber BDD Automation of an eCommerce Application</h1>

<h2>Setup & Installation</h2>

<p>Clone git repository or download zip file</p>
<p>Go to cypress_bdd_ecommerce folder</p>

<h3>Run command to open Cypress Features Explorer:</h3>
<p>"npx cypress open": All features test files are shown. Select required test for execution.</p>
<p>"npx cypress run addToCart.feature" to run only Add To Cart test</p>
<p>"npm run lumaSearchProduct.feature" to run only search a product test</p>
<p>"npx cypress run lumaEcommerceLogin.feature" to run only Login test</p>
<h3>"Execute test scripts and generate mochawesome reporter</h3>
<p>"npx cypress run --reporter mochawesome" to run all tests with mochawesome reports generation</p>

<h3>Merge generated Mochawesome Reports:</h3>
<p>Run the command to merge all generated files to one file i.e. output.json.</p>
<p>npx mochawesome-merge "cypress/results/*.json" -o output.json</p>

<h3>Generate HTML reports from merged output.json file:</h3>
<p>Run the command in terminal to generate output.html from output.json file via marge option.</p>
<p>npx marge "C:\cypress_BDD_cucumber\output.json"</p>

<h3>Run Tests (github workflow)</h3>

<p>Go to cypress_bdd_ecommerce repository</p>
<p>Go to Actions</p>
<p>Click on "On Demand Test"</p>
<p>Click on "Run workflow"</p>
<p>Enter following details</p>
<p>Select "main" branch</p>
<p>Select any browser (eg. chrome)</p>
<p>Click on "Run workflow" green button</p>

</html>