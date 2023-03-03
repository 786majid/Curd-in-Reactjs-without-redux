// // it is EmployeeList's code  
// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Form } from 'react-bootstrap'

// const EmployeeList = () => {
//     const [value, setValue] = useState({                                                                                   //it is for add item at table from the user.and value keyword k andr mera all value jaa raha hai                                          
//         name: "",                                                                                                          // user ne  value naam ke keyword me hi input(information) daal rha h,but ye input data naam k keyword me ja(store) rha h fir  jb id lgte hai to ye total information data naam k keyword se item naam k keyword me chla ja rha hai.mtlb item naam ka keyword ab mera final object bn gya,ab isko insertSave naam ke fn me direct save kr de rhe h.  
//         email: "",
//         address: "",
//         phone: ""
//     });

//     const [show, setShow] = useState(false);                                                                                // for popup
//     const [data, setData] = useState([]);
//     const [item, setItem] = useState({})                                                                                      //we make a new object (item k naam se)jse hi me save krunga to item ke andr mera id leke jyega.means hr time(save) pe ek new id leke mera pura value(information) iske andr(item) chla jyega.ab mera final object item keyword ban gaya.ab is object(item) ko array ke andr push karna hoga.it means item ko browser me dikhane k liye le jaa rhe h 

//     //for insert/create
//     const insertSave = () => {                                                                                             //insertSave keyword  for insert the data/value
//         setItem({
//             id: Math.floor((Math.random() * 100) + 1),
//             name: value.name,                                                                                              // iska mtlb value naam ke object me jo user ne  name daala hoga wo name is name me chla jyega(set ho jyega).
//             email: value.email,                                                                                            // iska mtlb value naam ke object me jo user ne  email daala hoga wo email is email me chla jyega(set ho jyega).
//             address: value.address,
//             phone: value.phone
//         })

//         // for set/save  the input inside insertSave fn.
//         setData([...data, item]);                                                                                          // data naam ke object me gye or item naam k object ko pass kr diye
//         handleClose()                                                                                                      //direct data  me value save kr diye (that is yhn mne data save kiya)
//     };

//     // for edit
//     const handleEdit = (val) => {                                                                                          // it is for put up the data inside the popup. 
//         handleShow();                                                                                                      // it is for open popup inside handleEdit fn.
//         setValue({                                                                                                          //it is putup the value which is already inserted by user previously in that row  
//             id: val.id,
//             name: val.name,
//             email: val.email,
//             address: val.address,
//             phone: val.phone
//         });                                                                                                                // after it we have to set/save the value after edit.
//     }

//     //  for delete
//     const handleDelete = (val) => {
//         const Delete = data.filter((op) => {                                                                                // this block is for delete the data from table
//             return op.id !== val.id;
//         })
//         setData(Delete);
//     }

//     // for update
//     const handleUpdate = () => {
//         var item = data.map((option) => {
//             if (value.id == option.id) {                                                                                      //value ka id agr array ke id(option.id)se equal ho jaye to hm wo previous data(information) ko is new wale data(information) se replace kr de rhe h
//                 return {
//                     ...option,
//                     id: value.id,
//                     name: value.name,
//                     email: value.email,
//                     phone: value.phone,
//                     address: value.address,
//                 }
//             }
//             return option;
//         })
//         setData(item);                                                                                                      //it is my main array(item)
//         handleClose()
//     }

//     // close the popup
//     const handleClose = () => {                                                                                             // false value means don't show the popup     
//         setShow(false);                                                                                                       //handleshow for open popup 
//     }

//     const handleShow = () => (setShow(true), setValue({}));                                                                 //it is for empty value inside the popup that is(setValue({}))                                                                                    
//     return (                                                                                                                 // setShow = true for show the popup
//         <>
//             <div className="table-title">
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <h2>Manage <b>Employees</b></h2>
//                     </div>
//                     <div className="col-sm-6">

//                     </div>
//                 </div>
//             </div>

//             <table class="table table-striped table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((val) => (
//                             <tr >
//                                 <td>{val.name}</td>
//                                 <td>{val.email}</td>
//                                 <td>{val.address}</td>
//                                 <td>{val.phone}</td>
//                                 <td>
//                                     <button className="btn text-warning btn-act" onClick={() => handleEdit(val)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
//                                     <button className="btn text-danger btn-act" onClick={() => handleDelete(val)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
//                                 </td>

//                             </tr>
//                         ))
//                     }


//                 </tbody>
//             </table>
//             <>
//                 {/* // for model */}
//                 <Button variant="primary" onClick={handleShow}> Add New </Button>
//                 {/* //for form */}
//                 <Modal show={show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Add Employee</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form.Group>
//                             <Form.Control
//                                 type='hidden'
//                                 placeholder='Name *'
//                                 value={value.id}
//                                 onChange={(e) => {
//                                     console.log(e)
//                                     setValue({ ...value, id: e.target.value })
//                                 }}
//                             />
//                             <Form.Control
//                                 type='text'
//                                 placeholder='Name *'
//                                 required
//                                 value={value.name}
//                                 onChange={(e) => {
//                                     setValue({ ...value, name: e.target.value })
//                                 }}
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Control
//                                 type='email'
//                                 placeholder='Email *'
//                                 required
//                                 value={value.email}
//                                 onChange={(e) => {
//                                     setValue({ ...value, email: e.target.value })
//                                 }}
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Control
//                                 as='textarea'
//                                 placeholder='Address'
//                                 value={value.address}
//                                 onChange={(e) => {
//                                     setValue({ ...value, address: e.target.value })
//                                 }}
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Control
//                                 type='text'
//                                 placeholder='Phone'
//                                 value={value.phone}
//                                 onChange={(e) => {
//                                     setValue({ ...value, phone: e.target.value })
//                                 }}
//                             />

//                         </Form.Group>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}> Close </Button>

//                         {/* //if else condition */}
//                         {value.id ? (                                                          // it means agr mere pas id rha to ye fn ==>handleUpdate 
//                             <Button variant="primary" onClick={handleUpdate}> Update </Button>
//                         ) : (
//                             <Button variant="primary" onClick={insertSave}> Insert </Button>
//                         )}

//                     </Modal.Footer>
//                 </Modal>
//             </>
//         </>
//     )
// }

// export default EmployeeList;



