import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetailPage = ({ params }) => {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsSlug);

    if (!newsItem) {
        notFound();
    }
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.id}/image`}>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
};

export default NewsDetailPage;
