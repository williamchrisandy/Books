/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/
import React, { Component } from "react";
import Card from "./Card";

export default class BookList extends Component
{

    constructor()
    {
        super();
        this.state =
        {
            data: null
        };
    }

    componentDidMount()
    {
        const nimMhs = "2301862941";
        const namaMhs = "William Chrisandy";

        fetch("https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book?nim=" + nimMhs + "&nama=" + namaMhs)
        .then(res => res.json())
        .then((data) => {this.setState({data: data})})
        .catch(console.log);
    }
  
    render()
    {
        let books = null;
        
        if(this.state.data != null)
        {
            books = 
            this.state.data.products.map
            (
                book =>
                {
                    return(
                        <div className="w-100 rounded" key={book.id}>
                            <Card book={book}></Card>
                        </div>
                    );
                }
            );
        }

        return(
            <div>
                {books}
            </div>
        );
    }
}