import React from "react";
import styled from "styled-components";


const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts /postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div>
            <div>
                {pageNumbers.map(number => (
                    <div key={number} >
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Pagination;
