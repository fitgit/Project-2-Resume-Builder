/*var awesomeThoughts="I am Sudha and I am AWESOME!";
var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);
$("#main").append(funThoughts);*/

/*var name="Sudha Parvangada";
var role="Web Developer";

var formattedHeaderName=HTMLheaderName.replace("%data%",name);
var formattedHeaderRole=HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);*/

/*var str="audacity";

var newStr= str.charAt(1).toUpperCase() +str.slice(2) ;
console.log(newStr); */

/*var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    s= s.charAt(1).toUpperCase() +s.slice(2) ;
    
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
*/

/*var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    newArray=_array.slice(0);
    newArray[_array.length-1]=_array[_array.length-1] +1;
    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));*/

/*var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var temp=oldName.split(" ");
    var firstName=temp[0].charAt(0).toUpperCase() + temp[0].slice(1).toLowerCase();
    var lastName=temp[1].toUpperCase();
    finalName=firstName + " " +lastName;
    
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));*/

/*var bio={
		"name":"Sudha Parvangada",
        "role":"Web Developer",
        "contacts":{
	        "email":"spens.mallangada@yahoo.com",
		    "phone":"xxx-xxx-xxxx"
		},
        "welcomeMsg":"Hello!",
        "pictureUrl":"",
        "skills":[
	        "great","developer"]
	    };
console.log(bio);
var formattedHeaderName=HTMLheaderName.replace("%data%",bio.name);
var formattedHeaderRole=HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);

var work={};
			work.position="Senior Member of Tech Staff";
			work.employer="AT&T";
			work.yearsWorked=18;
			work.cityOfBusiness="Middletown";
		
var education={};
				education["name"]="LSU";
				education["yearsAttended"]=2;
				education["city"]="Baton Rouge";
			


$("#workExperience").append(work["position"]);
$("#workExperience").append(education.name);
*/

/*var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

//weirdObject

//console.log(weirdObject.8property);
console.log(weirdObject["8property"]);*/

var work ={
			"jobs":[
					{
						"employer":"AT&T",
						"title":"Senior Member of Tech Staff",
						"location":"Middletown",
						"dates":"xx/xx/xxxx - Present",
						"description":"At my Current Role, I do......."
					},
					{
						"employer":"Spens Consultants",
						"title":"Architect",
						"location":"Middletown",
						"dates":"xx/xx/xxxx - xx/xx/xxxx ",
						"description":"As an Architect, I ......."
					}
				]

}

var projects={
			"projects":[
					{
						"title":"Architect/Developer",
						"dates":"xx/xx/xxxx - xx/xx/xxxx",
						"description":"Implemented.....",
						"images":[{"url1":""},{"url2":""}
						]
					},
					{
						"title":"Architect/Developer",
						"dates":"xx/xx/xxxx - xx/xx/xxxx",
						"description":"Implemented.....",
						"images":[
						]
					}
				]
			}	

var bio={
			"name":"Sudha Parvangada",
	        "role":"Web Developer",
	        "contacts":{
	        "email":"spens.mallangada@yahoo.com",
		    "mobile":"xxx-xxx-xxxx",
		    "github":"fitgit",
		    "location":"Middletown"
			},
	        "welcomeMsg":"Hello!",
	        "pictureUrl":"",
	        "skills":[
	        "great",
	        "developer"
	        ]
		}
var education={
				"schools":[
							{
								"name":"LSU",
								"location":"Baton Rouge",
								"degree":"MS",
								"majors":["Comp Sci"],
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
				"onlineCourse":[
								{"title":"CSS3",
								 "school":"udacity",
								 "dates":"xx/xx/xxxx - xx/xx/xxxx",
								 "url":""
								},
								{"title":"HTML5",
								 "school":"udacity",
								 "dates":"xx/xx/xxxx - xx/xx/xxxx",
								 "url":""
								}
				]
			}	

/*if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
    
    var formattedHTMLskills;
    for(var i=0;i<bio.skills.length;i++){
    	formattedHTMLskills=HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedHTMLskills);
		
	}
}*/


/*function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedWkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedWkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var finalString=formattedWkEmployer + formattedWkTitle;
	$(".work-entry:last").append(finalString);

	var formattedWorkLoc=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLoc);

	var formattedWrkDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedWrkDates);

    var formattedWorkDesc=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDesc);

	}
}	
$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});*/

/*function locationizer(work){
	var locArray=[];

	for (job in work.jobs){
		locArray.push(work.jobs[job].location);
	}

	return locArray;
}

console.log(locationizer(work));*/

$('#main').append(internationalizeButton);

function inName(firstName,lastName){
	var nameArray=[];

	firstName=firstName.charAt(0).toUpperCase() +firstName.slice(1) ;
	lastName=lastName.toUpperCase();
	nameArray.push(firstName);
	nameArray.push(lastName);

    return nameArray;
}

console.log(inName('sudha','parvangada'));