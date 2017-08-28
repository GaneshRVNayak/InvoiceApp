using Microsoft.EntityFrameworkCore;
namespace InvoiceApp.Models
{
	public class InvoiceContext : DbContext
	{
		public InvoiceContext(DbContextOptions<InvoiceContext> options)
			: base(options)
		{
		}

		public DbSet<InvoiceApp.Models.Invoice> Invoice { get; set; }
        public DbSet<InvoiceApp.Models.InvoiceDetail> InvoiceDetail { get; set; }

	}
}
