import React from "react";

const LoginButton = () => {
  const login = async () => {
    const domain = "dev-23x7d7jkh7l42d6a.us.auth0.com"; // The SPA domain
    const audience = "https://www.challenges-api-com"; // The api identifier
    const scope = "read:challenges";
    const clientId = "Zs6jGAwyzDHqqra3GqnedAZVZOIlX3oB"; // SPA
    const responseType = "code"; // Specific types from the OAuth
    const redirectUri = "http://localhost:3000/challenges:"; // What will be called after we get the authrozation code (must match with the callback URL)

    const response = await fetch(
      `https://${domain}/authorize?` +
        `audience=${audience}&` +
        `scope=${scope}&` +
        `client_id=${clientId}&` +
        `redirect_Uri=${redirectUri}&` +
        `response_type=${responseType}&`,
      {
        redirect: "manual",
      }
    ); // authorize as specified by OAuth in the docs

    window.location.replace(response.url);
  };

  return (
    <button className="Login-button" onClick={() => login()}>
      Log In
    </button>
  );
};

export default LoginButton;
