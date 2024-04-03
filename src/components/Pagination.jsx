import React from "react";
import { useContext } from 'react'
import { AppContext } from "../context/AppContext";

const Pagination = () => {

    const { page, handlerPageChange, totalPages} = useContext(AppContext);
    return (
        <div className="w-full flex justify-center items-center border-2 py-1 fixed bottom-0 bg-slate-300">
            <div className="flex justify-between w-11/12 max-w-[500px]">
                <div className="flex gap-x-2">
                    {page > 1 &&
                        <button 
                        className="rounded-md bg-slate-200 px-5 py-2 border"
                        onClick={()=> handlerPageChange(page-1)}>
                            Previous
                        </button>
                    }
                    {page < totalPages &&
                        <button 
                        className="rounded-md bg-slate-200 px-5 py-2 border "
                        onClick={()=> handlerPageChange(page+1) }>
                            Next
                        </button>
                    }
                </div>
                
                <p className="font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination;