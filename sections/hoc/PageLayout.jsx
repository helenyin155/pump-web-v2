import { useRouter } from "next/router";
import styled from "styled-components";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const PageLayout = ({ children, ...props }) => {
  // Logic for highlighting in same path
  const router = useRouter();
  const pathName = router.route;
  let mainPath = "";
  if (pathName !== "/") {
    mainPath = pathName.split("/")[1];
  }

  return (
    <div {...props}>
      <Navbar path={mainPath} />
      <Wrapper>{children}</Wrapper>
      <Footer path={mainPath} />
    </div>
  );
};

const Wrapper = styled.div`
  @media only screen and (min-width: 2000px) {
    max-width: 1600px;
    margin: auto;
  }
`;
