import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Spinner from "./Spinner";
// import Card from "./Card";

const Blogs = () => {

    const { loading, posts } = useContext(AppContext);
    return (
        <div className="w-11/12 max-w-[500px] py-3 mx-auto flex flex-col gap-y-4 mt-14">
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? (
                        <div className="text-center">
                            <h1>No Blogs Found</h1>
                        </div>
                    ) :
                        posts.map((post) => {
                            return <div key={post.id} className="">
                                <p className="font-bold text-lg ">{post.title}</p>
                                <p className="text-[14px]">
                                    By <span className="italic">{post.author}</span> or{" "}
                                    <span className="underline font-bold">{post.category}</span>
                                </p>
                                <p className="text-[14px]">Posted on {post.date}</p>
                                <p className="text-[16px] mt-[13px]">{post.content}</p>
                                <div className="flex flex-wrap gap-x-2 items-center">
                                    {post.tags.map((tag, index) => {
                                        return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>;
                                    })}
                                </div>
                            </div>;
                        })
                )
            }
        </div>
    )
}

export default Blogs;