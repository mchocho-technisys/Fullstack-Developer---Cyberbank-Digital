import useNavigation from "../hooks/useNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  return path === currentPath ? children : null;
};

export default Route;
