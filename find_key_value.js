// Set your inputData = mail = step1.mail

var mail = inputData.mail;
var maMap = new Map();
maMap.set("user1@domaine.fr", "User1_first_name User1_ast_name");
maMap.set("user2@domaine.fr", "User2_first_name User2_last_name");
maMap.set("user3@domaine.fr", "User3_first_name User3_last_name");

var name1 = maMap.get(mail);
output = [{name: name1}];
