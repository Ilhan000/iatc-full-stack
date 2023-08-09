        // Assume you have the JSON data available in a variable called 'jsonData'
        const jsonData = [
          {
            "id": "437293e3-68b2-4e60-8f27-7d9b5d1d4e50",
            "title": "Integration with Third-Party Tools",
            "description": "Enable seamless integration with popular third-party tools to enhance productivity.",
            "count": 77,
            "comments": 11
          
          },
          {
            "id": "16fc3b56-865a-4e23-af21-5079b0836a0e",  
            "title": "Enhanced User Feedback",
            "description": "Gather and analyze user feedback to make improvements across the platform.",
            "count": 33,
            "comments": 5
          },
          {
            "id": "7fadd34d-2bb1-4964-8ef2-882b722b4380",  
            "title": "AI-Powered Recommendations",
            "description": "Develop AI-driven recommendation engine for personalized user suggestions.",
            "count": 42,
            "comments": 7
          },
          {
            "id": "e45e16f2-e50d-4d1d-a1f9-4ac9820b3a7d",
            "title": "Enhanced Data Security",
            "count": 77,
            "description": "Implement advanced data encryption techniques for enhanced security.",
            "comments": 6
          },
          {
            "id": "235899ed-4f14-4a79-b522-6a41ca433c1c",
            "title": "Improved Performance Metrics",
            "description": "Optimize performance metrics to ensure faster response times.",
            "count": 77,
            "comments": 4
          },
          {
            "id": "f5d4c3a7-81c5-4fc0-b63b-eb7d7db7e04e",
            "title": "Enhanced User Profiles",
            "description": "Improve user profiles with additional customization options and social integration.",
            "count": 29,
            "comments": 3
          },
          {
            "id": "91f47d1a-6ce3-4563-920b-43977ad33b9a",
            "title": "Advanced Analytics Dashboard",
            "description": "Introduce an advanced analytics dashboard for deeper data insights.",
            "count": 31,
            "comments": 5
          },
          {
            "id": "c1f1d390-4a96-41c2-8b3f-d2cfb03abf0c",
            "title": "Real-time Collaboration",
            "description": "Implement real-time collaboration features to enable seamless teamwork.",
            "count": 27,
            "comments": 4
          }
          // Add more feedback objects as needed...
      ];

      const feedBackBox = document.getElementById("feedBackBox");

      // Use a for loop to iterate through the JSON data and create feedback boxes
      for (const feedback of jsonData) {
          const feedbackBox = document.createElement("section");
          feedbackBox.className = "add-feedback-box";
          feedbackBox.id = feedback.id;

          const countFeed = document.createElement("div");
          countFeed.className = "count-feed";
          countFeed.innerHTML = `
              <button>
                  <img src="./images/chevron-up.svg" alt="up" /><br />
                  <span class="countReitin">${feedback.count}</span>
              </button>
          `;

          const textFeedBox = document.createElement("div");
          textFeedBox.className = "text-feed-box";
          textFeedBox.innerHTML = `
              <div class="text-feed">
                  <h2>${feedback.title}</h2>
                  <p>${feedback.description}</p>
              </div>
              <div class="feed-com">
                  <img src="./images/comment.svg" alt="comments" /><span>${feedback.comments}</span>
              </div>
          `;

          feedbackBox.appendChild(countFeed);
          feedbackBox.appendChild(textFeedBox);
          feedBackBox.appendChild(feedbackBox);
      }
    