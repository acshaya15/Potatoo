import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from "../features/admin";

function PostForm() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.admin);

  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleAddPost = () => {
 
    const imageUrl = 'https://example.com/path-to-uploaded-image.jpg';

    const newPost = {
      id: loggedInUser, 
      caption,
      imageUrl,
    };

    dispatch(addPost(newPost));
    setCaption('');
    setImage(null);
  };

  return (
    <div>
      <h2>Add Post</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default PostForm;
