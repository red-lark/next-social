import Image from "next/image";
import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";

const Post = () => {
  const { userId } = auth();
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            Test
          </span>
        </div>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        
          <div className="w-full min-h-96 relative">
            <Image
              src="https://images.pexels.com/photos/26924196/pexels-photo-26924196/free-photo-of-natur-feld-tier-berg.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        
        <p>Desc</p>
      </div>
      {/* INTERACTION */}
      <Suspense fallback="Loading...">
        
      </Suspense>
      <Suspense fallback="Loading...">
        
      </Suspense>
    </div>
  );
};

export default Post;
