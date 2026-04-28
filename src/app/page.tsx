import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/home">
        <button className="text-white">랜딩페이지. 클릭하면 홈으로 이동(임시)</button>
      </Link>
    </div>
  );
};

export default page;
