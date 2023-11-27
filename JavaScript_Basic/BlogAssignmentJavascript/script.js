

document.addEventListener('DOMContentLoaded', () => {
    fetchBlogPosts();
  });
  
  function fetchBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    displayBlogPosts(storedPosts);
  }
  
  function displayBlogPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  function submitForm() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (title && content) {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      const newPost = {
        id: Date.now(),
        title,
        content,
      };
  
      storedPosts.push(newPost);
      localStorage.setItem('blogPosts', JSON.stringify(storedPosts));
  
      fetchBlogPosts();
      resetForm();
    }
  }
  
  function editPost(id) {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postToEdit = storedPosts.find(post => post.id === id);
  
    if (postToEdit) {
      document.getElementById('title').value = postToEdit.title;
      document.getElementById('content').value = postToEdit.content;
  
      const submitBtn = document.querySelector('button');
      submitBtn.innerText = 'Update';
      submitBtn.onclick = () => updatePost(postToEdit.id);
    }
  }
  
  function updatePost(id) {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (title && content) {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      const index = storedPosts.findIndex(post => post.id === id);
  
      if (index !== -1) {
        storedPosts[index] = { id, title, content };
        localStorage.setItem('blogPosts', JSON.stringify(storedPosts));
  
        fetchBlogPosts();
        resetForm();
      }
    }
  }
  
  function deletePost(id) {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = storedPosts.filter(post => post.id !== id);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  
    fetchBlogPosts();
  }
  
  function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    const submitBtn = document.querySelector('button');
    submitBtn.innerText = 'Submit';
    submitBtn.onclick = submitForm;
  }
  