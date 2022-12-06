/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/
import React, { Component } from "react";

export default class Card extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            book: props.book
        };
    }

    render()
    {
        return(
            <div className="card my-5">
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                        <img src={this.state.book.img} className="img-fluid rounded-start" alt="Book Image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.book.name}</h5>
                            <p className="card-text fw-bold ">Author: {this.state.book.author}</p>
                            <p className="card-text">{this.state.book.description}</p>
                            <p className="card-text m-0"><small className="text-muted">Type: {this.state.book.type}</small></p>
                            <p className="card-text m-0"><small className="text-muted">Category: {this.state.book.category}</small></p>
                            <p className="card-text m-0"><small className="text-muted">Price: ${this.state.book.price}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}