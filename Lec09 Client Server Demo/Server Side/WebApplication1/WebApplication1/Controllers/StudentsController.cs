using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Student[]> Get()
        {
            try
            {
                return Ok(DBMockStudents.students.ToArray());
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Get(int id)
        {
            try
            {
                Student val = DBMockStudents.students.FirstOrDefault(stu => stu.Id == id);
                if (val == null)
                {
                    return NotFound($"student with id {id} was not found in the Get by Id action!");
                }
                return Ok(val);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Post([FromBody] Student student)
        {
            try
            {
                if (student == null)
                {
                    return BadRequest();
                }
                else if (student.Id != 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }

                student.Id = DBMockStudents.students.Max(stu => stu.Id) + 1;
                DBMockStudents.students.Add(student);

                return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Put(int id, [FromBody] Student student)
        {
            try
            {
                if (student == null || student.Id != id)
                {
                    return BadRequest();
                }

                Student val = DBMockStudents.students.FirstOrDefault(stu => stu.Id == id);
                if (val == null)
                {
                    return NotFound($"student with id {id} was not found in the Put action!");
                }

                val.Name = student.Name;
                val.Grade = student.Grade;

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Delete(int id)
        {
            try
            {
                if (id == 0)
                {
                    return BadRequest();
                }

                Student val = DBMockStudents.students.FirstOrDefault(stu => stu.Id == id);
                if (val == null)
                {
                    return NotFound($"student with id {id} was not found in the Delete action!");
                }

                DBMockStudents.students.Remove(val);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}
