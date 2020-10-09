import React from 'react'

function Table() {
    return (
        <div>
             <table className="table">
                 <tr className="table__header">
                     <th scope="col">#</th>
                     <th scope="col">Name</th>
                     <th scope="col">Phone</th>
                     <th scope="col">Address</th>
                     <th scope="col">Website</th>
                 </tr>
                 <tr classname="table__data">
                     <td scope="row">1</td>
                     <td scope="row">Smith & Co</td>
                     <td scope="row">01412234567</td>
                     <td scope="row">67 Some Street, London</td>
                     <td scope="row">talk@email.com</td>
                 </tr>
             </table> 
        </div>
    );
};

export default Table
