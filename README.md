# companyApi

# Short description
This project is a combination of Ruby => Sinatra and angularJs.
The project is a API that contains information about a company and a front-end client. 
A company contains these variables:
* Company ID (required)
* Company Name (required)
* Address (required)
* City (required)
* Country (required)
* Owners (required)
* Email (optional)
* Phone number (optional)


You can interact with the Api through the client side https://client-company.herokuapp.com/
Or through cURL commands.

# cURL commands
* Post command: `curl -i -X POST -H "Content-Type: application/json" -d'{"companyID":"<insert variable>", "companyName":"<isert variable>", "address":"<insert variable>", "city":"<insert variable>","country":"<insert variable>","owners":"<insert variable>","email":"<insert variable (optional>","phoneNumber":"<insert variable (optional)>"}' https://morning-headland-92448.herokuapp.com/api/v1/companies`

* Patch command, decided to use Patch instead of PUT, so the user have the option to update one parameter without needing to insert the rest of the parameters: `curl -i -X PATCH -H "Content-Type: application/json" -d '{"<insert parameter>":"<insert variable>"}' https://morning-headland-92448.herokuapp.com/api/v1/companies/{companyID}` 
