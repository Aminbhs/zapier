var twitter_orga = inputData.twitter_orga;
var twitter_person = inputData.twitter_person
var linkedin_orga = inputData.linkedin_orga
var linkedin_person = inputData.linkedin_person

if (twitter_orga != undefined) {
  twitter_orga = "https://twitter.com/" + twitter_orga
} else {
  twitter_orga = ""
}

if (twitter_person != undefined ) {
  twitter_person = "https://twitter.com/" + twitter_person
} else {
  twitter_person = ""
}

if (linkedin_orga != undefined ) {
  linkedin_orga = "https://www.linkedin.com/" + linkedin_orga
} else {
  linkedin_orga = ""
}

if (linkedin_person != undefined ) {
  linkedin_person = "https://www.linkedin.com/" + linkedin_person
} else {
  linkedin_person = ""
}

output = [{twitter_orga: twitter_orga, twitter_person: twitter_person, linkedin_orga: linkedin_orga, linkedin_person: linkedin_person}];