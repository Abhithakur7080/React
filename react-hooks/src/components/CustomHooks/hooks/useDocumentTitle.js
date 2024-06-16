import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
};

export default useDocumentTitle;
