using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace InvoiceApp.Models
{
    public class Invoice
    {
        [Required]
        public int ID { get; set; }

        [Required]
        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$", ErrorMessage = "Please enter a valid name starting with capital letter and without numbers & special characters")]
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }
		
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
		[Display(Name = "Due Date")]
		[DataType(DataType.Date)]
		public DateTime DueDate { get; set; }

        public List<InvoiceDetail> InvoiceDetails { get { return _invoiceDetails; } }

        private List<InvoiceDetail> _invoiceDetails = new List<InvoiceDetail>();
    }

    public class InvoiceDetail
    {
        [Required]
        public string Description { get; set; }

        [Required]
        public float Amount { get; set; }

    }
}