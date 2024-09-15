var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// Listening to the form submission
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // Type assertion (use HTMLTextAreaElement for textarea elements)
    var profilepictureInput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education'); // Correct type for textarea
    var experienceElement = document.getElementById('experience'); // Correct type for textarea
    var skillsElement = document.getElementById('skills'); // Correct type for textarea
    var usernameElement = document.getElementById('username');
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //Profile picture handling
        var profilepictureFile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
        //custom url handling 
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Create resume output
        var resumeOutput = "\n          <h2>Resume</h2>\n           ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n\n           <h2>Resume</h2>\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // // Create a download link for the resume
        // const downloadLink = document.createElement('a');
        // downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        // downloadLink.download = uniquePath;
        // downloadLink.textContent = 'Download your resume here';
        // Display the resume output in the div with ID 'resumeoutput'
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            //************ */
            //create container for buttons 
            var buttonscontainer = document.createElement("div");
            buttonscontainer.id = "buttoncontainer";
            resumeOutputElement.appendChild(buttonscontainer);
            //add download PDF button
            var downloadbutton = document.createElement("button");
            downloadbutton.textContent = "Download as PDF";
            downloadbutton.addEventListener("click", function () {
                window.print();
            });
            buttonscontainer.appendChild(downloadbutton);
            //  **********************************************************8
            // Add "Shareable Link" button
            var shareButton = document.createElement("button");
            shareButton.textContent = "Copy Shareable Link";
            shareButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resums/".concat(name_1.replace(/\s+/g, '_'), "_cv.html");
                            //use clipboard api to copy the link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            //use clipboard api to copy the link
                            _a.sent();
                            alert('Shareable link copied to clipboard!');
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error('Failed to copy the link: ', err_1);
                            alert("failed to copy link to clipboard. please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonscontainer.appendChild(shareButton);
        }
        else {
            console.error("The resume output element is missing.");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
