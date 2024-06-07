import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 cl-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Book Title</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">Published Year</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Sherlock Holmes</td>
                                            <td>Arthur Conan Doyale</td>
                                            <td>2004</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Aadujeevitham</td>
                                            <td>Benyamin</td>
                                            <td>2007</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Aadujeevitham</td>
                                            <td>Benyamin</td>
                                            <td>2007</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Sherlock Holmes</td>
                                            <td>Arthur Conan Doyale</td>
                                            <td>2004</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Tintu Mon Jokes</td>
                                            <td>Manu</td>
                                            <td>2010</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Sherlock Holmes</td>
                                            <td>Arthur Conan Doyale</td>
                                            <td>2004</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Tintu Mon Jokes</td>
                                            <td>Manu</td>
                                            <td>2010</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Tintu Mon Jokes</td>
                                            <td>Manu</td>
                                            <td>2010</td>
                                            <td>150</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll