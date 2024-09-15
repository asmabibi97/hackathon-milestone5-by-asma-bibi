

// Listening to the form submission
document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion (use HTMLTextAreaElement for textarea elements)
    const profilepictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;  // Correct type for textarea
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement; // Correct type for textarea
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;         // Correct type for textarea
    const usernameElement = document.getElementById('username') as HTMLInputElement;

    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
    const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        //Profile picture handling
        const profilepictureFile = profilepictureInput.files?.[0];
        const profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
//custom url handling 
const username = usernameElement.value;
         const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;



        // Create resume output
        const resumeOutput = `
          <h2>Resume</h2>
           ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">` : ''}

           <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
 // // Create a download link for the resume
        // const downloadLink = document.createElement('a');
        // downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        // downloadLink.download = uniquePath;
        // downloadLink.textContent = 'Download your resume here';

       // Display the resume output in the div with ID 'resumeoutput'
        const resumeOutputElement = document.getElementById('resumeoutput');  
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden")
            //************ */
            //create container for buttons 
            const buttonscontainer = document.createElement("div");
            buttonscontainer.id = "buttoncontainer";
             resumeOutputElement.appendChild(buttonscontainer);
            
             //add download PDF button
             const downloadbutton = document.createElement("button")
             downloadbutton.textContent ="Download as PDF"
             downloadbutton.addEventListener("click" ,() =>{
                window.print();
             });
             buttonscontainer.appendChild(downloadbutton);
            //  **********************************************************8
            // Add "Shareable Link" button
            const shareButton = document.createElement("button");
            shareButton.textContent = "Copy Shareable Link";
            shareButton.addEventListener("click" ,async()=>{
                try{
                    //create a unique shareable link
                    const shareableLink =`https://yourdomain.com/resums/${name.replace(/\s+/g, '_')}_cv.html`
                    //use clipboard api to copy the link
                    await navigator.clipboard.writeText(shareableLink);
                        alert('Shareable link copied to clipboard!');
                    }catch(err){
                        console.error('Failed to copy the link: ', err);
                        alert("failed to copy link to clipboard. please try again");
                    }
                    });
                
            
                    buttonscontainer.appendChild(shareButton);

                 } else {
            console.error(`The resume output element is missing.`);
        }
    } else {
        console.error(`One or more form elements are missing.`);
    }
});










