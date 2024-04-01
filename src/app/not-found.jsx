"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>not-Found</h2>
      <p>
        Sorry,the page you are looking for does not exist or have been removed
        by owner
      </p>
      <Link href="/">return home</Link>
    </div>
  );
};

export default NotFound;
