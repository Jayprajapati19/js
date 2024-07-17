const User = {
   _email: 'jd@gmail.com',
   _password: "1909",

   get email() {
      return this._email.toLowerCase()
   },

   set email(value) {
      this._email = value
   }
}

const tea = Object.create(User)
console.log(tea.email);


