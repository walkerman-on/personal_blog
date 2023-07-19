import React from 'react';
import {getPagesArray} from "../utils/pages"

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className = "pageNumber">
            {pagesArray.map(number => 
                <span 
                    onClick = {() => changePage(number)}
                    key = {number} 
                    className = {page === number ? "page page__current" : "page"}>
                    {number}
                </span>
          // <MyButton className = {page === number ? "page__current" : "scsc"}>{number}</MyButton>
            )}
        </div>
    )
}

export default Pagination