import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.posts.length);
  return (
    <footer className="Footer">
      <p>{postCount} Blog Posts</p>
    </footer>
  );
};

export default Footer;
