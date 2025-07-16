import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-capybara-69vj4xg7qqrxc46q9-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container">
      <h1>🏆 Champions Leaderboard</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>🏅 Rank</th>
              <th>👤 Username</th>
              <th>💯 Score</th>
              <th>🎖️ Badge</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry._id}>
                <td>
                  <span style={{
                    padding: '0.5rem',
                    borderRadius: '50%',
                    background: index === 0 ? 'linear-gradient(135deg, #FFD700, #FFA500)' : 
                               index === 1 ? 'linear-gradient(135deg, #C0C0C0, #A9A9A9)' :
                               index === 2 ? 'linear-gradient(135deg, #CD7F32, #8B4513)' : 
                               'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    fontWeight: 'bold',
                    minWidth: '30px',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}>
                    {index + 1}
                  </span>
                </td>
                <td>{entry.user.username}</td>
                <td>{entry.score}</td>
                <td>
                  {index === 0 && '👑'}
                  {index === 1 && '🥈'}
                  {index === 2 && '🥉'}
                  {index > 2 && '⭐'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
