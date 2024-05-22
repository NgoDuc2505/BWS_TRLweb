import { Navigate } from "react-router";

const useHandleClickEnter = (id) => {
  Navigate(`detail/${id}`);
};

export { useHandleClickEnter };
