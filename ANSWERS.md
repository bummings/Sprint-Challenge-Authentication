#1. What is the purpose of using sessions?
Sessions allow us to persist data between requests. Authentication can reside in a session so as to avoid entering credentials over and over again.

#2. What does bcrypt do to help us store passwords in a secure manner.
BCrypt give us the ability to hash passwords (the ability to salt, too). Hashing, unlike encryption, is a one-way and thus is used simply to verifying an authentic login attempt, rather than unlock protected data.

#3. What does bcrypt do to slow down attackers?
By using accumulative hashing, attackers need to know a great deal more- that is, the _original hash_, the _algorithm used_ to generate that hash as well as _how many rounds_

#4. What are the three parts of the JSON Web Token?
Header, payload and signature.
