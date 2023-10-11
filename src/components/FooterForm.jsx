import React, { useState } from "react";
import "./FooterForm.css";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send email here
    console.log(formData);
  };

  return (
    <div>
      <div className="text-xl font-bold pb-4">
        <h2>Mempunyai Pertanyaan</h2>
      </div>
      <div className="form py-10 rounded-xl">
        <div className="container mx-auto flex justify-center">
          <div className="w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">
                  Nama:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white">
                  Pesan:
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
