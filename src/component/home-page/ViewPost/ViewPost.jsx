import React, { useEffect } from "react";
import { useLocation } from "react-router";

function ViewPost() {
  const location = useLocation();

  useEffect(() => {
     console.log(location);
  }, [location]);

  return (
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quisquam commodi fuga voluptatem consequuntur minima sint sequi, error aliquid enim nemo, aspernatur harum corporis sed, neque doloremque temporibus a?
      </div>
  );
}

export default ViewPost;
