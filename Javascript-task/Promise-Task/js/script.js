async function fetchUserData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const users = await response.json();
        displayUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    function displayUsers(users) {
      const userTableBody = document.getElementById('userData');
      userTableBody.innerHTML = '';

      users.forEach(user => {
        const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.company.name}</td>
          <td>${address}</td>
          <td>${user.website}</td>
        `;
        userTableBody.appendChild(row);
      });
    }

    window.onload = fetchUserData;
