import FetchPost from "@/app/posts/components/FetchPost";
import FetchPostsUsingSWR from "@/app/posts/components/PostsClientUsingSWR";

export default function PostsPage() {
    return <div>
        {/* <FetchPost /> */}
        <FetchPostsUsingSWR/>
    </div>
}