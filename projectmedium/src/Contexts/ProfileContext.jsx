import React from "react";

export const AppContext = React.createContext();

const ProfileContext = ({ children }) => {
  const [name, setName] = React.useState("Asutosh");
  const [profileimage, setImage] = React.useState("https://lh3.googleusercontent.com/a-/AOh14GiU9Lq96z4H6aK2POZLJmo8pfmaV6ItuChBsjkOGv0=s96-c");
  const [email, setEmail] = React.useState("beheraasutosh132@gmail.com")
  const handleLogin = (username) => {
    setName(username.name);
    setImage(username.imageUrl);
    setEmail(username.email);
  };

  const value = { name, profileimage,email,  handleLogin };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ProfileContext };