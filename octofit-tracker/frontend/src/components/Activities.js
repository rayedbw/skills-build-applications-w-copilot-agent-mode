import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-capybara-69vj4xg7qqrxc46q9-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container">
      <h1>🏃‍♂️ Activities Dashboard</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>🎯 Activity Type</th>
              <th>⏱️ Duration</th>
              <th>📊 Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity._id}>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
                <td>
                  <span style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
