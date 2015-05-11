
//This is a fictitious resume, using images and description from darpa.mil site.
var work ={
			"jobs":[
					{
						"employer":"DARPA Level IV",
						"title":"Senior Robot of Machine Staff",
						"location":"Un-disclosed,NJ",
						"dates":"present",
						"description":"I am a machine lead, that implemented the -Tern, a joint program between DARPA" +
						" and the U.S. Navy’s Office of Office of Naval Research (ONR)"

					},
					{
						"employer":"DARPA Level III",
						"title":"Robot of Machine Staff",
						"location":"Un-disclosed,NJ",
						"dates":"xxxx",
						"description":"I was the machine, that implemented,a new DARPA program aims to investigate the role " +
						"of neural “replay” in the formation and recall of memory, with the goal of helping individuals " +
						"better remember specific episodic events and learned skills"
					}
				]
				//add display function

}

var projects={
			"projects":[
					{
						"title":"Senior Robot of Machine Staff",
						"dates":"xx/xx/xxxx - xx/xx/xxxx",
						"description":"I was the machine lead, that implemented,a new DARPA program aims to investigate the role " +
						" of neural “replay” in the formation and recall of memory, with the goal of helping individuals better" +
						" remember specific episodic events and learned skills. The 24-month fundamental research program, Restoring" +
                        " Active Memory Replay or RAM Replay, is designed to develop novel and rigorous computational methods to help" +
                        " investigators determine not only which brain components matter in memory formation and recall but also" +
                        " how much they matter. To ensure real-world relevance, those assessments will be validated through performance" +
                        " on DoD-relevant tasks instead of conventional computer-based behavioral paradigms commonly used to assess memory" +
                        " in laboratory settings. New knowledge and paradigms for memory assessment and formation could translate into" +
                        "improved rehabilitation and recovery for injured warfighters challenged by impaired memory.",
						"images":["images/Sidearm-Talon145-435.jpg","images/robotics_135_435_a.jpg"]
					},
					{
						"title":"Robot of Machine Staff",
						"dates":"xx/xx/xxxx - xx/xx/xxxx",
						"description":"I was a machine, that implemented the -Tern, a joint program " +
						"between DARPA and the U.S. Navy’s Office of Naval Research (ONR), seeks to give forward-deployed small ships" +
						"the unprecedented capacity to serve as mobile launch and recovery platforms for medium-altitude, long-endurance " +
						"unmanned aerial systems (UAS). These systems would provide long-range intelligence, surveillance and " +
						"reconnaissance (ISR) and other capabilities over greater distances and time periods than helicopters and would" +
						" require far less dedicated infrastructure resources than conventional fixed-wing manned and unmanned aircraft." +
						" As part of its individual investment in Tern, DARPA has launched two successful technology demonstration efforts that" +
						" grew from Phase 1 research and are separately approaching potential transition to the Services:",
						"images":[
						]
					}
				]
			}	

var bio={
			"name":"Sudha Parvangada",
	        "role":"A Lean Mean Military Robot",
	        "contacts":{
	        "email":"xxxx.xxxxxxxxx@yahoo.com",
		    "mobile":"xxx-xxx-xxxx",
		    "github":"fitgit",
		    "location":"Un-disclosed,NJ",
		    "twitter":"xxxxx",
		    "blog":"xxxx"
			},
	        "welcomeMessage":"Humankind Hello!",
	        "biopic":"images/robot_profile.jpg",
	        "skills":[
	        "Artificial (really ?) Intelligence",
	        "Precision(Robotic) Surgery",
	        "Assembly line Integrator"
	        ]
	        //need to add display function
		}
var education={
				"schools":[
							{
								"name":"LSU",
								"location":"Baton Rouge,LA",
								"degree":"MS",
								"majors":["Computer Science"],
								"dates":"xx/xx/xxxx - xx/xx/xxxx",
								"url":"http://www.lsu.edu"	
							},
							{
								"name":"Univ of Mysore",
								"location":"Mysore,India",
								"degree":"BS",
								"majors":["Computer Engineering"],
								"dates":"xx/xx/xxxx - xx/xx/xxxx",
								"url":"www.sjcemysore.org/"
							}
						],	
			
				"onlineCourses":[
								{
									"title":"ios Developer",
									"school":"Stanford University",
									"date":"xx/xx/xxxx",
									"url":"http://stanford.edu"
								},
								{
									"title":"CSS3",
								 	"school":"udacity",
								 	"date":"xx/xx/xxxx",
								 	"url":"http://www.udacity.com"
								},
								{"title":"HTML5",
								 "school":"udacity",
								 "date":"xx/xx/xxxx",
								 "url":"http://www.udacity.com"
								}
				]
			}
			function capitalizeFirstChar(str){
				//console.log("capitalizeFirstChar: incoming str= " + str);
				var capitalizeString=str.charAt(0).toUpperCase() + str.slice(1);
				//console.log("capitalizeFirstChar: return capitalizeString= " + capitalizeString);
				return capitalizeString;
			}

			function formatName(name){
				//console.log("formatName: incoming name= " + name);
				var nameArray=name.split(" ");
				var newName=capitalizeFirstChar(nameArray[0]) + " " + capitalizeFirstChar(nameArray[1]);
				console.log( "formatName: name= " + newName );
				return newName;
			}	

			bio.addNameAndRole=function (){
				
				var formattedHeaderName=HTMLheaderName.replace("%data%",formatName(bio.name));
				var formattedHeaderRole=HTMLheaderRole.replace("%data%",bio.role);

				$("#header").prepend(formattedHeaderRole);
				$("#header").prepend(formattedHeaderName);

			}


			bio.addTopContacts=function(appendId){
				$(appendId).append(HTMLmobile.replace("%data%",bio.contacts.mobile));
				$(appendId).append(HTMLemail.replace("%data%",bio.contacts.email));
				$(appendId).append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
				$(appendId).append(HTMLgithub.replace("%data%",bio.contacts.github));
				$(appendId).append(HTMLblog.replace("%data%",bio.contacts.blog));
				$(appendId).append(HTMLlocation.replace("%data%",bio.contacts.location));
				
			}
            bio.addPicAndWlcomeMsg= function(){
            	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
				$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
            }
			bio.addSkills=function(){
				if (bio.skills.length >0)
					$("#header").append(HTMLskillsStart);
				for (skill in bio.skills){
					$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
				}

			}
			work.addWorkDetails=function(){
				if (work.jobs.length >0)
					$("#workExperience").append(HTMLworkStart);
				for (var job in work.jobs){
					var employerRole=work.jobs[job].employer + " - " + work.jobs[job].title;
					$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",employerRole));
					$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
					$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
					$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));

				}

			}
			
			projects.addProjectDetails=function(){
				if (projects.projects.length >0)
					$("#projects").append(HTMLprojectStart);
				for (var project in projects.projects){
					$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
					$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
					$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
					for (image in projects.projects[project].images){
						$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[image]));
					}

				}
			}

			education.addEducationDetails=function(){
				if (education.schools.length >0)
					$("#education").append(HTMLschoolStart);
				for (var school in education.schools){
					var nameDegree=education.schools[school].name + " - " + education.schools[school].degree;
					$(".education-entry:last").append(HTMLschoolName.replace("%data%",nameDegree));
					$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
					$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
					
					var majorStr="";
					for (var major in education.schools[school].majors){
						majorStr =majorStr +education.schools[school].majors[major];
					}
					console.log("addEductationDetails: majorStr= " + majorStr);
					$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",majorStr));
				}	
					$(".education-entry:last").append(HTMLonlineClasses);
					for (var course in education.onlineCourses){
						var olTitleRole=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school)
						$(".education-entry:last").append(olTitleRole);
						$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[course].date));
						$(".education-entry:last").append(HTMLonlineURL .replace("%data%",education.onlineCourses[course].url));
					}	
					
			}

			

			function main(){
				bio.addNameAndRole();
				bio.addTopContacts("#topContacts");
				bio.addPicAndWlcomeMsg();
				bio.addSkills();
				work.addWorkDetails();
				projects.addProjectDetails();
				education.addEducationDetails();
				$("#mapDiv").append(googleMap);
				bio.addTopContacts("#footerContacts")
			}

			main();

