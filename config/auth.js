// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth': {
    'clientID': '119590025043593', // your App ID
    'clientSecret': '755d2ee40c8675e50d8d8984d8556e77', // your App Secret
    'callbackURL': 'http://localhost:3000/auth/facebook/callback'
  },

  'twitterAuth': {
    'consumerKey': 'xT5YSDG3UVHkiSfG3Hk2hamkM',
    'consumerSecret': 'B0I2SjkmqnGXt4r9tC6XVlaF8G76dltMxkcuumg8WQsOwtHHGR',
    'callbackURL': 'http://127.0.0.1:3000/connect/twitter/callback'
  },

  'googleAuth': {
    'clientID': '9260197397-rkjfm7op9hividvjc66rurtsiepbn332.apps.googleusercontent.com',
    'clientSecret': 'HG0l4ubad9j7CyliYiVI',
    'callbackURL': 'http://localhost:3000/auth/google/callback'
  }

};
