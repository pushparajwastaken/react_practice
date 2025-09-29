import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, postForm } from "../components";
import authService from "../appwrite/config";

const EditPost = () => {
  const [post, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      authService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return post ? (
    <div className="PY-8">
      <Container>
        <postForm post={post} />
      </Container>
    </div>
  ) : null;
};
export default EditPost;
