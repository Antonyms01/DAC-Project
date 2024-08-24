using Emart.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class InvoiceController : ControllerBase
{
    private readonly IInvoiceService _invoiceService;

    public InvoiceController(IInvoiceService invoiceService)
    {
        _invoiceService = invoiceService;
    }

    // GET: api/Invoice
    [HttpGet]
    public async Task<IActionResult> GetAllInvoices()
    {
        var invoices = await _invoiceService.GetAllInvoicesAsync();
        return Ok(invoices);
    }

    // GET: api/Invoice/{id}
    [HttpGet("{id}")]
    public async Task<IActionResult> GetInvoiceById(int id)
    {
        var invoice = await _invoiceService.GetInvoiceByIdAsync(id);
        if (invoice == null)
        {
            return NotFound();
        }
        return Ok(invoice);
    }

    // POST: api/Invoice
    [HttpPost]
    public async Task<IActionResult> CreateInvoice([FromBody] Invoice invoice)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var createdInvoice = await _invoiceService.CreateInvoiceAsync(invoice);
        return CreatedAtAction(nameof(GetInvoiceById), new { id = createdInvoice.invoiceid }, createdInvoice);
    }

    // PUT: api/Invoice/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateInvoice(int id, [FromBody] Invoice invoice)
    {
        if (id != invoice.invoiceid)
        {
            return BadRequest("Invoice ID mismatch");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        await _invoiceService.UpdateInvoiceAsync(invoice);
        return NoContent();
    }

    // DELETE: api/Invoice/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteInvoice(int id)
    {
        var success = await _invoiceService.DeleteInvoiceAsync(id);
        if (!success)
        {
            return NotFound();
        }

        return NoContent();
    }
}
