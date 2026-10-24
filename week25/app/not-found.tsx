import Link from "next/link";

export default function NotFound() {
    return(
        <div className="flex flex-col items-center gap-6 py-32 text-center">
            <p className="text-6xl">🍽️</p>
            <p className="text-7xl font-extrabold text-orange-500">404</p>
            <h1 className="text-3xl font-bold">그런 맛집은 도감에 없어요.</h1>
            <div className="flex gap-3">
                <Link
                    href="/restaurants"
                    className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
                >
                    맛집 목록 보기
                </Link>
                <Link
                    href="/"
                    className="rounded-full border border-orange-500 px-6 py-3 font-bold text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                    홈으로
                </Link>
            </div>
        </div>
    )
}
