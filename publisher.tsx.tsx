"use client";

import React, { useState } from "react";

// Define the Job interface
interface Job {
  id: number;
  title: string;
  description: string;
  category: string;
  image: File | null;
  location: string;
  date: string;
}

const JobManagement = () => {
  const [jobPosts, setJobPosts] = useState<Job[]>([]); // Explicitly typing jobPosts
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    image: null as File | null,
    location: "",
  });
  const [userAccount, setUserAccount] = useState({
    username: "JohnDoe",
    email: "john@example.com",
  });
  const [isEditing, setIsEditing] = useState<number | null>(null); // Track editing state

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, image: e.target.files ? e.target.files[0] : null });
  };

  // Get current location using the browser's geolocation API
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setForm({ ...form, location: `Lat: ${latitude}, Lon: ${longitude}` });
        },
        (error) => {
          alert("Failed to get location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Add or update a job post
  const handleSaveJob = () => {
    if (isEditing !== null) {
      // Update existing job
      setJobPosts((prev) =>
        prev.map((job) =>
          job.id === isEditing ? { ...job, ...form, date: new Date().toISOString() } : job
        )
      );
      setIsEditing(null);
    } else {
      // Add new job
      const newJob: Job = {
        ...form,
        id: Date.now(),
        date: new Date().toISOString(),
      };
      setJobPosts([...jobPosts, newJob]);
    }

    // Reset form after saving
    setForm({
      title: "",
      description: "",
      category: "",
      image: null,
      location: "",
    });
  };

  // Delete a job post
  const handleDeleteJob = (id: number) => {
    setJobPosts(jobPosts.filter((job) => job.id !== id));
  };

  // Set form for editing a job post
  const handleEditJob = (id: number) => {
    const jobToEdit = jobPosts.find((job) => job.id === id);
    if (jobToEdit) {
      setForm({
        title: jobToEdit.title,
        description: jobToEdit.description,
        category: jobToEdit.category,
        image: jobToEdit.image,
        location: jobToEdit.location,
      });
      setIsEditing(id);
    }
  };

  // Edit user account
  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserAccount({ ...userAccount, [name]: value });
  };

  return (
    <div className="container">
      {/* Edit Account Section */}
      <div className="form-group">
        <h2 className="centered-red-text">Edit Account</h2>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userAccount.username}
          onChange={handleAccountChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userAccount.email}
          onChange={handleAccountChange}
        />
      </div>

      {/* Job Posting Form */}
      <div className="form-group">
        <h2 className="centered-red-text">
          {isEditing !== null ? "Edit Job Post" : "Create Job Post"}
        </h2>
        <label>Job Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Job Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Job Image</label>
        <input type="file" onChange={handleImageChange} />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input type="text" name="location" value={form.location} readOnly />
        <button onClick={handleGetLocation}>Get Current Location</button>
      </div>

      <button className="btn" onClick={handleSaveJob}>
        {isEditing !== null ? "Update Job" : "Save Job"}
      </button>

      {/* Job Posts Display */}
      <h2>Job Posts</h2>
      {jobPosts.length > 0 ? (
        <ul>
          {jobPosts.map((job) => (
            <li key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>Category: {job.category}</p>
              <p>Date: {job.date}</p>
              <p>Location: {job.location}</p>
              <div className="buttons">
                <button className="edit-btn" onClick={() => handleEditJob(job.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDeleteJob(job.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job posts available.</p>
      )}

      <style jsx>{`
        /* Styles */
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          font-weight: bold;
          margin-bottom: 5px;
          display: block;
        }
        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          margin-right: 10px;
        }
        .job-card {
          padding: 15px;
          margin-bottom: 15px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .centered-red-text {
          text-align: center;
          color: red;
        }
        .edit-btn {
          background-color: red;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          margin-right: 10px;
        }
        .delete-btn {
          background-color: red;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default JobManagement;
