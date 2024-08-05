// Fetch and render JSON content here (same as provided example)
fetch('data.json')
.then(response => response.json())
.then(data => {
    document.title = data.title;

    // Header
    document.querySelector('#header-name').textContent = data.header.name;
    document.querySelector('#header-role').textContent = data.header.role;
    document.querySelector('#header-bio').textContent = data.header.bio;

    // Skills
    const skillsContainer = document.querySelector('#skills-container');
    Object.entries(data.skills).forEach(([category, skills]) => {
        skillsContainer.innerHTML += `<h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-50 mb-2">${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
        skillsContainer.innerHTML += `<ul class="grid md:grid-cols-4 grid-cols-2 gap-4 mb-6">${skills.map(skill => `<li class="bg-white dark:bg-[#333] rounded-lg p-2">${skill}</li>`).join('')}</ul>`;
    });

    // Experience
    const experienceContainer = document.querySelector('#experience-container');
    data.experience.forEach(exp => {
        experienceContainer.innerHTML += `
            <div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-50">${exp.position}</h3>
                <p class="text-gray-600 dark:text-neutral-200 mb-4">${exp.duration}</p>
                <div class="border-l-4 pl-6">
                    ${exp.projects.map(project => `
                        <div class="text-gray-600 dark:text-neutral-50 bg-white dark:bg-[#333] rounded-lg p-4 mb-6">
                            <h3 class="font-semibold text-gray-800 dark:text-neutral-50">${project.title}</h3>
                            <p class="text-gray-600 dark:text-neutral-200 mb-4">${project.role}</p>
                            <p class="text-gray-600 dark:text-neutral-200 text-sm mb-4">${project.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });

    // Projects
    const projectsContainer = document.querySelector('#projects-container');
    data.projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="bg-white dark:bg-[#333] rounded-lg p-4 mb-6">
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-50">${project.title}</h3>
                    <p class="text-gray-600 dark:text-neutral-200">${project.technologies.join(', ')}</p>
                </div>
                <div>
                    <div class="text-gray-600 dark:text-neutral-200">
                        <p class="text-gray-600 dark:text-neutral-200 text-sm mb-4">${project.description}</p>
                        <div class="flex text-sm">
                            <a href="${project.links.source}" class="text-blue-600 dark:text-blue-400 underline pr-2">Source Code</a>
                            <p>|</p>
                            <a href="${project.links.visit}" class="text-blue-600 dark:text-blue-400 underline pl-2">Visit Project</a>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    // Achievements
    const achievementsContainer = document.querySelector('#achievements-container');
    data.achievements.forEach(achievement => {
        achievementsContainer.innerHTML += `<li class="bg-white dark:bg-[#333] dark:text-neutral-50 p-3 rounded-xl">${achievement}</li>`;
    });

    // Hobbies
    const hobbiesContainer = document.querySelector('#hobbies-container');
    data.hobbies.forEach(hobby => {
        hobbiesContainer.innerHTML += `
            <div class="bg-white dark:bg-[#333] rounded-lg p-4 mb-6">
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-50">${hobby.title}</h3>
                </div>
                <div>
                    <div class="text-gray-600 dark:text-neutral-200">
                        <p class="text-gray-600 dark:text-neutral-200 text-sm mb-4">${hobby.description}</p>
                    </div>
                </div>
            </div>`;
    });

    // Certifications
    const certificationsContainer = document.querySelector('#certifications-container');
    data.certifications.forEach(cert => {
        certificationsContainer.innerHTML += `<li class="bg-white dark:bg-[#333] dark:text-neutral-200 p-3 rounded-xl">${cert.title} - <span class="bg-gray-100 dark:bg-[#232323] font-bold p-2 text-sm rounded-xl">${cert.provider}</span></li>`;
    });

    // Footer
    const footerSocialLinks = document.querySelector('#footer-social-links');
    data.footer.socialLinks.forEach(link => {
        footerSocialLinks.innerHTML += `
            <a href="${link.url}" target="_blank">
                <li class="m-2 p-2">
                    <div>
                        <img src="${link.icon}" class="w-7 h-7 invert dark:invert-0" alt="${link.platform}">
                    </div>
                </li>
            </a>`;
    });
})
.catch(error => console.error('Error loading JSON:', error));