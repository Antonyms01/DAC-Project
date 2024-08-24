using Emart.Models;
using Emart.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

public class InvoiceService : IInvoiceService
{
    private readonly EmartDBContext _context;

    public InvoiceService(EmartDBContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Invoice>> GetAllInvoicesAsync()
    {
        return await _context.invoices
            .Include(i => i.user)
            .ToListAsync();
    }

    public async Task<Invoice?> GetInvoiceByIdAsync(int id)
    {
        return await _context.invoices
            .Include(i => i.user)
            .FirstOrDefaultAsync(i => i.invoiceid == id);
    }

    public async Task<Invoice> CreateInvoiceAsync(Invoice invoice)
    {
        _context.invoices.Add(invoice);
        await _context.SaveChangesAsync();
        return invoice;
    }

    public async Task<Invoice> UpdateInvoiceAsync(Invoice invoice)
    {
        _context.invoices.Update(invoice);
        await _context.SaveChangesAsync();
        return invoice;
    }

    public async Task<bool> DeleteInvoiceAsync(int id)
    {
        var invoice = await _context.invoices.FindAsync(id);
        if (invoice == null)
        {
            return false;
        }

        _context.invoices.Remove(invoice);
        await _context.SaveChangesAsync();
        return true;
    }
}
