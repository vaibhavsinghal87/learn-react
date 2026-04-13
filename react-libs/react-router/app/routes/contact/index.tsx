import { useLocation } from "react-router";
function Contact() {
  const location = useLocation();
  console.log(location.state);
  console.log("Contact page");
  return <>Contact page</>;
}

export default Contact;
