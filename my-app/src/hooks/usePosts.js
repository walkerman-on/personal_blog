import {useMemo} from "react"

export const useSortedPosts = (posts, sorting) => {
    const sortedPosts = useMemo(() => {
        if (sorting) {
          [...posts].sort((a,b) => a[sorting].localeCompare(b[sorting]))
        }
        return posts
      }, [sorting, posts])

      return sortedPosts;
}

export const usePosts = (posts, sorting, query) => {
    const sortedPosts = useSortedPosts(posts, sorting)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSearchedPosts;
}
