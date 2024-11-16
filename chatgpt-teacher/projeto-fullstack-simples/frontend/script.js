document.getElementById('userForm').addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        loadUsers();
    })
    .catch((error) => {
        console.error('Erro:', error);
    });

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}

function loadUsers() {
    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.nome} (${user.email})`;
            userList.appendChild(li);
        });
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}

loadUsers();