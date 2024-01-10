import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const CourseCreateForm = ({ values, handleChange, setValues, handleSubmit,handleImage,preview }) => 

{
    


    return (


        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name of the Course"
              value={values.name}
              onChange={handleChange}
            />
          </Form.Group>
      
          <Form.Group>
            <Form.Control
              as="textarea"
              name="description"
              rows="7"
              value={values.description}
              placeholder="Description"
              onChange={handleChange}
            />
          </Form.Group>
      
          <Form.Group>
  <Form.Label>Course Pricing</Form.Label>
  <Form.Select onChange={(e) => setValues({ ...values, paid: e.target.value === "true" })} defaultValue="Choose...">
    <option value="true">Paid</option>
    <option value="false">Free</option>
  </Form.Select>
  {values.paid && (
    <div className="col-md-6">
      <div className="form-group">
        <select defaultValue="499" style={{ width: "100%" }} onChange={(e) => setValues({ ...values, price: e.target.value })}>
          <option value="499">Rs.499</option>
          <option value="599">Rs.599</option>
          <option value="999">Rs.999</option>
          <option value="1499">Rs.1499</option>
          <option value="1999">Rs.1999</option>
          <option value="2499">Rs.2499</option>
          <option value="2999">Rs.2999</option>
        </select>
      </div>
    </div>
  )}
</Form.Group>


      
<Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload an Image</Form.Label>
        <Form.Control type="file" onChange={handleImage} />
        {preview && (
          <div className="mt-2">
            <p>Image Preview:</p>
            <img src={preview} alt="Image Preview" style={{ maxWidth: "5%", height: "auto" }} />
          </div>
        )}
      </Form.Group>
      
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}


export default CourseCreateForm;
