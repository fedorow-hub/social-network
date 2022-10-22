import React from "react";
import styles from "./Paginator.module.css"

let Paginator = (props) => {

    let countPage = Math.ceil(props.countUsers / props.pageSize);

    let pages =[];

    for(let i = 1; i <= countPage; i++){
        pages.push(i)
    }
    return (
        <div className={styles.pagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}><span className={styles.page}>{p}</span></span>
            })}
        </div>
    )
}

export default Paginator;