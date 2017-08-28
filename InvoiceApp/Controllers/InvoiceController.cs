using InvoiceApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace InvoiceApp.Controllers
{
    public class InvoiceController : Controller
    {
        // GET: Invoices
        public ActionResult Index()
        {
            return View("Index", _invoices);
        }

        // GET: Invoices/Create
        public ActionResult Create()
        {
            Invoice invoiceViewModel = new Invoice();
            invoiceViewModel.ID = _invoices.Count;
            return View(invoiceViewModel);
        }

        // POST: Invoices/Create
        [HttpPost]
        public ActionResult Create(Invoice invoiceViewModel)
        {
            if (!ModelState.IsValid)
            {
                return View("Create", invoiceViewModel);
            }

            _invoices.Add(invoiceViewModel);

            return RedirectToAction("Index");
        }

        // GET: Invoices/Edit
        public ActionResult Edit(int invoiceID)
        {
            Invoice invoiceViewModel = _invoices[invoiceID];
            return View("Edit", invoiceViewModel);
        }

        // POST: Invoices/Edit
        [HttpPost]
        public ActionResult Edit(Invoice invoiceViewModel)
        {
            if (!ModelState.IsValid)
            {
                return View("Edit", invoiceViewModel);
            }
                
            _invoices[invoiceViewModel.ID] = invoiceViewModel;

            return RedirectToAction("Index");
        }

        private static List<Invoice> _invoices = new List<Invoice>();
    }
}
