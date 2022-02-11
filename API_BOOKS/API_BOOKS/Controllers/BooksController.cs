using API_BOOKS.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace API_BOOKS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                using var client = new HttpClient();
                client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api/v1/Books");
                string book = await response.Content.ReadAsStringAsync();
                Book[] books = JsonConvert.DeserializeObject<Book[]>(book);
                return Ok(books);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            };
        }
        
        [HttpGet("{id}", Name = "GetBook")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                using var client = new HttpClient();
                client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api/v1/Books/"+id.ToString());
                string book = await response.Content.ReadAsStringAsync();
                Book bookData = JsonConvert.DeserializeObject<Book>(book);
                return Ok(bookData);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Book book)
        {
            try
            {
                using var client = new HttpClient();
                client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.PostAsJsonAsync("api/v1/Books", book);
                return CreatedAtRoute("GetBook", new { id = book.Id }, book);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Book book)
        {
            try
            {
                using var client = new HttpClient();
                client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.PutAsJsonAsync("api/v1/Books/"+id.ToString(), book);
                return Content(response.StatusCode.ToString());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                using var client = new HttpClient();
                client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.DeleteAsync("api/v1/Books/" + id.ToString());
                return Content(response.StatusCode.ToString());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
