function generatePortfolio(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const project = document.getElementById('project').value.trim();

    const output = document.getElementById('portfolioOutput');
    output.innerHTML = `
        <h3>${name}'s Portfolio</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills.map(skill => `<span class="skill">${skill}</span>`).join(' ')}</p>
        <p><strong>Project:</strong> ${project}</p>
    `;

    output.classList.remove('hidden');

    console.log("Portfolio Data:", { name, email, skills, project });
}
