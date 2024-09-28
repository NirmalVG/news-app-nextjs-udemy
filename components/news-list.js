import Link from "next/link";

const NewsList = ({ news }) => {
    return (
        <ul className="news-list">
            {news.map((newsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.id}`}>
                        <img
                            src={`/images/news/${newsItem.image}`}
                            alt={newsItem.title}
                            fill
                        />
                        <span>{newsItem.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NewsList;
