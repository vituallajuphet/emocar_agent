import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchPosts}  from "../../store/actions/postActions"
import styled from "styled-components";
import PropTypes from "prop-types"

const PostContent = styled.li`
    width: 100%;
    padding: 10px;
    background: #cec0c0;
    color: #fff;
    margin: 0 0 10px;
    span{
        font-weight:bold;
    }
    p{
       margin:10px 0 0;
    }
`;


function Entries(props) {

    useEffect( () => {
        props.fetchPosts();
    }, [])


    return (
        <div>
           <ul>
            {props.posts.map(post => (
                <PostContent key={post.id}>
                    Title: <span>{post.title}</span>
                    <p>{post.body}</p>
                 </PostContent>
            ))}
           </ul>

        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.items
})

Entries.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchPosts})(Entries)
