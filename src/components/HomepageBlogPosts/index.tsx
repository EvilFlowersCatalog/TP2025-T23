import blogPosts from '@site/.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function blogPost(post) {
    const meetingNumber = post.title[post.title.length - 1];
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('sk-SK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={styles.blogPost}>
            <Link to={post.permalink}>
            <img src={`img/meeting${meetingNumber}.JPG`} className={styles.blogPostImage} alt={`Meeting ${meetingNumber}`} />
            <h3 className={styles.blogPostTitle}>{post.title}</h3>
            </Link>
            <p className={styles.blogPostDate}>{formattedDate}</p>
        </div>
    );
}

export default function HomepageBlogPosts() {
    return (
        <section className={styles.recentPostsContainer}>
            <h2 className={styles.recentPostsTitle}>Najnovšie príspevky</h2>
            <p className={styles.recentPostsDescription}> Najnovšie zápisnice z našich stretnutí nájdete na <Link to="/blog">blogu</Link>.</p>
            <div className={styles.row}>
                {blogPosts.items.slice(0, 3).map((post) =>
                    blogPost(post)
                )}
            </div>
        </section>
    );
}