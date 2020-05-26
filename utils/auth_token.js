import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

const TOKEN_STORAGE_KEY = "myApp.authToken";

export default class AuthToken {
    constructor(token) {
    // we are going to default to an expired decodedToken
    this.decodedToken = { email: "", exp: 0 };

    // then try and decode the jwt using jwt-decode
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {
    }
  }
  static decodeToken(token) {
    const dt = jwtDecode(token);
    return dt
  }

  authorizationString() {
    return `Bearer ${this.token}`;
  }

  expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  isExpired() {
    return new Date() > this.expiresAt;
  }

  isValid() {
    return !this.isExpired();
  }

  static getToken() {
    if (!document.cookie) {
      return null;
    }

    const authToken = document.cookie.split(';').map(c => c.trim()).filter(c => c.startsWith('myApp.authToken='));

    if (authToken.length === 0) {
      return null;
    }
    return  decodeURIComponent(authToken[0].split('=')[1]);
  };

  static async storeToken(token) {
    Cookie.set(TOKEN_STORAGE_KEY, token);
  }

  static deleteToken() {
    Cookie.remove(TOKEN_STORAGE_KEY)
}
}
