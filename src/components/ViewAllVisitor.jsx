import React from 'react'
import NavBar from './NavBar'

const ViewAllVisitor = () => {
    return (
        <div>
            <NavBar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Whom to meet</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>inquiry</td>
                                    <td>Principle</td>
                                    <td>24-09-2024</td>
                                    <td>3:00pm</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>admission</td>
                                    <td>Councelor</td>
                                    <td>02-12-2024</td>
                                    <td>2:00pm</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Janice</td>
                                    <td>Hamel</td>
                                    <td>admission</td>
                                    <td>Councelor</td>
                                    <td>05-12-2024</td>
                                    <td>1:30pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllVisitor