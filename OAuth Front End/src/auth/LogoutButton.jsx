import React from "react";

const LogoutButton = () => {
  const logout = async () => {
    const domain = "dev-23x7d7jkh7l42d6a.us.auth0.com"; // The SPA domain
    const clientId = "Zs6jGAwyzDHqqra3GqnedAZVZOIlX3oB"; // SPA
    const returnTo = "http://localhost:3000"; // The api identifier

    const response = await fetch(
      `https://${domain}/logout/?client_id=${clientId}/&returnto=${returnTo}`,
      { redirect: "manual" }
    );

    window.location.replace(response.url);
  };

  return (
    <button className="Login-button" onClick={() => logout()}>
      Log out
    </button>
  );
};

export default LogoutButton;
