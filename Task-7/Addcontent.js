import { React, useState } from "react";

import { useNavigate } from 'react-router-dom';

function AddContent({ data, setData }) {

    let navigate = useNavigate();

    let [user, setUser] = useState("");
    let [productName, setProductName] = useState("");
    let [noOfProduct, setNoOfProduct] = useState("");
    let [Due, setDue] = useState("");
    let [status, setStatus] = useState("");

    let handleSave = () => {
        data.push(
            {
                user,
                productName,
                noOfProduct,
                Due,
                status,
            }
        )
        console.log(data)
        navigate('/ProductAndUsers')
    }



    return <div>
        <h1>Add User</h1>
        <form>
            <div class="form-group">
                <label for="exampleInputPassword1">User Name</label>
                <input type="text" class="form-control" onChange={(e) => setUser(e.target.value)} placeholder="Enter Name" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Product Name</label>
                <input type="text" class="form-control" onChange={(e) => setProductName(e.target.value)} placeholder="Enter Product" />

            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">No Of Product</label>
                <input type="number" class="form-control" onChange={(e) => setNoOfProduct(e.target.value)} placeholder="Enter No of Product" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Due</label><br />
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio1" onClick={() => { setDue("Paid"); console.log(setStatus) }} id="btnpaid" autocomplete="off" />
                    <label class="btn btn-outline-success" for="btnpaid">Paid</label>

                    <input type="radio" class="btn-check" name="btnradio1" onClick={() => setDue("Not Paid")} id="btnnotpaid" autocomplete="off" />
                    <label class="btn btn-outline-danger" for="btnnotpaid">Not Paid</label>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Status</label><br />
                {/* <input type="text" class="form-control" onChange={(e) => setStatus(e.target.value)} placeholder="Enter Status" /> */}
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" onClick={() => { setStatus("Pending"); console.log(setStatus) }} id="btnradio1" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btnradio1">Pending</label>

                    <input type="radio" class="btn-check" name="btnradio" onClick={() => setStatus("In-progress")} id="btnradio2" autocomplete="off" />
                    <label class="btn btn-outline-secondary" for="btnradio2">In-progress</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" onClick={() => setStatus("Completed")} autocomplete="off" />
                    <label class="btn btn-outline-success" for="btnradio3">Completed</label>

                </div>
            </div>

            <button onClick={handleSave} class="btn btn-primary">Submit</button>
        </form>

    </div>;
}

export default AddContent;