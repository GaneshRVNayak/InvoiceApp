# Simple Invoicing Application

**Hosting**

This project is hosted in Azure and below is the link to test
http://invoicingapplication.azurewebsites.net/

**Functionality:**

- Creating an invoice
- View list of invoices created
- Edit a invoice
- Preview a invoice

**Technologies used:**

- C#, Microsoft .net 4.5 framework
- Javascript, Razor html and jQuery
- css - bootstrap

**Implementation details:**

*Back-end:*

Services are created using Microsoft MVC web api. The APIs are REST based. 
Support exists for follwoing HTTP methods on invoice resouce:
 GET : for getting list of invoices and a particular invoice
 POST : for creating an invoice
 PUT : for updating an invoice
 
*Front-end:*
 
 Razor HTML based forms (view) that talks to MVC rest based APIs to render the information and also posts the data to the server using the REST APIs. Razor views provides auto binding to the server Models.

